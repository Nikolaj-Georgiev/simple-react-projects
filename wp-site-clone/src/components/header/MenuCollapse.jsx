import {
  Box,
  Collapse,
  Heading,
  HStack,
  Link,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from '@chakra-ui/react';

const MenuCollapse = ({ isMenuActive, menuItems }) => {
  // Determine if we are below the 960px breakpoint
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Collapse
      in={isMenuActive}
      animateOpacity
    >
      <Box
        p={4}
        bg='collapseMenu'
        w='100%'
        maxW='1200px'
        mx='auto'
        zIndex='overlay'
        position='fixed'
        top='150px'
        left='0'
        right='0'
      >
        <Heading
          as='h3'
          p={6}
          pt={2}
          ml={5}
          pb={1}
          mb={-1}
          lineHeight='2.2'
        >
          Menu
        </Heading>

        {isMobile ? (
          // Render Accordion when on mobile (below 960px)
          <Accordion
            allowMultiple
            mb={6}
          >
            {menuItems.map((section) => (
              <AccordionItem
                key={section.title}
                sx={{
                  border: 'none', // Removes default borders on the entire AccordionItem
                }}
              >
                <h2>
                  <AccordionButton
                    border='none'
                    borderBottom='2px solid'
                    borderColor='collapseMenuHeadings'
                  >
                    <Box
                      flex='1'
                      textAlign='left'
                      fontWeight='bold'
                      fontSize='xl'
                      color='collapseMenuHeadings'
                    >
                      {section.title}
                    </Box>
                    <AccordionIcon color='collapseMenuHeadings' />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {section.links.map((link, index) => (
                    <Link
                      key={index}
                      display='block'
                      py={1}
                      fontSize='lg'
                      lineHeight='1.5'
                    >
                      {link.label}
                    </Link>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          // Render original menu when not mobile (above 960px)
          <HStack
            justify='space-around'
            align='baseline'
            spacing={10}
            wrap='wrap'
            p={5}
            pl={5}
            pt={-1}
            fontSize='md'
          >
            {menuItems.map((section) => (
              <VStack
                align='start'
                spacing={1}
                key={section.title}
              >
                <Link
                  fontWeight='bold'
                  color='collapseMenuHeadings'
                  fontSize='xl'
                >
                  {section.title}
                </Link>
                {section.links.map((link, index) => (
                  <Link
                    key={index}
                    fontSize='lg'
                    lineHeight='1'
                  >
                    {link.label}
                  </Link>
                ))}
              </VStack>
            ))}
          </HStack>
        )}
      </Box>
    </Collapse>
  );
};

export default MenuCollapse;
