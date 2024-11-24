## What's inside?

-   <img src="https://svgl.app/library/laravel.svg" width="25" height="11"> Laravel
-   <img src="https://svgl.app/library/react.svg" width="25" height="11"> React (Interia)
-   <img src="https://svgl.app/library/phpstorm.svg" width="25" height="11"> JetBrains IDE Config
-   <img src="https://exiz.org/images/logo/eslint.svg" width="25" height="11"> EsLint Config
-   <img src="https://svgl.app/library/tailwindcss.svg" width="25" height="11"> TailwindCSS
-   <img src="https://svgl.app/library/shadcn-ui.svg" width="25" height="11"> shadcn-ui
-   <img src="https://svgl.app/library/prettier-icon-light.svg" width="25" height="11"> Prettier
-   <img src="https://laravel.com/img/ecosystem/pint.min.svg" width="25" height="11"> Pint
-   <img src="https://avatars.githubusercontent.com/u/7535935?s=280&v=4" width="25" height="11"> Spatie laravel-permission
-   <img src="https://avatars.githubusercontent.com/u/22891715?s=200&v=4" width="25" height="11"> 404lab laravel-impersonate

& Better File structure for the typescript project. Located in `resources/js` folder.

## How to use?

1. Clone this repository `git clone git@github.com:toohard2explain/levis-laravel-template.git`
2. Duplicate `.env.example` file and rename it to `.env` and fill in the necessary information.
3. Run `composer install` and `npm install` to install the necessary packages.
4. Run `php artisan key:generate` to generate the application key.
5. Run `php artisan migrate` to migrate the database.
6. Run `npm run dev` to compile the assets.
7. Run `php artisan serve` to start the server.

We would recommend to use [Laravel Herd](https://herd.laravel.com) for the development environment.

## Models in Typescript

Unfortunately you have to create them manual but it's easier due to our new file structure and extensions.

Create a new file in `resources/js/types/models` folder.

```ts
import { Identifiable, Model } from "@/types";

export interface User extends Model, Identifiable {
    name: string;
    email: string;
    email_verified_at?: string;
}
```

The `Model` interface is for the `created_at` and `updated_at` fields. The `Identifiable` interface is for the `id` field.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
