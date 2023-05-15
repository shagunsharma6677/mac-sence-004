import React from "react";
import CartComp from "../../component/CartComp/CartComp";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {
  AOS.init();
  return (
    <Box>
      <Navbar />
      <CartComp data-aos="fade-up" data-aos-duration="1500" />
      <CartComp data-aos="fade-up" data-aos-duration="1500" />

      <Card
        p={"12"}
        border={"1px solid black"}
        marginLeft={"auto"}
        marginBottom={"50px"}
        marginRight={"auto"}
        maxW={"60%"}
        gap={"20px"}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            Total Bill
          </Text>
          <Text fontSize={"2xl"}>$ 1000.50</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            Discount
          </Text>
          <Text fontSize={"2xl"}>$ 100</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            Final Bill
          </Text>
          <Text fontSize={"2xl"}>$ 900.50</Text>
        </Flex>
        <Box paddingTop={"50px"} m={"auto"}>
          <Link to="/payment">
            <Button w={"300px"} colorScheme="blue">
              Proceed To Pay
            </Button>
          </Link>
        </Box>
      </Card>
      <Footer />
    </Box>
  );
};

export default Cart;
