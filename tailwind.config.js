module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        bungee : ['Bungee'],
        prStart : ['Press Start 2P'],
        creepster : ['Creepster'],
        FtG: ['Fredericka the Great'],
      },
      colors: {
        'black' : '#000000',
        'dark-green' : '#3e4444',
        'white' : '#ffffff',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'red' : '#DC2626',
        'dirty-white' : '#e9e9d2',
        'montBblue' : '#009aae',
      },
      backgroundImage : {
        'glass' : "url('/mediaFile/magn-glass.png')",
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
