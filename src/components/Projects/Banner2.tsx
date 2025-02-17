// @ts-ignore
import React from "react";

const Banner2 = () => {
  return (
      <div
          className="section banner2 pl-[72px] pr-[156px]"
          id="projects"
          data-scroll-section
      >
        <div className="banner2_content h-[100vh] flex flex-col justify-center  gap-[56px]">
          <p className="banner2_title font-cyrillic text-[54px] uppercase tracking-[.28px] leading-[61.7px] mt-[34px]">
            <span className="text-[red]">23 февраля 1944 года</span> началась крупнейшая операция
            СССР по насильственной этнической
            депортации граждан чеченской и ингушской национальностей с территории
            Чечено-Ингушской АССР в Казахскую и Киргизскую ССР. Операция проводилась до
            <span className="text-[red]"> 9 марта 1944 года.</span>
          </p>
          <p className="banner2_desc text-[#A2A2A2] text-[20px] tracking-[.92px] leading-[32px]">
            Судьбу целых народов на последующие <span className="number">20 </span>
            лет решил лишь один указ о ликвидации
            Чечено-Ингушской АССР. Чеченцев и ингушей стали выселять не только с их исторической родины,
            но и из всех других городов и районов необъятной страны.
          </p>
        </div>
      </div>
  );
};

// @ts-ignore
export default Banner2;
