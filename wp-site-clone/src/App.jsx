import { Box } from '@chakra-ui/react';
import Header from './components/header/Header';
import MainSection from './components/main/MainSection';
import Hero from './components/main/Hero';

function App() {
  return (
    <Box
      maxW={'100%'}
      h={'100%'}
      mx={'auto'}
      bgColor={'#313336'}
      zIndex={'0'}
    >
      <Header />
      <MainSection />
    </Box>
  );
}

export default App;
