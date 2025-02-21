import React, {useRef, useState} from "react";
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
import ButtonRight from "../images/buttonRight.svg";
// @ts-ignore
import ButtonLeft from "../images/buttonLeft.svg";

const Home = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [leftButton, setLeftButton] = useState(false);
    const [rightButton, setRightButton] = useState(false);

    const scrollToRight = () => {
        if (containerRef.current) {
            const containerRight = containerRef.current;
            const currentScrollRight = containerRight.scrollTop;
            const screenWidthRight = window.innerWidth;

            containerRight.scrollTo({
                top: currentScrollRight + screenWidthRight,
                behavior: "smooth",
            });

            if (screenWidthRight > 100) {
                setLeftButton(true);
            } else {
                setLeftButton(false);
            }
        }
    };

    const scrollToLeft = () => {
        if (containerRef.current) {
            const containerLeft = containerRef.current;
            const currentScrollLeft = containerLeft.scrollTop;
            const screenWidthLeft = window.innerWidth;

            containerLeft.scrollTo({
                top: currentScrollLeft - screenWidthLeft,
                behavior: "smooth",
            });

            if (screenWidthLeft > 100) {
                setRightButton(true);
            } else {
                setRightButton(false);
            }
        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="banner_button w-[100%] flex justify-between fixed bottom-[25px] z-50">
                <button
                    style={{opacity: leftButton ? 1 : 0}}
                    className="w-[92px] h-[92px] bg-[#F00000] opacity-[.3] ml-[40px] cursor-pointer flex items-center justify-center rounded-[100px]"
                    onClick={scrollToLeft}
                >
                    <img src={ButtonLeft} alt="Group"/>
                </button>
                <button
                    className="w-[92px] h-[92px] bg-[#F00000] mr-[40px] cursor-pointer flex items-center justify-center rounded-[100px]"
                    onClick={scrollToRight}
                >
                    <img src={ButtonRight} alt="Group"/>
                </button>
            </div>
            <div className="outer-wrapper scroll-container" ref={containerRef}>
                <div className="wrapper textures" style={{display: "flex", backgroundImage: `url(${Textures})`,}}>
                    <Banner1/>
                    <Banner2/>
                    <Banner3/>
                    <Banner4/>
                    <Banner5/>
                    <Banner6/>
                    <Banner7 />
                    <Banner8 />
                    <Banner9 />
                </div>
            </div>
        </div>
    );
};

export default Home;
