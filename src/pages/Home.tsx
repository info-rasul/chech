import React, { useRef } from "react";
import Banner1 from "../components/Projects/Banner1";
import Banner2 from "../components/Projects/Banner2";
import Banner3 from "../components/Projects/Banner3";
import Banner4 from "../components/Projects/Banner4";
import Banner5 from "../components/Projects/Banner5";
import Banner6 from "../components/Projects/Banner6";
import Banner7 from "../components/Projects/Banner7";
import Banner8 from "../components/Projects/Banner8";
import Banner9 from "../components/Projects/Banner9";
// @ts-ignore
import Textures from "../images/fon5.jpg";
// @ts-ignore
import Group from "../images/Group.png";

const Home = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const scrollToRight = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const currentScroll = container.scrollTop;
            const screenWidth = window.innerWidth;
            console.log(currentScroll, 'currentScroll');
            console.log(screenWidth, 'screenHeight');

            container.scrollTo({
                top: currentScroll + screenWidth,
                behavior: "smooth",
            });

        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="banner_button fixed bottom-[25px] right-[25px] z-50 rotate-[-90deg]">
                <button
                    className="w-[70px] h-[90px] bg-red-500 cursor-pointer flex items-center justify-center rounded-[45px]"
                    onClick={scrollToRight}
                >
                    <img src={Group} alt="Group" />
                </button>
            </div>
            <div className="outer-wrapper scroll-container" ref={containerRef}>
                <div className="wrapper textures" style={{display: "flex", backgroundImage: `url(${Textures})`,}}>
                    <Banner1 />
                    <Banner2 />
                    <Banner3 />
                    <Banner4 />
                    <Banner5 />
                    <Banner6 />
                    <Banner7 />
                    <Banner8 />
                    <Banner9 />
                </div>
            </div>
        </div>
    );
};

export default Home;
