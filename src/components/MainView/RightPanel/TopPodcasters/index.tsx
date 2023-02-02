import { Box } from '@chakra-ui/react';
import Header from '../Header';
import Podcasters from 'layout/right-panel';
import Podcaster from './Podcaster';

const TopPodcasters: React.FC = () => (
  <Box as="section" flex={1}>
    <Header mb={5}>Top Podcasters</Header>
    {Podcasters.map((info, i) => (
      <Podcaster info={info} key={i} />
    ))}
  </Box>
);

export default TopPodcasters;
