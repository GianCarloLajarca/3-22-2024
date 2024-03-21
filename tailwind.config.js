module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    // fontFamily: {
    //   'raleway': 'Raleway, Arial, sans-serif',
    // }
    extend: {
      backgroundImage: {
        insightBanner: "url(/dist/img/banner-img.png)",
        projects1: "url(/dist/img/projects1.png)",
        projects2: "url(/dist/img/projects2.png)",
        projects3: "url(/dist/img/projects3.png)",
      },
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        clrGray: "#f2f2f2",
        clrDarkgray: "#6b7280",
        clrLightgreen: "#28941e",
        clrDarkgreen: "#008542",
        clrYellow: "#daa625",
        clrBlue: "#3b5897",
      }
    },
  },
  plugins: [],
}
