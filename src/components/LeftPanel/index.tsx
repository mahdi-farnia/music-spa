import { Box, Center, Heading, HStack, Icon, Switch, Text, useColorMode } from '@chakra-ui/react';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import Menu from './Menu';

const LeftPanel: React.FC = () => {
  const colorMode = useColorMode();

  return (
    <Box as="nav" width={220} bg="rgb(22, 27, 32)">
      <HStack justifyContent="center" my={5}>
        <Icon as={LogoIcon} w={8} h={8} />
        <Heading as="h5" fontWeight="semibold" fontSize="md" color="white">
          Podcastr
        </Heading>
      </HStack>
      <Menu />
      <Center mt={10} gap={2}>
        <Switch
          size="lg"
          colorScheme="twitter"
          onChange={colorMode.toggleColorMode}
          checked={colorMode.colorMode === 'dark'}
        />
        <Text textTransform="capitalize" fontSize={12} fontWeight="semibold" color="white">
          {colorMode.colorMode}
        </Text>
      </Center>
    </Box>
  );
};

export default LeftPanel;
