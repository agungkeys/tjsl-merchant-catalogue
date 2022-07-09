import '../styles/globals.css';
import '../styles/banners.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      // primaryLight: '$green200',
      // primaryLightHover: '$green300',
      // primaryLightActive: '$green400',
      // primaryLightContrast: '$green600',
      // primary: '#4ADE7B',
      // primaryBorder: '$green500',
      // primaryBorderHover: '$green600',
      // primarySolidHover: '$green700',
      // primarySolidContrast: '$white',
      // primaryShadow: '$green500',

      white : "#fff",

      gradient: 'linear-gradient(110deg, #ff9068 10%, #ff4b1f 100%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {
      sans: "'Raleway', sans-serif",
      mono: "'Raleway', sans-serif"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
}

export default MyApp
