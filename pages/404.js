import { Flex, Heading, Text, Button } from "@chakra-ui/react";

export default function Custom404() {
  return (
    // create 404 page using chakra ui
    <Flex direction="column" align="center" justify="center" minH="100vh" p={8}>
      <Heading mb={4}>404 - Page Not Found</Heading>
      <Text mb={4}>Maaf, tidak ada apa-apa di sini.</Text>
      <Button colorScheme="teal" variant="solid">
        <a href="/">Back to Home</a>
      </Button>
    </Flex>
  );
}
