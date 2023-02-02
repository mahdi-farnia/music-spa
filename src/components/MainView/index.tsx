import { HStack, VStack } from '@chakra-ui/react';
import Navbar from 'components/MainView/Navbar';
import Explore from './Explore';
import RightPanel from './RightPanel';

const MainView: React.FC = () => (
  <VStack
    as="main"
    flex="1"
    alignItems="stretch"
    marginInlineStart="0 !important"
    bgColor="blue.dark"
  >
    <Navbar />
    <HStack flex={1} alignItems="stretch" mt="0 !important">
      <Explore />
      <RightPanel />
    </HStack>
  </VStack>
);

export default MainView;
