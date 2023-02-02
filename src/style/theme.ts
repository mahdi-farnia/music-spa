import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import switchTheme from './switch.theme';

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
  components: {
    Switch: switchTheme
  },
  colors: {
    blue: {
      theme: 'rgb(9, 96, 254)',
      dim: 'rgb(22, 27, 32)',
      dark: 'rgb(17, 19, 22)'
    },
    gray: {
      theme: 'rgb(123, 126, 131)'
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif'
  },
  config: { useSystemColorMode: true, initialColorMode: 'system' }
} as ThemeOverride);
