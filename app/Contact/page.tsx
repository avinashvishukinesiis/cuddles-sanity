import HeroSection from "@/components/Contact/HeroSection/HeroSection"
import LetsConnect from "@/components/LetsConnect/letsConnect"
import { getContact } from '@/lib/sanity-utils'

const page = async () => {
    const contactData = await getContact()

    return (
        <div className="flex flex-col font-ohno">
            <HeroSection contactData={contactData} />
            <LetsConnect/>
        </div>
    )
}

export default page