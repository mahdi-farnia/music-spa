import { Heading, HeadingProps } from '@chakra-ui/react';

const Header: React.FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading
    as="h3"
    cursor="default"
    fontSize="1em"
    textTransform="uppercase"
    letterSpacing="widest"
    {...rest}
  >
    {children}
  </Heading>
);

export default Header;
