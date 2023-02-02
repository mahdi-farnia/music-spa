import { Box } from '@chakra-ui/react';
import Navbar from 'components/Navbar';
import s from './style.module.css';

const MainView: React.FC = () => (
  <Box as="main" flex="1" className={s.main} bgColor="rgb(17, 19, 22)">
    <Navbar />
  </Box>
);

export default MainView;
