import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Banner from "../../component/Banner/Banner";
import { Flex } from "@chakra-ui/react";
import Carousel from "../../component/Carousel/Carousel";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {bannerList?.main?.map((banner) => (
        <Banner {...banner} />
      ))}
      {bannerList?.flex?.map((banner) => {
        return (
          <Flex p={"0px 10px"} gap={"10px"}>
            <Banner {...banner[0]} />
            <Banner {...banner[1]} />
          </Flex>
        );
      })}
      <Carousel />
      <Footer />
    </>
  );
};
const bannerList = {
  main: [
    {
      image:
        "https://www.apple.com/v/home/az/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg",
      h1: "IPhone 14 Pro",
      h3: " Pro.Beyond.",
      bg: false,
    },
    {
      image:
        "https://www.apple.com/v/home/az/images/heroes/iphone-14/hero_iphone14_yellow__eun20sn4imi6_large.jpg",
      h1: "IPhone 14",
      h3: "Wonderfull",
      bg: true,
    },
    {
      image:
        "https://www.apple.com/v/home/az/images/heroes/apple-watch-series-8/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_large.jpg",
      h1: "Watch Series 8",
      h3: "Ahealthy leap ahead.",
      bg: false,
    },
  ],
  flex: [
    [
      {
        image:
          "https://www.apple.com/v/home/az/images/promos/iphone-tradein/iphone_tradein_promo__d5au3rkw5kuq_large.jpg",
        h1: "Trade In ",
        h3: "Upgrade and save. Its that easy.",
        bg: true,
        flex: true,
      },
      {
        image:
          "https://www.apple.com/v/home/az/images/promos/wwdc23-announce/promo_wwdc23__b68ptht3mro2_large.jpg",
        h1: "WWDC23",
        h3: "Apple World wide Developers conferance.",
        bg: false,
        flex: true,
      },
    ],
    [
      {
        image:
          "https://www.apple.com/v/home/az/images/promos/final-cut-pro-ipad/promo_final_cut_pro_ipad_avail__cgno7syd09w2_large.jpg",
        h1: "Final cut pro for IPad",
        h3: "Bring your entire studio to the show.",
        bg: false,
        flex: true,
      },
      {
        image:
          "https://www.apple.com/v/home/az/images/promos/logic-pro-ipad/promo_logic_pro_ipad_avail__czy8elml2som_large.jpg",
        h1: "Login pro for IPad",
        h3: "The ultimate music studio. At your fingertips.",
        bg: false,
        flex: true,
      },
    ],
  ],
};

export default Home;
