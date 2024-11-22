import { Box, HStack, useBreakpointValue } from '@chakra-ui/react';

import MenuItem from './MenuItem';
import menuTabs from '../../data/menuTabs';

const MainNav = ({ isMenuActive, handleMenuClick }) => {
  const updatedMenuTabs = menuTabs.map((tab) => {
    if (tab.text === 'menu') {
      return {
        ...tab,
        onClick: handleMenuClick,
        isActive: isMenuActive, // Pass active state for rotation
      };
    }
    return tab;
  });

  return (
    <Box
      as='nav'
      zIndex='1000'
      mr={{ base: 1, md: 6 }}
      alignSelf={useBreakpointValue({ base: 'end', md: 'center' })}
      order={{ base: 0, sm: 0, md: 2 }}
      mb={{ base: -10, md: 0, lg: 0, xl: 0 }}
      mt={{ base: 4, md: 0, lg: 0, xl: 0 }}
    >
      <HStack spacing={{ base: 1, sm: 2, md: 8 }}>
        {updatedMenuTabs.map((item) => (
          <MenuItem
            key={item.text}
            customIcon={<item.icon />} // Render the icon as JSX
            customText={item.text}
            onClick={item.onClick}
            isActive={item.isActive}
          />
        ))}
      </HStack>
    </Box>
  );
};
export default MainNav;
