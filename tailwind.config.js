/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }



  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'banner-1': "url('image/banner-1.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      }
    }
  }