import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Banner from "../../component/Banner/Banner";
import { Flex } from "@chakra-ui/react";
import GridBanner from "../../component/GridBanner/GridBanner";
import SideBanner from "../../component/SideBanner/SideBanner";
import Statics from "../../component/Statics/Statics";
const bannerList = {
    main: [
        {
            image: "https://www.apple.com/v/mac/home/bt/images/overview/hero/mac_mini__d3310qb7lt6q_large.jpg",
            h1: "Mac mini",
            h3: "More muscle. More hustle.",
            bg: false,

        }


    ],

    side: [
        {
            image:
                "https://www.apple.com/v/mac/home/bt/images/overview/skywalker-btm/btm_tile__foyxdms85eum_large.jpg",
            h1: "MacBook Pro",
            h3: "Mover.Maker.Boundry Breaker.",
            bg: false,
        },
        {
            image:
                "https://www.apple.com/v/mac/home/bt/images/overview/retail/acmi__e6hmokx3ap0m_large.jpg",
            h1: "Get 3% Daily Cashback with Apple Card.",
            h3: "And pay for your new Mac over 12 months interestfree when you choose to check out with Apple Card Monthly Installments.",
            bg: true,
            mini: true
        }
    ],
    flex: [
        [
            {
                image:
                    "https://www.apple.com/v/mac/home/bt/images/overview/retail/accessories_tile__cybkm8f034uq_large.jpg",
                h1: "Accessories ",
                h3: "Explore Mac Accessories",
                bg: true,
                flex: true,
            },
            {
                image:
                    "https://www.apple.com/v/mac/home/bt/images/overview/retail/trade_in_mac_tile__d67bvlqow1ua_large.jpg",
                h1: "WWDC23",
                h3: "Apple Developers conferance.",
                bg: true,
                flex: true,
            },
        ]

    ],
};

const MacPage = () => {
    return (
        <>
            <Navbar />
            <Banner {...bannerList.main[0]} />
            {bannerList?.side?.map((banner) => (
                <SideBanner {...banner} />
            ))}
            {bannerList?.flex?.map((banner) => {
                return <Flex p={"0px 10px"} gap={"10px"}>
                    <GridBanner {...banner[0]} />
                    <GridBanner {...banner[1]} />
                </Flex>
            })}
            <Statics/>
        </>
    );
};

export default MacPage;
