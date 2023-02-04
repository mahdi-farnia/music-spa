import { VStack, Image, Heading, Box, Text } from '@chakra-ui/react';

const PlayerCaption: React.FC = () => (
  <VStack as="figure" w="full" justifyContent="space-between" flex={1}>
    <Image
      w="110px"
      h="110px"
      objectFit="cover"
      src="/img/player.png"
      alt="Podcast Player"
      borderRadius="50%"
    />
    <Box as="figcaption">
      <Heading as="h5" fontSize="md">
        Employee Transfer
      </Heading>
      <Text textAlign="center" fontSize="x-small" mt={1}>
        Earwolf & Jenna Fischer
      </Text>
    </Box>
  </VStack>
);

export default PlayerCaption;
