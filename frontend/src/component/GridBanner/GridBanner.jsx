import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link,
} from "@chakra-ui/react";

export default function GridBanner({image,h1,h3, bg,flex}) {
    return (
        <Flex
            w={"full"}
            h={"90vh"}
            backgroundImage={
                `url(${image})`
            }
            paddingTop={"20px"}
            backgroundColor={"#F2F2F2"}
            backgroundSize={"auto"}
            backgroundRepeat={"no-repeat"}
            // border={"1px solid red"}
            backgroundPosition={"bottom"}
            
            marginBottom={"10px"}
        >
            <VStack
                w={"full"}
                justify={""}
                px={useBreakpointValue({ base: 4, md: 8 })}
                // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            >
                <Stack maxW={"2xl"} align={"center"} spacing={6}>
                    <Text
                        color={bg ? "black" : "white"}
                        fontWeight={600}
                        lineHeight={1.07143}
                        //   fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                        fontSize={flex ? "21px" :"28px"}
                    >
                        {h1}
                    </Text>
                    <Text
                          color={bg ? "black" : "white"}
                        fontWeight={400}
                        lineHeight={1.10722}
                        //   fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}
                        fontSize={flex ? "50px" : "56px"}
                        maxW={"80%"}
                        textAlign={"center"}
                      
                    >
                        {h3}
                    </Text>
                    <Button colorScheme="blue">Shop</Button>
                </Stack>
            </VStack>
        </Flex>
    );
}
