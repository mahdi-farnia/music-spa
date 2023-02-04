import {
  Center,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/react';

const PlayerSlider: React.FC = () => (
  <Center w="full" gap={3}>
    <Text fontSize="xx-small" fontWeight="bold">
      15:24
    </Text>
    <Slider w="36" defaultValue={80}>
      <SliderTrack h="3px">
        <SliderFilledTrack bgColor="white" />
      </SliderTrack>
      <SliderThumb boxSize={3} border="2px solid" borderColor="white" bgColor="blue.dark" />
    </Slider>
    <Text fontSize="x-small" fontWeight="bold">
      19:07
    </Text>
  </Center>
);

export default PlayerSlider;
