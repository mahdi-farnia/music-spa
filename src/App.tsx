import { HStack } from '@chakra-ui/react';
import LeftPanel from 'components/LeftPanel';
import MainView from 'components/MainView';

function App() {
  return (
    <HStack w="100%" h="100%" alignItems="stretch">
      <LeftPanel />
      <MainView />
    </HStack>
  );
}

export default App;
