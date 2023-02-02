import { Box } from '@chakra-ui/react';
import UpperMenu from 'components/UpperMenu';
import s from './style.module.css';

const MainView: React.FC = () => (
  <Box as="main" flex="1" className={s.main}>
    <UpperMenu />
  </Box>
);

export default MainView;
