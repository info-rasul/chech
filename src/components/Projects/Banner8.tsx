// @ts-ignore
import React from "react";


const Banner8 = () => {
  return (
      <div
          className="section banner2 banner8 px-[156px]"
          id="projects"
          data-scroll-section
      >
        <div className="banner2_content h-[100vh] flex flex-col justify-center gap-[56px]">
          <h1 className="banner2_title font-cyrillic text-[48px] uppercase tracking-[1px] leading-[57.8px] mt-[-100px]">
            В дороге вспыхнула эпидемия тифа, <br/>лекарств не было,
            вынужденные переселенцы <span className="text-[red]"><br/>погибали в лихорадочных состояниях.</span>
          </h1>
          <p className="banner2_desc  text-[#A2A2A2] text-[20px] tracking-[.94px] leading-[32px]">
            Заведующий отделом Северо-Осетинского обкома КПСС ингуш Х. Арапиев рассказывал:
            <br/>«В переполненных до предела «телячьих вагонах», без света и воды,
            почти месяц следовали мы к неизвестному месту назначения... Пошёл гулять тиф.
            Лечения никакого, шла война... Во время коротких стоянок,
            на глухих безлюдных разъездах возле поезда в чёрном от паровозной копоти снегу хоронили умерших
            (уход от вагона дальше, чем на пять метров, грозил смертью на месте).
          </p>
        </div>
      </div>
  );
};

export default Banner8;
