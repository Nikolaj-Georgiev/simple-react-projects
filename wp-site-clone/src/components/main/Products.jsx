import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import cardsInfo from '../../data/cardsInfo';
import CustomCard from '../UI/CustomCard';

const Products = () => {
  return (
    <Box
      as='section'
      maxW='1200px'
      w='full'
      h='100%'
      bg='white'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      pb={32}
    >
      <Box
        bg='primary'
        borderRadius='lg'
        maxW={{
          base: '330px',
          mobileL: '400px',
          md: '755px',
          lg: '940',
          xl: '1080px',
        }}
        w='full'
        h='52px'
        mb='49px'
        mt='9px'
      >
        <Text
          color='white'
          fontSize='lg'
          textAlign='left'
          p={3}
          pl={4}
        >
          Products Categories
        </Text>
      </Box>
      <SimpleGrid
        columns={{ sm: 1, tablet: 3 }}
        spacing={{ base: '88px', tablet: '5px', lg: '8px', xl: '44px' }}
      >
        {cardsInfo.map((card, index) => (
          <CustomCard
            key={index}
            itemHeading={card.itemHeading}
            itemText={card.itemText}
            itemImage={card.itemImage}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Products;
