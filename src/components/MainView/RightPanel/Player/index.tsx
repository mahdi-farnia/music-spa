import {
  Box,
  Heading,
  Icon,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack
} from '@chakra-ui/react';
import { HiLockClosed } from 'react-icons/hi';

const Player: React.FC = () => (
  <Box
    as="section"
    h="80"
    pt="40px"
    rounded="2xl"
    border="1px solid rgba(255, 255, 255, 0.1)"
    position="relative"
    overflow="hidden"
  >
    <Heading
      fontSize={14}
      display="flex"
      justifyContent="space-between"
      position="absolute"
      top={5}
      left={5}
      right={5}
    >
      Player
      <Icon as={HiLockClosed} />
    </Heading>
    <VStack w="full" h="full" justifyContent="space-between">
      <VStack as="figure" w="full">
        <Image
          w="100px"
          h="100px"
          objectFit="cover"
          src="/img/player.png"
          alt="Podcast Player"
          borderRadius="50%"
        />
        <Box as="figcaption">
          <Heading as="h5" fontSize="md">
            Employee Transfer
          </Heading>
          <Text textAlign="center" fontSize="x-small">
            Earwolf & Jenna Fischer
          </Text>
          <Slider defaultValue={80}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </VStack>
      <Box w="full" h="80px" bgColor="blue.600">
        Player
      </Box>
    </VStack>
  </Box>
);

export default Player;
