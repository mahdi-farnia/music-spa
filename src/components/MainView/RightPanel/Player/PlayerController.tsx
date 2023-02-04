import { Center, HStack, IconButton, Icon, Tooltip, Text, VStack } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';
import ControllerButtons from 'layout/player-controller-btn';

const PlayerController: React.FC = () => (
  <Center w="full" h="90px" bgColor="blue.light" pt={2} pb={12} position="relative">
    <HStack>
      {ControllerButtons.map((info, i) => (
        <Tooltip
          label={info.label}
          fontSize="x-small"
          fontWeight="semibold"
          openDelay={1_000}
          hasArrow
          placement="top"
          key={i}
        >
          <IconButton variant="ghost" aria-label={info.label} borderRadius="50%">
            <Icon as={info.icon} fontSize={info.fontSize} />
          </IconButton>
        </Tooltip>
      ))}
    </HStack>
    <VStack position="absolute" bottom="10px" cursor="pointer">
      <Icon as={IoIosArrowUp} />
      <Text fontSize="xx-small" fontWeight="semibold" mt="0 !important">
        Subtitle
      </Text>
    </VStack>
  </Center>
);

export default PlayerController;
