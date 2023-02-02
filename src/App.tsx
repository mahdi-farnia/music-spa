import { HStack } from '@chakra-ui/react';
import LeftPanel from 'components/LeftPanel';
import MainView from 'components/MainView';

function App() {
  return (
    <HStack w="full" h="full" alignItems="stretch">
      <LeftPanel />
      <MainView />
    </HStack>
  );
}

export default App;
