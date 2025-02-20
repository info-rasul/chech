// @ts-ignore
import React from "react";

const Banner2 = () => {
  return (
      <div
          className="section banner2 pl-[72px] pr-[156px]"
          id="projects"
          data-scroll-section
      >
        <div className="banner2_content h-[100vh] flex flex-col justify-center  gap-[51px]">
          <p className="banner2_title font-cyrillic text-[#F1EDDF] text-[52px] uppercase tracking-[1.05px] leading-[120%] mt-[29px]">
            <span className="text-[red]">23 февраля 1944 года</span> началась крупнейшая операция
            <br/>СССР по насильственной этнической
            депортации<br/> граждан чеченской и ингушской национальностей с<br/> территории
            Чечено-Ингушской АССР в Казахскую и<br/> Киргизскую ССР. Операция проводилась до
            <span className="text-[red]"> 9 марта 1944 года.</span>
          </p>
          <p className="banner2_desc font-inter text-[#A2A2A2] text-[20px] tracking-[-0.07px] leading-[160%]">
            Судьбу целых народов на последующие 20 лет решил лишь один указ о ликвидации
            Чечено-<br/>Ингушской АССР. Чеченцев и ингушей стали выселять не только с их исторической родины,<br/>
            но и из всех других городов и районов необъятной страны.
          </p>
        </div>
      </div>
  );
};

// @ts-ignore
export default Banner2;
