import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link,
} from "@chakra-ui/react";

export default function SideBanner({ image, h1, h3, bg, flex, mini }) {
    return (
        <Flex
            w={"full"}
            h={"90vh"}
            backgroundImage={`url(${image})`}
            paddingTop={"30px"}
            backgroundColor={"#F2F2F2"}
            backgroundSize={mini ? "700px" : "cover"}
            backgroundRepeat={"no-repeat"}
            // border={"1px solid red"}
            backgroundPosition={mini ? "right" : "center"}
            marginBottom={"10px"}
        >
            <VStack
                w={"full"}
                justify={"center"}
                align={"left"}
                px={useBreakpointValue({ base: 4, md: 8 })}
            // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            >
                <Stack maxW={"50%"} align={"left"} spacing={6}>
                    <Text
                        color={bg ? "black" : "white"}
                        fontWeight={600}
                        lineHeight={1.07143}
                        //   fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                        fontSize={"40px"}
                        textAlign={"center"}
                        p={"0px 100px"}
                    >
                        {h1}
                    </Text>
                    <Text
                        color={bg ? "black" : "white"}
                        fontWeight={400}
                        lineHeight={1.10722}
                        //   fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}
                        fontSize={"16px"}
                        textAlign={"center"}
                        p={"0px 150px"}
                        margin={"auto"}
                    >
                        {h3}
                    </Text>
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
    );
}
