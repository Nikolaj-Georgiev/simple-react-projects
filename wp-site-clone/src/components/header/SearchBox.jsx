import { useState } from 'react';
import { Flex, IconButton, Input, useBreakpointValue } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState(''); //this is just to mimic some state management

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Flex
      bg='search'
      borderRadius='8px'
      w={useBreakpointValue({ base: 'full', md: '351px', xl: '351px' })}
      h='44px'
      order={{ base: 1, md: 0 }}
    >
      <Input
        bg='search'
        variant='filled'
        placeholder='Search product, model, sku, keyword…'
        onChange={handleInputChange}
        value={searchTerm}
        outline='none'
        border='none'
        color='white'
        fontFamily='body'
      />
      <IconButton
        icon={<FaSearch />}
        color='white'
        bg='search'
        mt='2px'
      />
    </Flex>
  );
};
export default SearchBox;
