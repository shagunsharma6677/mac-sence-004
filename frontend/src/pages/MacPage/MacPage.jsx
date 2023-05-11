import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer"
import Banner from "../../component/Banner/Banner";
import { Box, Flex, Heading } from "@chakra-ui/react";
import GridBanner from "../../component/GridBanner/GridBanner";
import SideBanner from "../../component/SideBanner/SideBanner";
import Statics from "../../component/Statics/Statics";
import HeadingComp from "../../component/Heading/Heading";
import {
    Stack,
    Text,
    VStack,
    useBreakpointValue,
    Link,
} from "@chakra-ui/react";

const MacPage = () => {
    return (
        <>
            <Navbar />
            <Box marginBottom={"2"} bg={"black"} textAlign="center" py={10} px={6}>

                <Heading maxW={"50%"} m={"auto"} color={"white"} as="h2" size="2xl" mt={12} mb={12}>
                    Introducing the new MacBook Pro and Mac mini.
                </Heading>
                <Flex justifyContent={"center"}>
                    <Link p={"10px 20px"} fontSize={"21px"} lineHeight={"29.001px"} color={"#2997FF"}
                    >Learn More {">"}</Link>
                </Flex>

            </Box>
            <Banner {...bannerList.main[0]} />
            <Box maxW={"95%"} m={"auto"}>
                {bannerList?.side?.map((banner) => (
                    <SideBanner {...banner} />
                ))}

            </Box>

            {bannerList?.flex?.map((banner) => {
                return (
                    <Flex maxW={"95%"}
                        m={"auto"} gap={"10px"}>
                        <GridBanner {...banner[0]} />
                        <GridBanner {...banner[1]} />
                    </Flex>
                );
            })}
            <Box marginTop={"16"} marginBottom={"16"}>
                <Statics />

            </Box>

            <HeadingComp head="Whats Make a Mac a Mac ?" />

            {bannerList?.flex2?.map((banner) => {
                return (
                    <Flex maxW={"95%"}
                        m={"auto"} gap={"10px"}>
                        <Banner {...banner[0]} />
                        <Banner {...banner[1]} />
                    </Flex>
                );
            })}
            <Flex
                w={"full"}
                h={"90vh"}
                backgroundImage={`url(https://www.apple.com/v/mac/home/bs/images/overview/get-more/business__dhhbnntkcwuq_large.jpg)`}
                paddingTop={"30px"}
                maxW={"95%"}
                m={"auto"}
                backgroundColor={"#F2F2F2"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                marginBottom={"10px"}
            >
                <VStack
                    w={"full"}
                    justify={"center"}
                    align={"center"}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                >
                    <Stack maxW={"70%"} align={"left"} spacing={6}>
                        <Text
                            color={"white"}
                            fontWeight={600}
                            lineHeight={1.07143}
                            fontSize={"6xl"}
                            textAlign={"center"}
                            p={"0px 100px"}
                        >
                            Apple at work.
                        </Text>
                        <Text
                            color={"white"}
                            fontWeight={400}
                            lineHeight={0.80722}
                            fontSize={"2xl"}
                            textAlign={"center"}
                            p={"0px 150px"}
                            margin={"auto"}
                        >
                            Get the power to take your business to next level.
                        </Text>
                        <Text
                            color={"white"}
                            fontWeight={400}
                            lineHeight={0.80722}
                            fontSize={"2xl"}
                            textAlign={"center"}
                            p={"0px 150px"}
                            margin={"auto"}
                        >
                            Learn about apple and education {">"}
                        </Text>

                    </Stack>
                </VStack>
            </Flex>
            <Flex
                w={"full"}
                h={"90vh"}
                backgroundImage={`url(https://www.apple.com/v/mac/home/bs/images/overview/get-more/education__bq047y5fu7n6_large.jpg)`}
                paddingTop={"30px"}
                maxW={"95%"}
                m={"auto"}
                backgroundColor={"#F2F2F2"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                marginBottom={"10px"}
            >
                <VStack
                    w={"full"}
                    justify={"center"}
                    align={"center"}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                >
                    <Stack maxW={"80%"} align={"left"} spacing={6}>
                        <Text
                            color={"white"}
                            fontWeight={600}
                            lineHeight={1.07143}
                            fontSize={"6xl"}
                            textAlign={"center"}
                            p={"0px 100px"}
                        >
                            Apple and Education
                        </Text>
                        <Text
                            color={"white"}
                            fontWeight={400}
                            lineHeight={0.80722}
                            fontSize={"2xl"}
                            textAlign={"center"}
                            p={"0px 150px"}
                            margin={"auto"}
                        >
                            Empowering educators and students to move the world forward.
                        </Text>
                        <Text
                            color={"white"}
                            fontWeight={400}
                            lineHeight={0.80722}
                            fontSize={"2xl"}
                            textAlign={"center"}
                            p={"0px 150px"}
                            margin={"auto"}
                        >
                            Learn about apple and education {">"}
                        </Text>

                    </Stack>
                </VStack>
            </Flex>

            <Footer />


        </>
    );
};

export default MacPage;

const bannerList = {
    main: [
        {
            image:
                "https://www.apple.com/v/mac/home/bt/images/overview/hero/mac_mini__d3310qb7lt6q_large.jpg",
            h1: "Mac mini",
            h3: "More muscle. More hustle.",
            bg: false,
        },
    ],
    main2: [
        {
            image:
                "https://www.apple.com/v/mac/home/bs/images/overview/get-more/business__dhhbnntkcwuq_large.jpg",
            h1: "Apple at work.",
            h3: "Get the power to take your business to next level.",
            bg: false,
        },
        {
            image:
                "https://www.apple.com/v/mac/home/bs/images/overview/get-more/education__bq047y5fu7n6_large.jpg",
            h1: "Apple and Education",
            h3: "Empowering educators and students to move the world forward.",
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
            mini: true,
        },
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
        ],
    ],
    flex2: [
        [
            {
                image:
                    "https://www.apple.com/in/mac/home/images/overview/mdt/mdt_family__gkejyxsh4p26_large.jpg",
                h1: "Trade In ",
                h3: "Upgrade and save. Its that easy.",
                bg: true,
                flex: true,
            },
            {
                image:
                    "https://www.apple.com/in/mac/home/images/overview/macos/continuity__f7o5n4kqigeq_large.jpg",
                h1: "Contuity",
                h3: "One seamless experience.",
                bg: true,
                flex: true,
            },
        ],
    ],
};
