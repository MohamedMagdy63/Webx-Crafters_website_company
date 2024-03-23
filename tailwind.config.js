/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/Components/Navbar.jsx',
    'src/Components/MainSlide.jsx',
    'src/Components/SlideShow.jsx',
    'src/Components/AnalysisBox.jsx',
    'src/Components/Demos.jsx',
    'src/Components/InnerPages.jsx',
    'src/Components/OurClients.jsx',
    'src/Components/Footer.jsx',
    'src/Pages/About.jsx',
    'src/Pages/Services.jsx',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'click':'rgb(255 255 255 / 60%)'
      }
    },
  },
  plugins: [],
}

