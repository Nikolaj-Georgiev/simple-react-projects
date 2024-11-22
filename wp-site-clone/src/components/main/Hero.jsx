import { Box, Heading, Text } from '@chakra-ui/react';
import heroImageSmall from '../../assets/images/largeImages/hero-background-small.webp';

const Hero = () => {
  return (
    <Box
      as='section'
      maxW='1200px'
      w='full'
      h={{ base: '100vh', sm: '90vh', md: '85vh', xl: '80vh' }}
      backgroundImage={heroImageSmall}
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      m='auto'
      display='flex'
      justifyContent='flex-end'
      alignItems='baseline'
      p={{ base: 8, lg: 10 }}
    >
      <Box
        textAlign='right'
        color='primary'
        maxW={{ base: '100%', sm: '100%', md: '90%', xl: '60%' }}
        maxH={{ base: '300%', sm: '250px', md: '167px', xl: '167px%' }}
        w='full'
        h='full'
        mr={{ base: 4, md: 8, lg: 10, xl: 12 }}
      >
        <Heading
          as='h1'
          fontSize={{ sm: '33px', md: '4xl', lg: '5xl' }}
          color='primary'
          lineHeight='1.1'
        >
          The Aquatic Professionals Number One Choice
        </Heading>
        <Text
          mr={-1}
          align='right'
          fontSize={['sm', 'md', 'lg', 'xl', '28px']}
          fontWeight='light'
          color='primary'
          lineHeight='1.5'
          letterSpacing='.3px'
        >
          For Strainers, Reducers & Float Valves
        </Text>
      </Box>
    </Box>
  );
};
export default Hero;
