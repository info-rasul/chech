// @ts-ignore
import React from "react";


const Banner8 = () => {
  return (
      <div
          className="section banner2 banner8 px-[156px]"
          id="projects"
          data-scroll-section
      >
        <div className="banner2_content h-[100vh] flex flex-col justify-center gap-[54px]">
          <h1 className="banner2_title font-cyrillic text-[#F1EDDF] text-[48px] uppercase tracking-[1px] leading-[120%] mt-[-68px]">
            В дороге вспыхнула эпидемия тифа, <br/>лекарств не было,
            вынужденные переселенцы <span className="text-[red]"><br/>погибали в лихорадочных состояниях.</span>
          </h1>
          <p className="banner2_desc font-inter text-[#A2A2A2] text-[20px] tracking-[-0.08px] leading-[160%]">
            Заведующий отделом Северо-Осетинского обкома КПСС ингуш Х. Арапиев рассказывал:
            <br/>«В переполненных до предела «телячьих вагонах», без света и воды,
            почти месяц следовали<br/> мы к неизвестному месту назначения... Пошёл гулять тиф.
            Лечения никакого, шла война...<br/> Во время коротких стоянок,
            на глухих безлюдных разъездах возле поезда в чёрном от<br/> паровозной копоти снегу хоронили умерших
            (уход от вагона дальше, чем на пять метров,<br/> грозил смертью на месте).
          </p>
        </div>
      </div>
  );
};

export default Banner8;
