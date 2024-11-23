import { Heading, Flex } from '@chakra-ui/react';
import { CustomButton } from '../UI/CustomButton';

const CallToAction = () => {
  return (
    <Flex
      as='section'
      maxW='1200px'
      w='full'
      h='230px'
      direction='column'
      justify='center'
      align='center'
      bg='white'
      gap='22px'
    >
      <Heading
        as='h2'
        mt='52px'
        fontSize='48px'
        fontWeight='bold'
      >
        Shop Clonetroll
      </Heading>
      <CustomButton
        children='View All Products'
        dark={true}
        mb='40px'
      />
    </Flex>
  );
};
export default CallToAction;
