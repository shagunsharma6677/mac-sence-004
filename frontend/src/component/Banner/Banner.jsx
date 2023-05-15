import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

export default function Banner({ image, h1, h3, bg, flex }) {
  return (
    <Flex
      w={"full"}
      h={"90vh"}
      backgroundImage={`url(${image})`}
      paddingTop={"30px"}
      backgroundColor={"transparent"}
      backgroundSize={"cover"}
      // border={"1px solid red"}
      backgroundPosition={"center"}
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
            fontSize={flex ? "40px" : "56px"}
          >
            {h1}
          </Text>
          <Text
            color={bg ? "black" : "white"}
            fontWeight={400}
            lineHeight={1.10722}
            //   fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}
            fontSize={flex ? "21px" : "28px"}
          >
            {h3}
          </Text>
          <Flex>
            <Link
              p={"10px 20px"}
              fontSize={"21px"}
              lineHeight={"29.001px"}
              color={"#2997FF"}
            >
              Learn More {">"}
            </Link>
            <Link
              p={"10px 20px"}
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
