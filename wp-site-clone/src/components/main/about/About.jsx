import { VStack, Image, Box, Heading, Flex } from '@chakra-ui/react';

import madeInUsa from '../../../assets/images/basket-strainers-made-in-usa.png.webp';

import { leftText, rightText } from '../../../data/aboutText';
import AboutListItem from './AboutListItem';
import { CustomButton } from '../../UI/CustomButton';

const About = () => {
  return (
    <VStack
      as='section'
      justify='center'
      align='center'
      bg='aboutBg'
      maxW='1200px'
      w='full'
      h='100%'
      spacing={8}
      p={8}
    >
      <Heading
        as='h3'
        color='about'
        fontWeight='bold'
        lineHeight='28px'
        fontSize='28px'
        letterSpacing='-0.16px'
        alignSelf='self-start'
        mt={10}
        pl={6}
      >
        Why Trust Clonetroll?
      </Heading>
      <Flex
        direction={{ base: 'column', tablet: 'row' }}
        justify='center'
        align='center'
        spacing={16}
        padding={6}
        w='100%'
      >
        <VStack
          as='ul'
          listStyleType='none'
          wrap='wrap'
          maxW={{ base: '100%', tablet: '330px' }}
          spacing={4}
        >
          {leftText.map((paragraph) => (
            <AboutListItem
              key={paragraph.heading}
              paragraph={paragraph}
            />
          ))}
        </VStack>
        <VStack
          as='ul'
          listStyleType='none'
          wrap='wrap'
          maxW={{ base: '100%', tablet: '330px' }}
          spacing={4}
        >
          {rightText.map((paragraph) => (
            <AboutListItem
              key={paragraph.heading}
              paragraph={paragraph}
            />
          ))}
        </VStack>
        <Box
          bg='aboutBg'
          boxSize='245px'
          minW='245px'
          mr={{ base: 0, tablet: 14 }}
          mt={{ base: 10, tablet: 0 }}
          alignSelf='center'
        >
          <Image
            src={madeInUsa}
            alt='Made In USA'
            w='100%'
          />
        </Box>
      </Flex>
      <Heading
        as='h3'
        color='primary'
        fontWeight='bold'
        lineHeight='28px'
        fontSize='2xl'
        letterSpacing='-0.16px'
        textAlign='center'
        my={8}
        pl={6}
      >
        The Very Best in Customer Service, Customization, and Delivery
      </Heading>
      <CustomButton
        children='Contact Us'
        dark={true}
        mb='40px'
      />
    </VStack>
  );
};
export default About;
