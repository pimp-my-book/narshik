module.exports = {
  theme: {
    colors: {
      'transparent': 'transparent',

      'black': '#22292f',
      'grey-darker': '#434343',
      'grey-dark': '#52524E',
      'grey': '#9A9B94',
      'grey-light': '#D4D6C8',
      'grey-lighter': '#E9E9E5',
      'white': '#ffffff',
      'white-lighter': '#FCF5EE',

      'red-dark': '#E71D36',
      'red': '#FF4545',
      'red-light': '#FF9867',
      'red-lighter': '#FFBF87',
      'red-lightest': '#FFEDB2',

      'orange-darker': '#FF941F',
      'orange-dark': '#FFA401',
      'orange': '#FFB300',
      'orange-light': '#FFBF00',
      'orange-lighter': '#FFC516',

      'yellow-darkest': '#453411',
      'yellow-darker': '#684f1d',
      'yellow-dark': '#f2d024',
      'yellow': '#ffed4a',
      'yellow-light': '#fff382',
      'yellow-lighter': '#fff9c2',
      'yellow-lightest': '#fcfbeb',


      'green-darker': '#08160A',
      'green-dark': '#247A2E',
      'green': '#4ECA5D',
      'green-light': '#A0FFAB',
      'green-lighter': '#D7FFF1',
      'green-gradient': 'linear-gradient(179.9deg, #A0FFAB 23.23%, #94B5E3 99.68%)',


      'teal-darkest': '#0d3331',
      'teal-darker': '#20504f',
      'teal-dark': '#38a89d',
      'teal': '#4dc0b5',
      'teal-light': '#64d5ca',
      'teal-lighter': '#a0f0ed',
      'teal-lightest': '#e8fffe',

      'blue-darkest': '#12283a',
      'blue-darker': '#1c3d5a',
      'blue-dark': '#2779bd',
      'blue': '#3490dc',
      'blue-light': '#6cb2eb',
      'blue-lighter': '#bcdefa',
      'blue-lightest': '#eff8ff',

      'indigo-darkest': '#191e38',
      'indigo-darker': '#2f365f',
      'indigo-dark': '#5661b3',
      'indigo': '#6574cd',
      'indigo-light': '#7886d7',
      'indigo-lighter': '#b2b7ff',
      'indigo-lightest': '#e6e8ff',

      'purple-darkest': '#21183c',
      'purple-darker': '#382b5f',
      'purple-dark': '#794acf',
      'purple': '#9561e2',
      'purple-light': '#a779e9',
      'purple-lighter': '#d6bbfc',
      'purple-lightest': '#f3ebff',

      'pink-darkest': '#451225',
      'pink-darker': '#6f213f',
      'pink-dark': '#eb5286',
      'pink': '#f66d9b',
      'pink-light': '#fa7ea8',
      'pink-lighter': '#ffbbca',
      'pink-lightest': '#ffebef',


    },
    screens: {
      's': '320px',
      's-max': [{ 'max': '320px' }],
      'sl': '375px',
      'sm': '575px',
      'sm-600': '600px',
      'sm-land': [{ 'min': '667px' }],
      'md': '768px',
      'lg': '992px',
      'x': '1024px',
      'lapie': [{ 'min': '1280px', 'max': '1366px' }],
      'xl': [{ 'min': '1500px' }],
    },
    fontFamily: {
      'display': ['Paytone One'],
      'body': ['Poppins']
    },
    fontSize: {
      'xs': '.75rem',     // 12px
      'sm': '.875rem',    // 14px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',
      '7xl': '5rem'     // 48px
    },
    fontWeight: {
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },
    leading: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2,
    },
    textColors: theme => theme('colors'),
    backgroundColors: theme => theme('colors'),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },
    borderWidths: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    borderColors: global.Object.assign({ default: theme => theme(colors['grey-light']) }, theme => theme('colors')),
    borderRadius: {
      'none': '0',
      'px': '5px',
      'sm': '.125rem',
      "default": '.25rem',
      'lg': '25px',
      'full': '9999px',
      'header-border': '0px 0px 220px 220px',
      'header-border-sm': '0px 0px 120px 120px'
    },
    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw',
      '300': '300px',
      '320': '320px',
      '350': '350px',
      '400': '400px',
      '500': '500px',
      'img': '600px',
      '700': '700px',
      '750': '750px',
      '800': '800px'
    },
    height: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '86': '20rem',
      'full': '100%',
      'screen': '100vh',
      'img': '500px',
      '90': '90px',
      '150': '150px',
      '200': '200px',
      '250': '250px',
      '350': '350px',
      '400': '400px',
      '450': '450px',
      '490': '490px',
      '500': '500px',
      '550': '550px',
      '600': '600px',
      '650': '650px',
      '750': '750px',
      '800': '800px'
    },
    padding: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '38': '16rem'
    },
    margin: {
      'auto': 'auto',
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
    },
    shadows: {
      default: '0px 4px 4px  rgba(0,0,0,0.25)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'lg-card': '15px -10px 4px rgba(0,0,0,0.25)',
      'none': 'none',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },

  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  plugins: []
}
