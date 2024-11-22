import { extendTheme } from '@chakra-ui/react';

const colors = {
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  white: '#ffffff',
  gray: '#6c757d',
  menuGrey: '#8091a2',
  grayDark: '#343a40',
  primary: '#002345', // Primary brand color
  search: '#94a3b1',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  gwbtn: '#52A6D7',
  collapseMenu: '#D8DDE2',
  collapseMenuHeadings: '#0094e1',
  about: '#212529',
  aboutBg: '#f2f2f2',
  divider: '#ffae00',
};

const breakpoints = {
  base: '0px',
  sm: '320px',
  mobileL: '435px',
  md: '768px',
  tablet: '810px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const theme = extendTheme({
  colors: {
    ...colors,
    brand: {
      50: '#e5f6ff',
      100: '#b3e1ff',
      200: '#80ccff',
      300: '#4db8ff',
      400: '#1aa3ff',
      500: colors.primary, // primary color as the main brand color
      600: '#001c3a',
      700: '#00142e',
      800: '#000d23',
      900: '#000517',
    },
  },
  fonts: {
    heading: `'Neue Haas Unica', sans-serif`,
    body: `'Neue Haas Unica', sans-serif`,
  },
  textStyles: {
    h1: {
      fontSize: ['48px', '60px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
      // letterSpacing: '0.67px',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
  breakpoints: {
    ...breakpoints,
  },
});

export default theme;
