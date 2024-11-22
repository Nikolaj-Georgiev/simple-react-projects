import { Flex } from '@chakra-ui/react';
import CallToAction from './CallToAction';
import Hero from './Hero';
import Products from './Products';
import Services from './Solutions';
import About from './about/About';
import Footer from '../footer/Footer';

const MainSection = () => {
  return (
    <Flex
      as='main'
      maxW='1200px'
      h='100%'
      mx='auto'
      direction='column'
      justify='center'
      align='center'
    >
      <Hero />
      <CallToAction />
      <Products />
      <Services />
      <About />
      <Footer />
    </Flex>
  );
};
export default MainSection;
