module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#FFFEFB',
      font: 'hsl(0, 0%, 30%)',
      primary: 'red',
      secondary: 'blue',
      black: '#0e0f11',
      white: '#FFFFFF',
      gray: '#DCE4EF'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Abril Fatface', 'Sans-serif']
    },
    extend: {
      backgroundImage: {}
    }
  }
}
