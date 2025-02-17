// @ts-ignore
import React from "react";
// @ts-ignore
import Banner55 from '../../images/banner4.jpg';


const Banner5 = () => {
  return (
      <div
          className="section banner5 px-[70px]"
          id="projects"
          data-scroll-section
          style={{ backgroundImage: `url(${Banner55})` }}
      >
          <div className="banner5_content h-full w-full flex flex-col gap-[178px] justify-center items-center">
              <div className="banner5_content_block flex w-[100%] justify-between gap-[50px]">
                  <div className="banner5_block flex flex-col gap-[32px] w-[50%]">
                      <h1 className="banner5_title font-cyrillic text-[112px] text-black tracking-[-1px]">
                          100 <span className="text-[48px] tracking-[3px]">тыс.</span>
                      </h1>
                      <p className="banner5_desc font-inter block text-[16px] text-black leading-[180%] mt-[-55px] tracking-[0.64px]">
                          военнослужащих участвовали в осуществлении депортации,
                          ещё примерно столько же были приведены в боевую готовность в соседних регионах.
                          Депортация проводилась вооружённым способом и преимущественно насильственными методами.
                      </p>
                  </div>
                  <div className="banner5_block flex flex-col gap-[32px] w-[50%]">
                      <h1 className="banner5_title font-cyrillic text-[112px] text-black tracking-[-1px]">
                          <span className="mr-[-16px]">{'> 10'}</span>
                      </h1>
                      <p className="banner5_desc font-inter block text-[16px] text-black leading-[180%] mt-[-55px] tracking-[0.64px]">
                          высокогорных аулов были стёрты с лица земли вместе с жителями,
                          поскольку в данных местностях депортацию провести было сложно.
                          Впоследствии советская власть будет отрицать не только описываемые преступления,
                          но и факт существования населённых пунктов на месте перечисленных топонимов.
                      </p>
                  </div>
              </div>
              <div className="banner5_content_block flex w-[100%] justify-between gap-[50px]">
                  <div className="banner5_block flex flex-col gap-[32px] w-[50%]">
                      <h1 className="banner5_title font-cyrillic text-[112px] text-black">
                          500–650 <span className="text-[48px] tracking-[3px]">тыс.</span>
                      </h1>
                      <p className="banner5_desc font-inter text-[16px] text-black leading-[180%] mt-[-55px] tracking-[0.64px]">
                          чеченцев и ингушей было выселено с территории Чечено-Ингушской АССР.
                          Впоследствии Чечено-Ингушская АССР была упразднена,
                          а на её территории создана Грозненская область.
                      </p>
                  </div>
                  <div className="banner5_block flex flex-col gap-[32px] w-[50%]">
                      <h1 className="banner5_title font-cyrillic text-[112px] text-black tracking-[-1px]">
                          100/23 <span className="text-[48px] tracking-[3px]">тыс.</span>
                      </h1>
                      <p className="banner5_desc font-inter block text-[16px] text-black leading-[180%] mt-[-52px] tracking-[0.64px]">
                          чеченцев/ингушей погибли в ходе выселения и первые годы после него,
                          то есть примерно каждый четвёртый из обоих народов.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
};

// @ts-ignore
export default Banner5;
