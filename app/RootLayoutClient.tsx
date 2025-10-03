"use client";

import FAQSection from "@/components/FAQ/Faq";
import Footer from "@/components/Footer/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import NavBar from "@/components/NavBar/Navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { initializeAutoCompact } from "@/lib/auto-compact";
import { SiteSettings } from "@/lib/types";


type RootLayoutClientProps = {
    children: React.ReactNode;
    siteSettings: SiteSettings | null;
};

export default function RootLayoutClient({ children, siteSettings }: RootLayoutClientProps) {
    const pathname = usePathname();

    // Initialize AutoCompact system on client side
    useEffect(() => {
        const initializeSystem = async () => {
            try {
                await initializeAutoCompact('production');
                console.log('[AutoCompact] System initialized successfully');
            } catch (error) {
                console.error('[AutoCompact] Initialization failed:', error);
            }
        };

        initializeSystem();
    }, []);

    const noHeaderFooterRoutes = ["/studio"];
    const shouldShowHeaderFooter = !noHeaderFooterRoutes.some(route =>
        pathname.startsWith(route)
    );

    const shouldShowFAQ = pathname.toLowerCase() !== "/partnerships";

    return (
        <>
            {shouldShowHeaderFooter && <NavBar siteSettings={siteSettings} />}
            <main className={`h-max min-h-[200px] md:min-h-[500px] ${shouldShowHeaderFooter ? "mt-[65px] md:mt-[81px]" : ""} box-border`}>
                <MotionWrapper>
                    {children}
                   {shouldShowHeaderFooter && shouldShowFAQ && <FAQSection />}
                    {shouldShowHeaderFooter && <Footer />}
                </MotionWrapper>
            </main>
        </>
    );
}