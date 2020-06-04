require("@babel/polyfill");

const Main = function () {
  // This is a test
  console.log(' This is a test ');  
};

window.WizSvgPainter = Main;
Main.version = new Date().valueOf();

module.exports = Main;

