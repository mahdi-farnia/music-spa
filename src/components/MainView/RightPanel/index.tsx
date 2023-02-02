import { VStack } from '@chakra-ui/react';
import Player from './Player';
import SearchBox from './SearchBox';
import TopPodcasters from './TopPodcasters';

const RightPanel: React.FC = () => (
  <VStack
    w="350px"
    marginInlineStart="0 !important"
    alignItems="stretch"
    bgColor="blue.dim"
    px={10}
    py={6}
    gap={5}
  >
    <SearchBox />
    <TopPodcasters />
    <Player />
  </VStack>
);

export default RightPanel;
