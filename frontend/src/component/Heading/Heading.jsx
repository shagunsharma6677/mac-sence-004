import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function HeadingComp({head}) {
  return (
    <Box textAlign="center" py={10} px={6}>
      
      <Heading as="h1" size="3xl" mt={12} mb={12}>
        {head}
      </Heading>
      {/* <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text> */}
    </Box>
  );
}