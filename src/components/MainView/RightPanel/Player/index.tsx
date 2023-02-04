import { Box, Heading, Icon, VStack } from '@chakra-ui/react';
import { HiLockClosed } from 'react-icons/hi';
import PlayerCaption from './PlayerCaption';
import PlayerSlider from './PlayerSlider';
import PlayerController from './PlayerController';

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
      <PlayerCaption />
      <PlayerSlider />
      <PlayerController />
    </VStack>
  </Box>
);

export default Player;
