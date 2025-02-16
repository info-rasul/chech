// @ts-ignore
import React from 'react'
// @ts-ignore
import Banner99 from '../../images/banner6.jpg'

const Banner9 = () => {
  return (
      <div className="section banner9 flex p-[72px] bg-[#F1EDDF] gap-[95px]">
          <div className="flex banner9_img">
              <img src={Banner99} alt="gnoto" className="h-[100%] w-[100%] object-cover"/>
          </div>
          <div className='banner9_content hero flex flex-col justify-between h-full w-[53%] '>
              <div className="flex flex-col gap-[30px]">
                  <h2 className="banner9_subtitle font-cyrillic text-[black] text-[48px] uppercase tracking-[1px] leading-[57.5px]">
                      Сейчас, <span className="text-[#F00000]"> спустя 81 год</span> с момента этой
                      страшной трагедии, в чеченских семьях все знают,
                      помнят и скорбят об этом событии.
                  </h2>
                  <p className="banner9_desc  text-[black] text-[20px] tracking-[.9px] leading-[32px]">
                      23 февраля принято не поздравлять защитников Отечества,
                      а поминать погибших в годы чудовищной депортации. Учитывая, что депортация была тотальной,
                      то каждый, кто сегодня живёт на территории Чечни, Ингушетии,
                      Карачаево-Черкессии — потомок высланных, репрессированных.
                      История геноцида чеченского и ингушского народа жива в памяти.
                  </p>
              </div>
              <h1 className="banner9_title font-cyrillic text-[120px] text-[#F00000] uppercase tracking-[3.66px] leading-[115px]">
                  Никто не забыт,<br className="block"/>
                  ничто не забыто!
              </h1>
          </div>
      </div>
  )
}

export default Banner9