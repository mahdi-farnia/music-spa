import { HStack } from '@chakra-ui/react';
import LeftPanel from 'components/LeftPanel';

function App() {
  return (
    <HStack w="100%" h="100%" alignItems="stretch">
      <LeftPanel />
    </HStack>
  );
}

export default App;
