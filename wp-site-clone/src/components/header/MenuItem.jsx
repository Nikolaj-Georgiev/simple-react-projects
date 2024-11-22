import { Button, Box, Text } from '@chakra-ui/react';

const MenuItem = ({ customIcon, customText, onClick, isActive }) => {
  const buttonColor = isActive ? 'white' : 'menuGrey';

  return (
    <Button
      p={{ base: 1, md: 2 }}
      variant='ghost'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      color={buttonColor}
      onClick={onClick}
      cursor='pointer'
      _hover={{ color: 'white' }}
      _focus={{
        color: 'white',
        outline: 'none',
        boxShadow: 'none',
      }}
      _focusVisible={{
        color: 'white',
        outline: 'none',
        boxShadow: 'none',
      }}
      transition='all 0.1s'
    >
      <Box
        color='inherit'
        fontSize={{ base: 24, md: 32 }}
        transform={
          isActive !== undefined
            ? isActive
              ? 'rotate(0deg)'
              : 'rotate(45deg)'
            : 'none'
        }
        transition='all 0.1s'
      >
        {customIcon}
      </Box>
      <Text
        color='inherit'
        fontSize={{ base: 'sm', md: 'md' }}
      >
        {customText}
      </Text>
    </Button>
  );
};

export default MenuItem;
