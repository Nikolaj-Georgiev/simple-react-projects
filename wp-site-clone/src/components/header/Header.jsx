import { useState } from 'react';
import { Box, HStack, Image, useBreakpointValue, Flex } from '@chakra-ui/react';

import logoL from '../../assets/images/logos/logo-large.png';
import logoS from '../../assets/images/logos/logo-small.png';
import SearchBox from './SearchBox';
import MainNav from './MainNav';
import { handleMenuClick } from '../../utils/helpers';
import { menuItems } from '../../data/menuData';
import MenuCollapse from './MenuCollapse';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const logoSrc = useBreakpointValue({
    base: logoS, // mobile
    md: logoS, // tablets and medium screens
    lg: logoS, //  medium screens desktop
    xl: logoL, // desktop and large screens
  });

  return (
    <Box
      zIndex='sticky'
      position='sticky'
      top={0}
    >
      <Flex
        as='header'
        rowGap={2}
        maxW='1200px'
        w='full'
        h='150px'
        bg='primary'
        mx='auto'
        p={4}
        align='center'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row' }} // Stack on small, row on larger screens
      >
        <Box
          order={{ base: 1, md: 0, lg: 0 }}
          alignSelf={useBreakpointValue({ base: 'baseline', md: 'center' })}
          mb={{ base: 3, md: 0, lg: 0, xl: 0 }}
          mt={{ base: -2, md: 0, lg: 0, xl: 0 }}
        >
          <Image
            src={logoSrc}
            w={useBreakpointValue({
              sm: '200px',
              md: '250px',
              lg: '300px',
              xl: '400px',
            })} // Adjust width responsively
            h={useBreakpointValue({
              sm: '38px',
              md: '44px',
              lg: '58px',
              xl: '71px',
            })} // Adjust height responsively
            pl={useBreakpointValue({ base: '24px', lg: '44px', xl: '53px' })}
          />
        </Box>
        <SearchBox />
        <MainNav
          handleMenuClick={() => handleMenuClick(setIsMenuActive)}
          isMenuActive={isMenuActive}
        />
      </Flex>
      <MenuCollapse
        isMenuActive={isMenuActive}
        menuItems={menuItems}
      />
    </Box>
  );
};
export default Header;
