import { Identifiable, Model } from "@/types";

export interface User extends Model, Identifiable {
    name: string;
    email: string;
    email_verified_at?: string;
}
