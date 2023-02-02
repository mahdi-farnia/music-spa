import { Box, Circle, Input, InputGroup, InputRightElement, Icon } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import Header from '../Header';

const SearchBox: React.FC = () => (
  <Box as="section">
    <Header>Quick Search</Header>
    <InputGroup mt={5}>
      <Input
        variant="filled"
        border="1px solid rgba(255, 255, 255, 0.1)"
        bgColor="blue.dark"
        fontSize={12}
        fontWeight="semibold"
        placeholder="Type here to search"
        _placeholder={{ color: 'gray.theme' }}
        rounded="3xl"
      />
      <InputRightElement pointerEvents="none">
        <Circle bgColor="blue.theme" size="7">
          <Icon as={CiSearch} color="black" strokeWidth={1} />
        </Circle>
      </InputRightElement>
    </InputGroup>
  </Box>
);

export default SearchBox;
