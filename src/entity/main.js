require("@babel/polyfill");

const Main = function () {
  // This is a test
  console.log(' This is a test v0.0.10');  
};

window.WizSvgPainter = Main;
Main.version = new Date().valueOf();

module.exports = Main;

