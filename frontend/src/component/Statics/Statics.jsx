import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { BsBox, BsChatQuote, BsCurrencyDollar, BsFillBoxFill } from "react-icons/bs";



function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            // border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>

            <Flex justifyContent={"center"} fontSize={'4xl'} fontWeight={'medium'} isTruncated>
                {icon}
            </Flex>
            <StatLabel textAlign={"center"} fontSize={'2xl'} fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber textAlign={"center"} fontSize={'1xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
            <Text color={"blue.400"} textAlign={"center"} fontSize={'2xl'} >Learn more</Text>
        </Stat>
    );
}

export default function Statics() {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            {/* <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                What is our company doing?
            </chakra.h1> */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'Fast delivery or pickup'} stat={'Enjoy two‑hour delivery from an Apple Store, free delivery, or easy pickup.'} icon={<BsBox />} />
                <StatsCard title={'Pay monthly at 0% APR'} stat={'You can pay over time when you choose to check out with Apple Card Monthly Installments.*'} icon={<BsCurrencyDollar />} />
                <StatsCard title={'Get help buying'} stat={'Have a question? Call a Specialist or chat online. Call 1‑800-MY‑APPLE.'} icon={<BsChatQuote />} />
            </SimpleGrid>
        </Box>
    );
}