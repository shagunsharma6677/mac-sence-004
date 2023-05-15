import React from "react";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";

const CartComp = () => {
    return (
        <div>
            <Box minW={"600px"} w="100%" m={"auto"}>
                <Flex
                    direction={{ base: "column", md: "row", sm: "row" }}
                    mb={4}
                    borderBottom="1px solid gray"
                    p={4}
                    gap={"20px"}
                >
                    {/* Ist box */}

                    <Box w={{ base: "100%", md: "90%", sm: "80%" }} py={8}>
                        <Image
                            p={2}
                            height="140px"
                            objectFit="contain"
                            src={
                                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1664576115052"
                            }
                            alt="Dan Abramov"
                        />
                    </Box>

                    <Flex
                        w={["100%", "80%", "80%"]}
                        mb={4}
                        justify="space-between"
                        direction={["column", "row", "row"]}
                        p={4}
                    >
                        <Grid textAlign="start" w={["100%", "50%"]} p={6}>
                            <Text
                                textAlign={["center", "start", "start"]}
                                fontSize={{ base: "xl", md: "lg", lg: "2xl" }}
                                fontWeight={[800, 600, 600]}
                            >
                                MacBook Air with M1 chip
                            </Text>
                            <Text
                                textAlign={["center", "start", "start"]}
                                fontSize={{ base: "sm", md: "sm", lg: "md" }}
                            >
                                Pay 16% pa for 6 months
                            </Text>
                        </Grid>
                        <Grid w={["100%", "50%"]} gap={10}>
                            {" "}
                            <Flex justify="space-between" p={4}>
                                <Flex>
                                    <Text
                                        fontSize={{ base: "14px", md: "14px", lg: "md" }}
                                        mr={1}
                                    >
                                        Quantity:
                                    </Text>
                                    <select>1</select>
                                </Flex>
                                <Text fontSize={{ base: "sm", md: "sm", lg: "md" }}>
                                    ₹ 1000
                                </Text>
                            </Flex>
                            <Box>
                                <Text
                                    textAlign={["center", "end", "end"]}
                                    fontSize={{ base: "sm", md: "sm", lg: "md" }}
                                >
                                    Get up to 10% savings with eligible card(s)^
                                </Text>
                                <Text
                                    textAlign={["center", "end", "end"]}
                                    fontSize={{ base: "sm", md: "sm", lg: "md" }}
                                >
                                    ₹2000
                                </Text>
                            </Box>
                            <Button size="sm" color={"white"} variant="outline" colorScheme="black" ml={4}>
                                Remove
                            </Button>
                        </Grid>
                    </Flex>
                </Flex>

                
            </Box>
        </div>
    );
};

export default CartComp;
