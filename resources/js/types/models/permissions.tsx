import { Identifiable, Model } from "@/types";

export interface Permission extends Identifiable, Model {
    name: string;
}

export interface Role extends Identifiable, Model {
    name: string;
    permissions?: string[];
}
