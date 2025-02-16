import { useRef } from "react";
import Banner4 from "../components/Projects/Banner4";
import Banner8 from "../components/Projects/Banner8";
import Banner6 from "../components/Projects/Banner6";
import Banner2 from "../components/Projects/Banner2";
import Banner3 from "../components/Projects/Banner3";
import Banner7 from "../components/Projects/Banner7";
import Banner9 from "../components/Projects/Banner9";
import Banner5 from "../components/Projects/Banner5";
import Banner1 from "../components/Projects/Banner1";
// @ts-ignore
import Textures from "../images/textures.png";

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
      <div>
        <div className="w-full h-full overflow-x-hidden">
          <div
              className="outer-wrapper scroll-container"
              ref={containerRef}
              data-scroll-container
              id="main-container"
          >
            <div className="wrapper textures" style={{backgroundImage: `url(${Textures})`}}>
              <Banner1 />
              <Banner2 />
              <Banner3/>
              <Banner4/>
              <Banner5/>
              <Banner6/>
              <Banner7/>
              <Banner8/>
              <Banner9/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
