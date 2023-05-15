import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

import { useParams } from "react-router-dom";
import { macProduct } from "../../db";
import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = React.useState({});
  const { id } = useParams();
  console.log("id", id);
  AOS.init();

  const getData = async () => {
    let productDetail = await macProduct.filter((el, idx) => {
      return el.id === +id;
    });
    
    setSingleProduct(productDetail[0]);
  };
  console.log(singleProduct);
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <Navbar />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={singleProduct?.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </Flex>
          <Stack
            data-aos="fade-up"
            data-aos-duration="1500"
            spacing={{ base: 6, md: 10 }}
          >
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              >
                {singleProduct?.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${singleProduct?.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"1xl"}
                  fontWeight={"300"}
                >
                  {singleProduct?.des}
                </Text>
                <Text fontSize={"md"}>{singleProduct?.des2}</Text>
              </VStack>
            </Stack>

            <Button
              rounded={"none"}
              w={"70%"}
              mt={8}
              size={"md"}
              py={"6"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
}
