
// @ts-ignore
import Banner1 from '../../images/banner1.jpg';
import React from "react";

const HeroSection = () => {
  return (
      <div
          className="section banner1 flex min-h-screen h-screen flex-col"
          id="home"
          data-scroll-section
          style={{ backgroundImage: `url(${Banner1})`, backgroundSize: 'cover' }}
      >
        <div className="banner1_desc h-full w-full  flex flex-col justify-end pr-[73px] pl-[72px] pb-[76px]">
          <h2 className=" banner1_subtitle font-cyrillic text-[52px] tracking-[1px] mb-[41px] text-[#F1EDDF] leading-[120%] uppercase">
            Геноцид чеченского народа
          </h2>
          <h1 className=" banner1_title font-cyrillic text-[200px] text-[#F1EDDF] uppercase tracking-[4px] leading-[90%]">
            спецоперация <br/>«Чечевица»
          </h1>
        </div>
      </div>
  );
};

export default HeroSection;
