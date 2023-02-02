import { Box, Heading, Icon } from '@chakra-ui/react';
import { HiLockClosed } from 'react-icons/hi';

const Player: React.FC = () => (
  <Box
    as="section"
    h="80"
    p="40px 20px 20px"
    rounded="2xl"
    border="1px solid rgba(255, 255, 255, 0.1)"
    position="relative"
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
    <Box>TODO</Box>
  </Box>
);

export default Player;
