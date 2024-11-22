import { Box, Button } from '@chakra-ui/react';

const FooterIcon = ({ customIcon, onClick }) => {
  return (
    <Button
      p={2}
      variant='ghost'
      color='white'
      onClick={onClick}
      cursor='pointer'
      _hover={{ opacity: 1 }}
      _focus={{
        outline: 'none',
        boxShadow: 'none',
        opacity: 1,
      }}
      _focusVisible={{
        outline: 'none',
        boxShadow: 'none',
        opacity: 1,
      }}
      opacity='0.5'
      transition='all 0.1s'
    >
      <Box
        color='inherit'
        fontSize={32}
      >
        {customIcon}
      </Box>
    </Button>
  );
};
export default FooterIcon;
