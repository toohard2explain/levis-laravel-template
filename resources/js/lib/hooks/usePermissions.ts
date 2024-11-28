import { usePage } from "@inertiajs/react";

export default function usePermissions() {
    const { permissions } = usePage().props;

    if (!permissions.permissions || !permissions.roles) {
        return {
            permissions: {
                roles: [],
                permissions: [],
                allRoles: [],
                allPermissions: [],
            },
            can: () => false,
            cannot: () => true,
            is: () => false,
            isNot: () => true,
        };
    }

    const can = (permission: string) => {
        return permissions.permissions!.includes(permission);
    };

    const cannot = (permission: string) => {
        return !can(permission);
    };

    const is = (role: string) => {
        return permissions.roles!.some((r) => r.name === role);
    };

    const isNot = (role: string) => {
        return !is(role);
    };

    return {
        permissions,
        can,
        cannot,
        is,
        isNot,
    };
}
