import { HStack, Link } from '@chakra-ui/react';
import { MenuButton } from './Buttons';

const LeftSection: React.FC = () => (
  <HStack>
    <MenuButton variant="ghost" size="sm">
      <Link href="/new-releases" _hover={{ textDecor: 'none' }}>
        New Releases
      </Link>
    </MenuButton>
    <MenuButton variant="ghost" size="sm">
      Shuffle Play
    </MenuButton>
    <MenuButton
      variant="ghost"
      size="sm"
      position="relative"
      data-live-count={2}
      _after={{
        content: 'attr(data-live-count)',
        w: '14px',
        h: '14px',
        textAlign: 'center',
        lineHeight: '15px',
        fontSize: '8px',
        position: 'absolute',
        top: '-2px',
        right: '-2px',
        pl: '1px',
        bgColor: 'blue.theme',
        color: 'white',
        borderRadius: '50%'
      }}
    >
      Live Podcast
    </MenuButton>
  </HStack>
);

export default LeftSection;
