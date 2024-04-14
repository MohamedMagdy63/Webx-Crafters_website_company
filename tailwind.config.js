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
    'src/Components/Services.jsx',
    'src/Pages/About.jsx',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'click':'rgb(255 255 255 / 60%)'
      },
      colors:{
        "mainColor": "#3B82F6",
        "subMainColor": "#10DC15"
      },
      fontFamily:{
        mainFont: ["Bitter", "serif"]
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    require("tailwindcss-text-fill"),
    require("tailwindcss-text-fill-stroke"),
  ],
}

