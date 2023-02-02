import {
  HStack,
  Tooltip,
  Button,
  Avatar,
  AvatarBadge,
  Icon,
  VStack,
  Heading,
  Text
} from '@chakra-ui/react';
import { HiBadgeCheck } from 'react-icons/hi';
import { MenuButton, NotificationButton } from './Buttons';

const AccountSection: React.FC = () => (
  <HStack>
    <MenuButton variant="ghost" size="sm">
      Upgrade Plan
    </MenuButton>
    <Tooltip label="No New Notification">
      <NotificationButton aria-label="Notifications" />
    </Tooltip>
    <Button size="md" variant="ghost">
      <HStack gap={1}>
        <Avatar size="sm" name="John Doe" src="/img/avatar.png">
          <AvatarBadge boxSize="4" borderColor="transparent">
            <Icon as={HiBadgeCheck} color="blue.theme" fontSize="16px" />
          </AvatarBadge>
        </Avatar>
        <VStack alignItems="flex-start">
          <Heading as="h6" fontSize={12}>
            John Doe
          </Heading>
          <Text color="blue.theme" fontSize={10} style={{ marginTop: '4px' }}>
            Active
          </Text>
        </VStack>
      </HStack>
    </Button>
  </HStack>
);

export default AccountSection;
