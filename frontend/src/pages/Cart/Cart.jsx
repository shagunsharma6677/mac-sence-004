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

const Cart = () => {
    return (
        <Box >
            <Navbar />
            <CartComp />
            <CartComp />

            <Card p={"12"} border={"1px solid black"} marginLeft={"auto"} marginBottom={"50px"} marginRight={"auto"} maxW={"60%"} gap={"20px"} >
                <Flex justifyContent={"space-between"}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Total Bill</Text>
                    <Text fontSize={"2xl"} >$ 1000.50</Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Discount</Text>
                    <Text fontSize={"2xl"} >$ 100</Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Final Bill</Text>
                    <Text fontSize={"2xl"} >$ 900.50</Text>
                </Flex>
                <Box paddingTop={"50px"} m={"auto"} >
                    <Link to="/payment">
                        <Button w={"300px"} colorScheme="blue">Proceed To Pay</Button>
                    </Link>


                </Box>

            </Card>
            <Footer />
        </Box>
    );
};

export default Cart;
