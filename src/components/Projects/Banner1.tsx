// @ts-ignore
import React from 'react';
import { useRef } from 'react'; // Импортируем useRef
// @ts-ignore
import Banner1 from '../../images/banner1.jpg';
// @ts-ignore
import Group from '../../images/Group.png';

const HeroSection = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
      <div
          className="section banner1 flex min-h-screen h-screen flex-col"
          id="home"
          data-scroll-section
          style={{ backgroundImage: `url(${Banner1})`, backgroundSize: 'cover' }}
      >
        <div className="banner1_desc h-full w-full  flex flex-col justify-end px-[73px] pb-[76px]">
          <h2 className=" banner1_subtitle font-cyrillic text-[49px] tracking-[2.15px] mb-[17px] text-[#F1EDDF] uppercase">
            Геноцид чеченского народа
          </h2>
          <h1 className=" banner1_title font-cyrillic text-[200px] text-[#F1EDDF] uppercase tracking-[3.9px] leading-[181px]">
            спецоперация <br/>«Чечевица»
          </h1>
        </div>
        <div className="w-[100vw] h-[100vh] flex items-end justify-end absolute">
          <button
              className="banner1_button w-[92px] h-[120px] bg-[red] cursor-pointer flex items-center justify-center
            relative z-50 rounded-[45px] right-[40px] bottom-[40px]"
              onClick={scrollToBottom}
          >
            <img src={Group} alt="Group"/>
          </button>
        </div>
      </div>
  );
};

export default HeroSection;
