import LeftSection from './NavOptions';
import AccountSection from './AccountSection';
import { HStack } from '@chakra-ui/react';

const UpperMenu: React.FC = () => (
  <HStack
    h={70}
    as="header"
    justifyContent="space-between"
    borderBottom="1px solid rgba(255, 255, 255, 0.1)"
    px={10}
  >
    <LeftSection />
    <AccountSection />
  </HStack>
);

export default UpperMenu;
