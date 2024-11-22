import { Box, Text } from '@chakra-ui/react';

const AboutListItem = ({ paragraph }) => {
  return (
    <Box
      as='li'
      alignSelf='baseline'
    >
      <Text
        fontWeight='bold'
        fontSize='md'
        color='about'
        letterSpacing='-0.01px'
      >
        {paragraph.heading}
      </Text>
      <Text
        fontWeight='normal'
        fontSize='md'
        color='about'
        lineHeight='20px'
        letterSpacing='-0.01px'
      >
        {paragraph.text}
      </Text>
    </Box>
  );
};
export default AboutListItem;
