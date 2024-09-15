import { Hero } from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import BgImage from "../../assets/bg.png";
import { Equipamiento } from "../../components/Equipamiento/Equipamiento";
import { Banner, BannerPrincipal } from "../../components/Banner/Banner";

import Img1 from "../../assets/2.png"
import Img2 from "../../assets/3.png"
import { TabComp } from "../../components/Tab/TabComp";
import { Testimonios } from "../../components/Testimonios/Testimonios";
const BannerData = {
  image: Img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle: "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",

}
const Banner2Data = {
  image: Img2,
  title: "The Importants To Take Care Of Yourself",
  subtitle: "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",

}
const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
export const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipamiento />
      <BannerPrincipal {...BannerData} />
      <BannerPrincipal {...Banner2Data} />
      <Banner />
      <TabComp />
      <Testimonios />
    </div>
  );
};
