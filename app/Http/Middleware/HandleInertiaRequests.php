<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $manager = app('impersonate');
        $isImpersonating = $manager->isImpersonating();
        $impersonator = User::find($manager->getImpersonatorId());

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'impersonate' => [
                'isImpersonating' => $isImpersonating,
                'original' => $impersonator,
            ],
            'permissions' => [
                'allRoles' => Role::all()->map(function ($role) {
                    $role->permissions = $role->permissions()->pluck('name');

                    return $role;
                }),
                'allPermissions' => Permission::all(),
                'roles' => $request->user() ? $request->user()->roles : null,
                'permissions' => $request->user() ? $request->user()->permissions->pluck('name') : null,
            ],
            'ziggy' => fn () => [
                ...(new Ziggy())->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
