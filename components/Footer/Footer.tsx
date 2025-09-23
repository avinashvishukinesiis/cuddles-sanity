import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="w-full">
            {/* Wave SVG on top */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative -mb-1"><path fill="#F9839D" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,186.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            {/* Footer content */}
            <div className="relative z-10 h-max py-8 flex flex-col items-center justify-center text-white bg-[#F9839D] px-4 md:px-20 pb-10">
                <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4 w-full border-b-1 pb-4">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <img src="./footer_logo.svg" alt="Cuddles footer logo" className="h-[36px]" />
                        <p className="text-center">Plant the roots of lifelong learning with Cuddles! Visit us and discover how bright beginnings shape brighter futures</p>
                        <div className="flex gap-4 justify-around w-full">
                            <FaFacebook size={30} className="text-white hover:text-purple" />
                            <FaInstagram size={30} className="text-white hover:text-purple" />
                            <IoLogoLinkedin size={30} className="text-white hover:text-purple" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-extrabold text-[22px] w-full text-center">Useful Links</p>
                        <ul className="flex flex-col gap-4 items-center">
                            <li className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">About Us</li>
                            <li className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">Curriculum</li>
                            <li className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">Partnerships</li>
                            <li className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">Safety</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-extrabold text-[22px] w-full text-center">Contact</p>
                        <p className="flex gap-2 items-center"><IoCallOutline />+91&nbsp;90360&nbsp;90909</p>
                        <p className="text-[20px]">Mail</p>
                        <p className="flex gap-2 items-center"><IoMailOutline />info@cuddles.co.in</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-extrabold text-[22px] w-full text-center">Branches</p>
                        <ul className="flex flex-col gap-4 items-center">
                            <li className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">Salarpuria Greenage</li>
                            <li className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">AECS Layout</li>
                            <li className="hover:text-purple text-white font-medium cursor-pointer text-[16px]">Gadag</li>
                        </ul>
                    </div>
                </div>
                <div className="py-12">
                    <p>Like-themes © All Rights Reserved - 2025</p>
                </div>
                <img src="./footer_vector.svg" alt="Cuddles Footer Banner" className="absolute bottom-0 h-[30vh] z-[-1]" />
            </div>
        </footer>
    );
};

export default Footer;
