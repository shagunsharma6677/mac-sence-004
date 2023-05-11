import React, { useState } from "react";
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    Checkbox,
    PinInputField,
    PinInput,
    HStack,
    Text,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                User Details
            </Heading>
            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                        First name
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                        Last name
                    </FormLabel>
                    <Input id="last-name" placeholder="First name" />
                </FormControl>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={"normal"}>
                    Email address
                </FormLabel>
                <Input id="email" type="email" />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                >
                    Country / Region
                </FormLabel>
                <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                    htmlFor="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    Street address
                </FormLabel>
                <Input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                    htmlFor="city"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    City
                </FormLabel>
                <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    State / Province
                </FormLabel>
                <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    ZIP / Postal
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>
        </>
    );
};

const Form2 = () => {
    return (
        <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                Card Details
            </Heading>
            <FormControl>
                <FormLabel>Name on Card*</FormLabel>
                <Input placeholder=" Name on Card" />
            </FormControl>

            <FormControl>
                <FormLabel>Card Type</FormLabel>

                <Select>
                    <option value="Select">American Express</option>
                    <option value="Select">Master Card</option>
                    <option value="Select">Discover</option>
                    <option value="Select">JCB</option>
                </Select>
            </FormControl>

            <FormControl>
                <FormLabel>Card Number*</FormLabel>
                <Input />
            </FormControl>

            <FormControl>
                <FormLabel marginLeft={0}>Security Code</FormLabel>
                <HStack width="full">
                    <PinInput type="alphanumeric" mask>
                        <PinInputField
                            style={{
                                border: "1px solid gray",
                            }}
                        />
                        <PinInputField
                            style={{
                                border: "1px solid gray",
                            }}
                        />
                        <PinInputField
                            style={{
                                border: "1px solid gray",
                            }}
                        />
                    </PinInput>
                </HStack>
            </FormControl>

            <Box mTop={"50px"}>
                <Checkbox defaultChecked>Save thid card</Checkbox>
            </Box>
        </>
    );
};

const Form3 = () => {
    return (
        <>
            <Box textAlign="center" py={16} px={5}>
                <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    Payment Successfull Hurry !!!
                </Heading>

            </Box>
        </>
    );
};

export default function Payment() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    return (
        <>
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={500}
                p={6}
                m="10px auto"
                as="form"
            >
                <Progress
                    hasStripe
                    value={progress}
                    mb="5%"
                    mx="5%"
                    isAnimated
                ></Progress>
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1);
                                    setProgress(progress - 33.33);
                                }}
                                isDisabled={step === 1}
                                colorScheme="teal"
                                variant="solid"
                                w="7rem"
                                mr="5%"
                            >
                                Back
                            </Button>
                            <Button
                                w="7rem"
                                isDisabled={step === 3}
                                onClick={() => {
                                    setStep(step + 1);
                                    if (step === 3) {
                                        setProgress(100);
                                    } else {
                                        setProgress(progress + 33.33);
                                    }
                                }}
                                colorScheme="teal"
                                variant="outline"
                            >
                                Next
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Link to="/">
                                <Button
                                    w="10rem"
                                    colorScheme="green"
                                    variant="solid"
                                    onClick={() => {
                                        toast({
                                            title: "Continue Shopping",
                                            description: "Order Placed.",
                                            status: "success",
                                            duration: 3000,
                                            isClosable: true,
                                        });
                                    }}
                                >
                                    Continue Shopping
                                </Button>
                            </Link>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
}
