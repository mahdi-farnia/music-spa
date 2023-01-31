import { extendTheme, ThemeOverride } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      'html, body': {
        width: '100vw',
        height: '100vh'
      },
      '#root': {
        width: '100%',
        height: '100%'
      },
      a: {
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none'
      }
    }
  },
  colors: {
    blue: {
      theme: 'rgb(9, 96, 254)'
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif'
  },
  config: { useSystemColorMode: true, initialColorMode: 'system' }
} as ThemeOverride);
