import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCallOutline, IoMailOutline, IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getSiteSettings } from "@/lib/sanity-utils";
import { urlFor } from "@/lib/sanity";

const Footer = async () => {
    const footerData = await getSiteSettings();

    const defaultData = {
        description: "Plant the roots of lifelong learning with Cuddles! Visit us and discover how bright beginnings shape brighter futures",
        usefulLinks: [
            { title: "About Us", url: "/AboutUs" },
            { title: "Curriculum", url: "/Curriculum" },
            { title: "Partnerships", url: "/Partnerships" },
            { title: "Safety", url: "/Safety" }
        ],
        contactInfo: {
            phone: "+91 90360 90909",
            email: "info@cuddles.co.in"
        },
        branches: ["Salarpuria Greenage", "AECS Layout", "Gadag"],
        copyright: "Like-themes © All Rights Reserved - 2025",
        socialMedia: {
            facebook: undefined,
            instagram: undefined,
            linkedin: undefined
        }
    };

    const data = footerData || defaultData;
    const logoUrl = footerData?.logo ? urlFor(footerData.logo).url() : "/footer_logo.svg";
    const vectorUrl = footerData?.footerVector ? urlFor(footerData.footerVector).url() : "/footer_vector.svg";

    return (
        <footer className="w-full">
            {/* Wave SVG on top */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative -mb-1"><path fill="#F9839D" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,186.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            {/* Footer content */}
            <div className="relative z-10 h-max py-8 flex flex-col items-center justify-center text-white bg-[#F9839D] px-4 md:px-20 pb-10">
                <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4 w-full border-b-1 pb-4">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Image src={logoUrl} alt="Cuddles footer logo" className="h-[36px]" width={120} height={36} />
                        <p className="text-center">{data.description}</p>
                        <div className="flex gap-4 justify-around w-full">
                            {data.socialMedia?.facebook && (
                                <Link href={data.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={30} className="text-white hover:text-purple" />
                                </Link>
                            )}
                            {data.socialMedia?.instagram && (
                                <Link href={data.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30} className="text-white hover:text-purple" />
                                </Link>
                            )}
                            {data.socialMedia?.linkedin && (
                                <Link href={data.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                                    <IoLogoLinkedin size={30} className="text-white hover:text-purple" />
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-extrabold text-[22px] w-full text-center">Useful Links</p>
                        <ul className="flex flex-col gap-4 items-center">
                            {data.usefulLinks?.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-extrabold text-[22px] w-full text-center">Contact</p>
                        <p className="flex gap-2 items-center"><IoCallOutline />{data.contactInfo?.phone}</p>
                        <p className="text-[20px]">Mail</p>
                        <p className="flex gap-2 items-center"><IoMailOutline />{data.contactInfo?.email}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-extrabold text-[22px] w-full text-center">Branches</p>
                        <ul className="flex flex-col gap-4 items-center">
                            {data.branches?.map((branch, index) => (
                                <li key={index} className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">{branch}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="py-12">
                    <p>{data.copyright}</p>
                </div>
                <Image src={vectorUrl} alt="Cuddles Footer Banner" className="absolute bottom-0 h-[30vh] z-[-1]" width={800} height={300} />
            </div>
        </footer>
    );
};

export default Footer;
