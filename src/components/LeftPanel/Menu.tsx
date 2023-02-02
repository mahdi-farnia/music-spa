import { Heading, Box } from '@chakra-ui/react';
import MenuItems from 'layout/left-panel';
import MenuItem from './MenuItem';

const Menu: React.FC = () => (
  <Box pl={12} color="gray.theme" fontSize={12} fontWeight="bold">
    {MenuItems.map((item, i) => (
      <Box key={i} mt={8}>
        <Heading
          textTransform="uppercase"
          fontSize={10}
          fontWeight="semibold"
          letterSpacing="widest"
          cursor="default"
        >
          {item.header}
        </Heading>
        <MenuItem items={item.items} />
      </Box>
    ))}
  </Box>
);

export default Menu;
