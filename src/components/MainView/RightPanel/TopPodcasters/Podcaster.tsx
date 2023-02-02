import { Avatar, Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import type { IPodcaster } from 'layout/right-panel';

const fmt = Intl.NumberFormat();

const Podcaster: React.FC<{ info: IPodcaster }> = ({ info }) => (
  <HStack w="full" as="figure" gap={2} mt={4}>
    <Avatar name={info.name} src={info.avatar} />
    <Box as="figcaption" flex={1} cursor="default">
      <Heading as="h6" fontSize={12} cursor="default" noOfLines={1}>
        {info.name}
      </Heading>
      <Text fontSize={10} fontWeight="semibold" color="gray.500" mt={1}>
        {fmt.format(info.followers)} followers
      </Text>
    </Box>
    <Button
      w={20}
      h={7}
      size="sm"
      rounded="2xl"
      fontSize={10}
      bgColor={info.isFollowing ? 'blue.theme' : 'hsla(220, 100%, 60%, 0.2)'}
      _hover={{ bgColor: info.isFollowing ? 'blue.400' : 'hsla(220, 100%, 60%, 0.3)' }}
      color={info.isFollowing ? 'black' : 'blue.theme'}
    >
      {info.isFollowing ? 'Following' : 'Follow'}
    </Button>
  </HStack>
);

export default Podcaster;
