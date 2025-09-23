"use client";

import FAQSection from "@/components/FAQ/Faq";
import Footer from "@/components/Footer/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import NavBar from "@/components/NavBar/Navbar";
import { usePathname } from "next/navigation";


type RootLayoutClientProps = {
    children: React.ReactNode;
};

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
    const pathname = usePathname();

    const noHeaderFooterRoutes = ["/studio"];
    const shouldShowHeaderFooter = !noHeaderFooterRoutes.some(route =>
        pathname.startsWith(route)
    );

    const shouldShowFAQ = pathname.toLowerCase() !== "/partnerships"; 

    return (
        <>
            <NavBar />
            <main className={`h-max min-h-[200px] md:min-h-[500px] ${shouldShowHeaderFooter ? "mt-[65px] md:mt-[81px]" : ""} box-border`}>
                <MotionWrapper>
                    {children}
                    {shouldShowFAQ && <FAQSection />}
                    <Footer />
                </MotionWrapper>
            </main>
        </>
    );
}