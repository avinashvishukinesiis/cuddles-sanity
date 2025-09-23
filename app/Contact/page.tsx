import HeroSection from "@/components/Contact/HeroSection/HeroSection"
import LetsConnect from "@/components/LetsConnect/letsConnect"


const page = () => {
    return (
        <div className="flex flex-col font-ohno">
            <HeroSection/>
            <LetsConnect/>
        </div>
    )
}

export default page