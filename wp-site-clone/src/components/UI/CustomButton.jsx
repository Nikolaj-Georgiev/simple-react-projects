import { Box } from '@chakra-ui/react';

export const CustomButton = ({ children, dark, ...props }) => {
  return (
    <Box
      {...props}
      as='button'
      w={!dark ? { sm: '330px', md: '260px', lg: '330px' } : '330px'}
      height='44px'
      lineHeight='1.2'
      transition='all 0.2s'
      border='1px'
      px={!dark ? { base: '4px', md: '8px' } : '8px'}
      paddingTop='9px'
      pb='11px'
      borderRadius='22px'
      fontSize='md'
      fontWeight='bold'
      bg={!dark ? 'white' : 'gwbtn'}
      borderColor='gwbtn'
      color={!dark ? 'gwbtn' : 'white'}
      letterSpacing='.64px'
      _hover={
        !dark
          ? { bg: 'gwbtn', color: 'white' }
          : { bg: 'white', color: 'gwbtn' }
      }
      _active={{
        textDecor: 'underline 1.5px solid',
        borderColor: 'gwbtn',
        outline: 'none',
      }}
      _focus={{
        textDecor: 'underline 1.5px solid',
        bg: 'gwbtn',
        color: 'white',
        outline: 'none',
      }}
    >
      {children}
    </Box>
  );
};
