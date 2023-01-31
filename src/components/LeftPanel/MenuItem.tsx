import { Link, List, ListIcon, ListItem } from '@chakra-ui/react';
import type { IMenuItem } from 'layout/left-panel';
import s from './style.module.css';

const MenuItem: React.FC<{ items: IMenuItem[] }> = ({ items }) => (
  <List>
    {items.map(({ label, Icon, href }, i) => (
      <ListItem
        display="flex"
        alignItems="center"
        mt={2}
        rounded="md"
        transition="background-color 0.3s ease, color 0.3s ease"
        _hover={{ bgColor: 'rgba(255, 255, 255, 0.1)', color: 'blue.400' }}
        key={i}
        position="relative"
        className={window.location.pathname === href ? s.currentPage : ''}
      >
        <Link href={href} px={2} py={1} width="100%" _hover={{ textDecor: 'none' }}>
          <ListIcon as={Icon} fontSize={16} />
          {label}
        </Link>
      </ListItem>
    ))}
  </List>
);

export default MenuItem;
