import { Toaster } from "@/components/ui/sonner";
import { PageProps } from "@/types";

export default function AppLayout({ auth }: PageProps) {
    return (
        <>
            <div className={"min-h-screen w-full"}></div>

            <Toaster />
        </>
    );
}
