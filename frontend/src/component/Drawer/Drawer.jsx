import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Stack,
  Heading,
  RadioGroup,
  Radio,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

export default function FilterSortDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handleFilterChange = (value) => {};

  const handleSortChange = (val) => {};

  return (
    <>
      <Box
        w="100%"
        zIndex={"55"}
        bg="#f5f5f7"
        position={"sticky"}
        top={"0"}
        h="7rem"
        display="flex"
        justifyContent={"center"}
      >
        <Button
          ref={btnRef}
          bg="black"
          color="white"
          _hover={{ bg: "black" }}
          onClick={onOpen}
          m="auto"
        >
          Click To Filter & Sort
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <CheckboxGroup
              colorScheme="green"
              value={""}
              onChange={handleFilterChange}
            >
              <Heading>Filter </Heading>
              <Stack spacing={[1, 5]} direction={["column", "column"]}>
                <Text fontWeight={"bold"}>By Category</Text>
                <Checkbox value="MacBook Air">MacBook Air</Checkbox>
                <Checkbox value="MacBook Pro">MacBook Pro</Checkbox>
                <Checkbox value="iPad">iPad</Checkbox>
                <Checkbox value="iPhone">iPhone</Checkbox>
                <Checkbox value="Watch">Watch</Checkbox>
                <Checkbox value="Airpods">Airpods</Checkbox>
                <Checkbox value="Tv & Home">Tv & Home</Checkbox>
                <Checkbox value="Entertainment">Entertainment</Checkbox>
                <Checkbox value="Accessorires">Accessorires</Checkbox>
              </Stack>
            </CheckboxGroup>

            <Heading mt="20px">Sort </Heading>
            <RadioGroup onChange={handleSortChange} value={0}>
              <Text fontWeight={"bold"}> By Price</Text>
              <Stack direction="column">
                <Radio value="asc">Low To High</Radio>
                <Radio value="desc">High To Low</Radio>
              </Stack>
            </RadioGroup>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
