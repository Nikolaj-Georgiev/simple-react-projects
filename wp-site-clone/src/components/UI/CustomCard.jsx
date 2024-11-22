import { Flex, Box, Image, Text } from '@chakra-ui/react';
import { CustomButton } from './CustomButton';

const CustomCard = ({ itemImage, itemHeading, itemText }) => {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      minW='260px'
      h='407px'
      gap={4}
    >
      <Box>
        <Text
          textAlign='center'
          color='primary'
          fontWeight='bold'
          fontSize={['xl', '2xl']}
        >
          {itemHeading}
        </Text>
        <Text
          textAlign='center'
          color='primary'
          fontWeight='normal'
          fontSize={['xl', '2xl']}
          letterSpacing='-0.49px'
          lineHeight='1.1'
          mt={-1}
        >
          {itemText}
        </Text>
      </Box>
      <Box boxSize={{ sm: '330px', tablet: '260px', lg: '330px' }}>
        <Image src={itemImage} />
      </Box>
      <CustomButton>{`View ${itemHeading} strainers`}</CustomButton>
    </Flex>
  );
};
export default CustomCard;
