import { extendTheme } from '@chakra-ui/theme-utils';

const theme = extendTheme({
  styles: {
    global: {
      '.slide-in': {
        animation: 'slideIn 0.5s ease-out forwards'
      }
    }
  },
  keyframes: {
    slideIn: {
      '0%': { transform: 'translateY(100px)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    }
  }
});

export default theme;