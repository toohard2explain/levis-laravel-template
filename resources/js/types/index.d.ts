import { User } from "@/types/models/user";
import { Config } from "ziggy-js";

export interface Model {
    created_at: string;
    updated_at: string;
}

export interface Identifiable {
    id: number;
}

export interface Auth {
    user: User;
}

export interface Impersonate {
    isImpersonating: boolean;
    original?: User;
}

export interface ZiggyConfig extends Config {
    location: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: Auth;
    impersonate: Impersonate;
    ziggy: ZiggyConfig;
};
