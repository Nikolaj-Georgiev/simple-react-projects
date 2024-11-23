import {
  HStack,
  VStack,
  Box,
  Text,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';

import footerIcons from '../../data/footerIcons';
import FooterIcon from './FooterIcon';

const Footer = () => {
  return (
    <Flex
      maxW='1200px'
      w='full'
      h='206px'
      bg='primary'
      direction={{ base: 'column', tablet: 'row' }}
      justify='space-between'
      p={{ base: 4, tablet: 10 }}
      borderTop='4px'
      borderColor='divider'
      borderStyle='solid'
    >
      <Box
        alignSelf='center'
        maxW={{ base: '100%', tablet: '260px' }}
        w='full'
        h='34px'
        order={{ base: 3, tablet: 0 }}
      >
        <Text
          fontSize='xs'
          color='white'
          textAlign={useBreakpointValue({ sm: 'center', tablet: 'left' })}
          p={2}
        >
          &copy; 2024 Clonetroll Pro Clone Technologies, Inc. All Rights
          Reserved. Project made with learning purpose
        </Text>
      </Box>
      <VStack
        color='white'
        spacing={0}
        alignContent='baseline'
        order={{ base: 0, tablet: 1 }}
      >
        <Box
          textAlign={useBreakpointValue({ sm: 'center', tablet: 'left' })}
          alignSelf={useBreakpointValue({ sm: 'center', tablet: 'start' })}
        >
          <Text
            opacity='0.75'
            fontSize={{ md: '18px', lg: '26px' }}
            letterSpacing='0.96px'
          >
            For Customer Service Call
          </Text>
        </Box>
        <Box
          textAlign={useBreakpointValue({ sm: 'center', tablet: 'left' })}
          my={{ sm: 0, tablet: -2 }}
        >
          <Text
            fontSize={{ sm: '4xl', lg: '5xl' }}
            fontWeight='bold'
            letterSpacing='0.67px'
          >
            1-000-111-000
          </Text>
        </Box>
        <Box textAlign={useBreakpointValue({ sm: 'center', tablet: 'left' })}>
          <Text
            fontSize={{ sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}
            letterSpacing='0.52px'
          >
            or send an email to:ng@clonetroll.com
          </Text>
        </Box>
      </VStack>
      <HStack
        spacing={8}
        alignSelf='center'
        order={{ base: 1, tablet: 3 }}
      >
        {footerIcons.map((icon, index) => (
          <FooterIcon
            key={index}
            customIcon={<icon.icon />}
            onclick={icon.onClick}
          />
        ))}
      </HStack>
    </Flex>
  );
};
export default Footer;
