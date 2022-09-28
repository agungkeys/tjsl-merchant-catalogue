import { extendTheme, theme as chakraTheme  } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  primary: {
    10: "#FEEED2",
    20: "#FED9A6",
    30: "#FCBE79",
    40: "#F9A357",
    50: "#F57921",
    60: "#D25A18",
    70: "#B04010",
    80: "#8E2A0A",
    90: "#751A06",
  },
  secondary: {
    10: "#CEEFFB",
    20: "#9EDCF7",
    30: "#6ABBE8",
    40: "#4497D1",
    50: "#1268B3",
    60: "#0D5099",
    70: "#093C80",
    80: "#052A67",
    90: "#052A67",
  },
  gray: {
    10: "#F7FAFC",
    20: "#EDF2F7",
    30: "#E2E8F0",
    40: "#CBD5E0",
    50: "#A0AEC0",
    60: "#718096",
    70: "#4A5568",
    80: "#2D3748",
    90: "#1A202C",
  },
  blue: {
    10: "#EBF8FF",
    20: "#BEE3F8",
    30: "#90CDF4",
    40: "#63B3ED",
    50: "#4299E1",
    60: "#3182CE",
    70: "#2B6CB0",
    80: "#2C5282",
    90: "#2A4365",
  },
  green: {
    10: "#F0FFF4",
    20: "#C6F6D5",
    30: "#9AE6B4",
    40: "#68D391",
    50: "#48BB78",
    60: "#38A169",
    70: "#2F855A",
    80: "#276749",
    90: "#22543D",
  },
  yellow: {
    10: "#FFFFF0",
    20: "#FEFCBF",
    30: "#FAF089",
    40: "#F6E05E",
    50: "#ECC94B",
    60: "#D69E2E",
    70: "#B7791F",
    80: "#975A16",
    90: "#744210",
  },
  red: {
    10: "#FFF5F5",
    20: "#FED7D7",
    30: "#FEB2B2",
    40: "#FC8181",
    50: "#F56565",
    60: "#E53E3E",
    70: "#C53030",
    80: "#9B2C2C",
    90: "#742A2A",
  },
  indigo: {
    10: "#EBF4FF",
    20: "#C3DAFE",
    30: "#A3BFFA",
    40: "#7F9CF5",
    50: "#667EEA",
    60: "#5A67D8",
    70: "#4C51BF",
    80: "#434190",
    90: "#3C366B",
  },
  purple: {
    10: "#FAF5FF",
    20: "#E9D8FD",
    30: "#D6BCFA",
    40: "#B794F4",
    50: "#9F7AEA",
    60: "#805AD5",
    70: "#6B46C1",
    80: "#553C9A",
    90: "#553C9A",
  },
  pink: {
    10: "#FFF5F7",
    20: "#FED7E2",
    30: "#FBB6CE",
    40: "#F687B3",
    50: "#ED64A6",
    60: "#D53F8C",
    70: "#B83280",
    80: "#97266D",
    90: "#702459",
  },
};

const fonts = {
	...chakraTheme.fonts,
	body: "'Nunito', sans-serif",
	heading: "'Nunito', sans-serif",
	monospace: "'Nunito', sans-serif",
};

const spacing = {
  space : {
    0: "1px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.7rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "3rem",
    12: "3.5rem",
    13: "4rem",
    14: "5rem",
    15: "6rem",
    16: "7rem",
    17: "8rem",
    18: "9rem",
    19: "10rem",
    20: "11rem",
    21: "12rem",
    22: "13rem",
    23: "14rem",
    24: "15rem",
    25: "16rem",
    26: "18rem",
    27: "20rem",
    28: "24rem",
  }
}

const radius = {
  0: "0rem",
  2: "0.125rem",
  3: "0.25rem",
  4: "0.375rem",
  5: "0.5rem",
  6: "0.75rem",
  7: "1rem",
  8: "1.5rem",
  9: "9999px",
}

const fontSizes = {
  xs: "0.625rem",
  sm: "0.75rem",
  md: "0.875",
  lg: "1rem",
  xl: "1.125rem",
  "2xl": "1.25rem",
  "3xl": "1.375rem",
  "4xl": "1.5rem",
  "5xl": "1.75rem",
  "6xl": "1.875rem",
  "7xl": "2.125rem",
  "8xl": "2.25rem",
  "9xl": "3rem",
  "10xl": "3.75rem",
}

const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
});

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};

const components = {
  Form: {
    variants: {
      floating: {
        container: {
          _focusWithin: {
            label: {
              ...activeLabelStyles
            }
          },
          "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
            ...activeLabelStyles
          },
          label: {
            top: 0,
            left: 0,
            zIndex: 2,
            position: "absolute",
            backgroundColor: "white",
            pointerEvents: "none",
            mx: 3,
            px: 1,
            my: 2,
            transformOrigin: "left top",
            fontSize: "16px"
          },
          input : {
            borderRadius: "8px",
          },
          ".chakra-form__helper-text": {
            marginTop: "4px",
          }
        }
      }
    }
  },
  Button: {
    sizes: {
      xs: {
        fontSize: "10px",
        fontWeight: "semibold",
      },
      sm: {
        fontSize: "12px",
        fontWeight: "semibold",
      },
      md: {
        fontSize: "14px",
        fontWeight: "semibold",
      },
      lg: {
        fontSize: "16px",
        fontWeight: "semibold",
      },
    },
    variants: {
      primary : {
        borderRadius: "14px",
        color: "white",
        bg: "primary.50",
        _hover: {
          bg: "primary.60"
        }
      },
      'primary-light': {
        borderRadius: "14px",
        color: "primary.60",
        bg: "primary.10",
        _hover: {
          bg: "primary.20"
        }
      },
      secondary: {
        borderRadius: "14px",
        color: "white",
        bg: "secondary.50",
        _hover: {
          bg: "secondary.60"
        }
      },
      gray: {
        borderRadius: "14px",
        color: "gray.60",
        bg: "gray.20",
        _hover: {
          bg: "gray.30"
        }
      },
      'gray-light': {
        borderRadius: "14px",
        color: "gray.60",
        bg: "gray.10",
        _hover: {
          bg: "gray.20"
        }
      },
      success: {
        borderRadius: "14px",
        color: "white",
        bg: "green.50",
        _hover: {
          bg: "green.60"
        }
      },
      'danger-light': {
        borderRadius: "14px",
        color: "red.60",
        bg: "red.10",
        _hover: {
          bg: "red.20"
        }
      },
    }
  }
}

const overrides = {
	...chakraTheme,
  config,
  breakpoints,
	colors,
	fonts,
	spacing,
  radius,
  fontSizes,
  components,
};

const themes = extendTheme(overrides);

export default themes;
