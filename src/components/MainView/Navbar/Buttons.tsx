import { forwardRef } from 'react';
import { chakra, Button, IconButton, IconButtonProps } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';

export const MenuButton = chakra(Button, {
  baseStyle: {
    letterSpacing: 'widest',
    fontSize: 10,
    fontWeight: 'semibold',
    textTransform: 'uppercase'
  }
});

export const NotificationButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ ...rest }, ref) => (
    <IconButton
      icon={<FaBell />}
      variant="ghost"
      size="sm"
      border="1px solid rgba(255, 255, 255, 0.3)"
      borderRadius="50%"
      ref={ref}
      {...rest}
    />
  )
);
