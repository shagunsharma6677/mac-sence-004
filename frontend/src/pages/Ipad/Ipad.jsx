import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import Banner from "../../component/Banner/Banner";
import image from "./iphone-banner.jpeg";
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link,
} from "@chakra-ui/react";
import HeadingComp from "../../component/Heading/Heading";
import CardCarousel from "../../component/CardCarousel/CardCarousel";
import { iphoneAccessories, iphoneProduct } from "../../db";
import SideBanner from "../../component/SideBanner/SideBanner";
import Statics from "../../component/Statics/Statics";
import CardComp from "../../component/CardComp/CardComp";
import Footer from "../../component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Ipad = () => {
    AOS.init();
    return (
        <Box>
            <Box bg={"#000000"}>
                <Navbar />

                <Flex
                    w={"full"}
                    h={"90vh"}
                    backgroundImage={`url(${image})`}
                    paddingTop={"30px"}
                    backgroundColor={"transparent"}
                    backgroundSize={"cover"}
                    // border={"1px solid red"}
                    backgroundPosition={"center"}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <VStack
                        w={"full"}
                        justify={""}
                        px={useBreakpointValue({ base: 4, md: 8 })}
                    // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
                    >
                        <Stack maxW={"2xl"} align={"center"} spacing={6}>
                            <Box color={"white"} maxW={"50%"} textAlign={"center"}>
                                <Text fontSize={"3xl"} fontWeight={"semibold"}>
                                    Introducing
                                </Text>
                                <Heading as="h1" fontSize={"5xl"}>
                                    Final Cut Pro and Logic Pro for iPad
                                </Heading>
                            </Box>

                            <Flex flexDirection={"column"} textAlign={"center"}>
                                <Link
                                    p={"5px 10px"}
                                    fontSize={"1xl"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Learn more about Final Cut Pro for iPad{">"}
                                </Link>
                                <Link
                                    p={"5px 10px"}
                                    fontSize={"1xl"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Learn more about Logic Pro for iPad {">"}
                                </Link>

                                <Link
                                    p={"5px 10px"}
                                    fontSize={"1xl"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Watch the film {">"}
                                </Link>
                            </Flex>
                        </Stack>
                    </VStack>
                </Flex>

                <Flex
                    w={"full"}
                    minH={"110vh"}
                    backgroundImage={`url("https://www.apple.com/v/ipad/home/ce/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg")`}
                    paddingTop={"30px"}
                    margin={"100px 0px"}
                    backgroundColor={"#000000"}
                    backgroundSize={"initial"}
                    backgroundRepeat={"no-repeat"}
                    backgroundPosition={"right"}
                    marginBottom={"10px"}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <VStack
                        w={"full"}
                        justify={"center"}
                        align={"left"}
                        px={useBreakpointValue({ base: 4, md: 8 })}
                    >
                        <Stack maxW={"50%"} align={"left"} spacing={6}>
                            <Text
                                color={"white"}
                                fontWeight={600}
                                lineHeight={1.07143}
                                fontSize={"40px"}
                                textAlign={"center"}
                                p={"0px 100px"}
                            >
                                iPad Pro
                            </Text>
                            <Text
                                color={"white"}
                                fontWeight={400}
                                lineHeight={1.10722}
                                fontSize={"16px"}
                                textAlign={"center"}
                                p={"0px 150px"}
                                margin={"auto"}
                            >
                                Supercharged by M2
                            </Text>
                            {/* <Button maxW={"80px"} colorScheme="blue">Shop</Button> */}
                            <Flex justifyContent={"center"}>
                                <Link
                                    p={"3"}
                                    fontSize={"21px"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Learn More {">"}
                                </Link>
                                <Link
                                    p={"3"}
                                    fontSize={"21px"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Buy {">"}
                                </Link>
                            </Flex>
                        </Stack>
                    </VStack>
                </Flex>
            </Box>

            <Box
                data-aos="fade-up"
                data-aos-duration="1500"
                m={"auto"}
                maxW={"80%"}
                marginBottom={"16"}
            >
                <HeadingComp head="Which iPhone is good for you ?" />
                <CardCarousel data={iphoneProduct} />
            </Box>

            <Box maxW={"97%"} margin={"auto"}>
                <Flex
                    w={"full"}
                    minH={"90vh"}
                    backgroundImage={`url("https://www.apple.com/v/ac/includes/campaigns-seasonal/mothers-day-2023/a/images/overview/md23_fampage_banner__cx7zup1dw56q_large.png")`}
                    paddingTop={"30px"}
                    // margin={"100px 0px"}
                    backgroundColor={"#000000"}
                    backgroundSize={"inherit"}
                    backgroundRepeat={"no-repeat"}
                    backgroundPosition={"600px"}
                    marginBottom={"10px"}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <VStack
                        w={"full"}
                        justify={"center"}
                        align={"left"}
                        px={useBreakpointValue({ base: 4, md: 8 })}
                    >
                        <Stack maxW={"50%"} align={"left"} spacing={6}>
                            <Text
                                color={"white"}
                                fontWeight={600}
                                lineHeight={1.07143}
                                fontSize={"40px"}
                                textAlign={"center"}
                                p={"0px 100px"}
                            >
                                iPad Pro
                            </Text>
                            <Text
                                color={"white"}
                                fontWeight={400}
                                lineHeight={1.10722}
                                fontSize={"16px"}
                                textAlign={"center"}
                                p={"0px 150px"}
                                margin={"auto"}
                            >
                                Supercharged by M2
                            </Text>
                            {/* <Button maxW={"80px"} colorScheme="blue">Shop</Button> */}
                            <Flex justifyContent={"center"}>
                                <Link
                                    p={"3"}
                                    fontSize={"21px"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Learn More {">"}
                                </Link>
                                <Link
                                    p={"3"}
                                    fontSize={"21px"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Buy {">"}
                                </Link>
                            </Flex>
                        </Stack>
                    </VStack>
                </Flex>

                <Flex
                    w={"full"}
                    minH={"90vh"}
                    backgroundImage={`url("https://www.apple.com/v/ipad/home/ce/images/overview/apple_card_banner/acmi/apple_card_monthly_installments__fhqbbrc4alm6_large.jpg")`}
                    paddingTop={"30px"}
                    backgroundColor={"white"}
                    backgroundSize={"initial"}
                    backgroundRepeat={"no-repeat"}
                    backgroundPosition={"600px"}
                    marginBottom={"10px"}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <VStack
                        w={"full"}
                        justify={"center"}
                        align={"left"}
                        px={useBreakpointValue({ base: 4, md: 8 })}
                    >
                        <Stack maxW={"50%"} align={"left"} spacing={6}>
                            <Text
                                color={"black"}
                                fontWeight={600}
                                lineHeight={1.07143}
                                fontSize={"40px"}
                                textAlign={"center"}
                                p={"0px 100px"}
                            >
                                iPad Pro
                            </Text>
                            <Text
                                color={"black"}
                                fontWeight={400}
                                lineHeight={1.10722}
                                fontSize={"16px"}
                                textAlign={"center"}
                                p={"0px 150px"}
                                margin={"auto"}
                            >
                                Supercharged by M2
                            </Text>
                            {/* <Button maxW={"80px"} colorScheme="blue">Shop</Button> */}
                            <Flex justifyContent={"center"}>
                                <Link
                                    p={"3"}
                                    fontSize={"21px"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Learn More {">"}
                                </Link>
                                <Link
                                    p={"3"}
                                    fontSize={"21px"}
                                    lineHeight={"29.001px"}
                                    color={"#2997FF"}
                                >
                                    Buy {">"}
                                </Link>
                            </Flex>
                        </Stack>
                    </VStack>
                </Flex>
            </Box>

            <Box
                data-aos="fade-up"
                data-aos-duration="1500"
                marginTop={"16"}
                marginBottom={"16"}
            >
                <Statics />
            </Box>

            <Box m={"auto"} maxW={"84%"}>
                <HeadingComp
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    head="iPad essentials & accessories."
                />

                <Grid
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    templateColumns="repeat(3, 1fr)"
                    gap={2}
                >
                    {iphoneAccessories.map((item) => {
                        return (
                            <GridItem
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                w="90%"
                                h="100%"
                            >
                                <CardComp {...item} />
                            </GridItem>
                        );
                    })}
                </Grid>
            </Box>
            <Footer data-aos="fade-up" data-aos-duration="1500" />
        </Box>
    );
};

export default Ipad;

const ipadBanner = [
    {
        image:
            "https://www.apple.com/v/ac/includes/campaigns-seasonal/mothers-day-2023/a/images/overview/md23_fampage_banner__cx7zup1dw56q_large.png",
        h1: "Apple at work.",
        h3: "Get the power to take your business to next level.",
        bg: false,
    },
    {
        image:
            "https://www.apple.com/v/ipad/home/ce/images/overview/apple_card_banner/acmi/apple_card_monthly_installments__fhqbbrc4alm6_large.jpg",
        h1: "Apple and Education",
        h3: "Empowering educators and students to move the world forward.",
        bg: false,
    },
];
