//default values
document.getElementById("home").style.display = "block";
document.getElementById("calculator").style.display = "none";
document.getElementById("formulas").style.display = "none";
document.getElementById("periodic-table").style.display = "none";
document.getElementById("questions").style.display = "none";
document.getElementById("about-me").style.display = "none";


document.querySelector('.rectangle-section').style.display = "none";
document.querySelector('.circle-section').style.display = "none";
document.querySelector('.trapezoid-section').style.display = "none";
document.querySelector('.rectangularprism-section').style.display = "none";
document.querySelector('.cylinder-section').style.display = "none";
document.querySelector('.cone-section').style.display = "none";
document.querySelector('.sphere-section').style.display = "none";
document.querySelector('.quadratics-section').style.display = "none";
document.querySelector('.ArchConst-section').style.display = "none";
document.querySelector('.EulerConst-section').style.display = "none";
document.querySelector('.GoldenRatio-section').style.display = "none";
document.querySelector('.AvogadroConst-section').style.display = "none";
document.querySelector('.length-section').style.display = "none";
document.querySelector('.mass-section').style.display = "none";
document.querySelector('.volume-section').style.display = "none";



// functions
function homeClick() {
  document.getElementById("home").style.display = "block";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("formulas").style.display = "none";
  document.getElementById("periodic-table").style.display = "none";
  document.getElementById("questions").style.display = "none";
  document.getElementById("about-me").style.display = "none";
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";


  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function calculatorClick() {
  document.getElementById("home").style.display = "none";
  document.getElementById("calculator").style.display = "block";
  document.getElementById("formulas").style.display = "none";
  document.getElementById("periodic-table").style.display = "none";
  document.getElementById("questions").style.display = "none";
  document.getElementById("about-me").style.display = "none";
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";




  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function formulasClick() {
  document.getElementById("home").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("formulas").style.display = "block";
  document.getElementById("periodic-table").style.display = "none";
  document.getElementById("questions").style.display = "none";
  document.getElementById("about-me").style.display = "none";
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function periodicTableClick() {
  document.getElementById("home").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("formulas").style.display = "none";
  document.getElementById("periodic-table").style.display = "block";
  document.getElementById("questions").style.display = "none";
  document.getElementById("about-me").style.display = "none";
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function aboutMeClick() {
  document.getElementById("home").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("formulas").style.display = "none";
  document.getElementById("periodic-table").style.display = "none";
  document.getElementById("questions").style.display = "none";
  document.getElementById("about-me").style.display = "block";
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function questionsClick() {
  document.getElementById("home").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("formulas").style.display = "none";
  document.getElementById("periodic-table").style.display = "none";
  document.getElementById("questions").style.display = "block";
  document.getElementById("about-me").style.display = "none";
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function rectangleClick() {

  document.querySelector('.rectangle-section').style.display = "block";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";

}

function circleClick() {

  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "block";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";


  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";

}

function trapezoidClick() {

  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "block";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";


  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";

}

function rectangularPrismClick() {

  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "block";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";


  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";

}

function ArchConstClick() {
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "block";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function EulerConstClick() {
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "block";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function GoldenRatioClick() {
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "block";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function AvogadroConstClick() {
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "block";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function lengthClick() {
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "block";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";








  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function massClick() {
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "block";
  document.querySelector('.volume-section').style.display = "none";






  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function volumeClick() {
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "block";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";




  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}

function quadraticsClick() {
  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "block";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";





  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";
}




function cylinderClick() {

  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "block";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";



  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";

  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";

}

function coneClick() {

  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "block";
  document.querySelector('.sphere-section').style.display = "none";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";



  sphereRadius = 0;
  document.querySelector('.sphere-radius').value = "";
  document.querySelector('.sphere-volume').value = "";
  document.querySelector('.sphere-surfaceArea').value = "";

}

function sphereClick() {

  document.querySelector('.rectangle-section').style.display = "none";
  document.querySelector('.circle-section').style.display = "none";
  document.querySelector('.trapezoid-section').style.display = "none";
  document.querySelector('.rectangularprism-section').style.display = "none";
  document.querySelector('.cylinder-section').style.display = "none";
  document.querySelector('.cone-section').style.display = "none";
  document.querySelector('.sphere-section').style.display = "block";
  document.querySelector('.ArchConst-section').style.display = "none";
  document.querySelector('.EulerConst-section').style.display = "none";
  document.querySelector('.GoldenRatio-section').style.display = "none";
  document.querySelector('.AvogadroConst-section').style.display = "none";
  document.querySelector('.quadratics-section').style.display = "none";
  document.querySelector('.length-section').style.display = "none";
  document.querySelector('.mass-section').style.display = "none";
  document.querySelector('.volume-section').style.display = "none";



  ounce = 0;
  pound = 0;
  gram = 0;
  ton = 0;
  kilogram = 0;
  mass = 0;
  document.querySelector('.mass-input').value = "";
  document.querySelector('.mass-output').value = "";


  gallon = 0;
  quart = 0;
  pint = 0;
  cup = 0;
  liqounce = 0;
  tbspoon = 0;
  tspoon = 0;
  cmeter = 0;
  liter = 0;
  mliter = 0;
  cfoot = 0;
  cinch = 0;
  volume = 0;
  document.querySelector('.volume-input').value = "";
  document.querySelector('.volume-output').value = "";


  in1 = 0;
  feet = 0;
  yards = 0;
  miles = 0;
  centimeter = 0;
  meter = 0;
  kilometer = 0;
  length = 0;
  document.querySelector('.length-input').value = "";
  document.querySelector('.length-output').value = "";





  calculateString = "";
  document.querySelector('.screen').value = "";


  aVal = 0;
  bVal = 0;
  cVal = 0;
  document.querySelector('.quadraticA').value = "";
  document.querySelector('.quadraticB').value = "";
  document.querySelector('.quadraticC').value = "";
  document.querySelector('.quadraticAnswer').value = "";



  length = 0;
  width = 0;
  document.querySelector('.rectangle-length').value = "";
  document.querySelector('.rectangle-width').value = "";
  document.querySelector('.rectangle-area').value = "";
  document.querySelector('.rectangle-perimeter').value = "";

  radius = 0;
  document.querySelector('.circle-radius').value = "";
  document.querySelector('.circle-area').value = "";
  document.querySelector('.circle-circumference').value = "";

  b1 = 0;
  b2 = 0;
  height = 0;
  document.querySelector('.trapezoid-b1').value = "";
  document.querySelector('.trapezoid-b2').value = "";
  document.querySelector('.trapezoid-height').value = "";
  document.querySelector('.trapezoid-area').value = "";

  prismLength = 0;
  prismWidth = 0;
  prismHeight = 0;
  document.querySelector('.rectangleprism-width').value = "";
  document.querySelector('.rectangleprism-length').value = "";
  document.querySelector('.rectangleprism-height').value = "";
  document.querySelector('.rectangleprism-volume').value = "";
  document.querySelector('.rectangleprism-surfaceArea').value = "";

  cylinderRadius = 0;
  cylinderHeight = 0;
  document.querySelector('.cylinder-height').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-radius').value = "";
  document.querySelector('.cylinder-height').value = "";

  coneRadius = 0;
  coneHeight = 0;
  document.querySelector('.cone-height').value = "";
  document.querySelector('.cone-radius').value = "";
  document.querySelector('.cone-volume').value = "";
  document.querySelector('.cone-surfaceArea').value = "";


}



function rectangleCalc() {
  var length = document.querySelector('.rectangle-length').value;
  var width = document.querySelector('.rectangle-width').value;
  if ((length > 0 || length < 0) && (width > 0 || width < 0)) {

    document.querySelector('.rectangle-area').value = (length * width);
    document.querySelector('.rectangle-perimeter').value = (2 * length + 2 * width);
  } else {
    alert("Enter all values please.");
  }
}

function circleCalc() {
  var radius = document.querySelector('.circle-radius').value;
  if (radius > 0 || radius < 0) {

    document.querySelector('.circle-area').value = (3.14 * (Math.pow(radius, 2)));
    document.querySelector('.circle-circumference').value = (3.141 * 2 * radius);
  } else {
    alert("Enter all values please.");
  }
}

function trapezoidCalc() {
  var b1 = document.querySelector('.trapezoid-b1').value;
  var b2 = document.querySelector('.trapezoid-b2').value;
  var height = document.querySelector('.trapezoid-height').value;
  if ((b1 > 0 || b1 < 0) && (b2 > 0 || b2 < 0) && (height > 0 || height < 0)) {
    document.querySelector('.trapezoid-area').value = 0.5 * (+b1 + +b2) * height;
  } else {
    alert("Enter all values please.");
  }
}

function rectangleprismCalc() {
  var prismLength = document.querySelector('.rectangleprism-length').value;
  var prismWidth = document.querySelector('.rectangleprism-width').value;
  var prismHeight = document.querySelector('.rectangleprism-height').value;

  if ((prismLength > 0 || prismLength < 0) && (prismWidth > 0 || prismWidth < 0) && (prismHeight > 0 || prismHeight < 0)) {

    document.querySelector('.rectangleprism-volume').value = (prismLength * prismWidth * prismHeight);
    document.querySelector('.rectangleprism-surfaceArea').value = (2 * prismLength * prismWidth) + (2 * prismLength * prismHeight) + (2 * prismHeight * prismWidth);
  } else {
    alert("Enter all values please.");
  }
}

function cylinderCalc() {
  var cylinderRadius = document.querySelector('.cylinder-radius').value;
  var cylinderHeight = document.querySelector('.cylinder-height').value;

  if ((cylinderRadius > 0 || cylinderRadius < 0) && (cylinderHeight > 0 || cylinderHeight < 0)) {

    document.querySelector('.cylinder-volume').value = 3.141 * cylinderRadius * cylinderRadius * cylinderHeight;
    document.querySelector('.cylinder-surfaceArea').value = +2 * 3.141 * cylinderRadius * cylinderHeight + +2 * 3.141 * cylinderRadius * cylinderRadius;
  } else {
    alert("Enter all values please.");
  }
}


function coneCalc() {
  var coneRadius = document.querySelector('.cone-radius').value;
  var coneHeight = document.querySelector('.cone-height').value;

  if ((coneRadius > 0 || coneRadius < 0) && (coneHeight > 0 || coneHeight < 0)) {

    document.querySelector('.cone-volume').value = 3.141 * coneRadius * coneRadius * (coneHeight / 3);
    document.querySelector('.cone-surfaceArea').value = 3.141 * coneRadius * (+coneRadius + +Math.sqrt(+coneHeight * coneHeight + +coneRadius * coneRadius));
  } else {
    alert("Enter all values please.");
  }
}

function sphereCalc() {
  var sphereRadius = document.querySelector('.sphere-radius').value;
  if (sphereRadius > 0 || sphereRadius < 0) {

    document.querySelector('.sphere-volume').value = 4 * 3.141 * sphereRadius * sphereRadius;
    document.querySelector('.sphere-surfaceArea').value = (4 / 3) * 3.141 * sphereRadius * sphereRadius * sphereRadius;
  } else {
    alert("Enter all values please.");
  }
}



function lengthEnter() {

  var lengthSelect1 = document.querySelector('.length-select1');
  var lengthSelect2 = document.querySelector('.length-select2');
  var length = document.querySelector('.length-input').value;
  var lengthSelect1Choice = lengthSelect1.options[lengthSelect1.selectedIndex].value;
  var lengthSelect2Choice = lengthSelect2.options[lengthSelect2.selectedIndex].value;
  var in1 = 0;
  var feet = 0;
  var yards = 0;
  var miles = 0;
  var centimeter = 0;
  var meter = 0;
  var kilometer = 0;
  if (lengthSelect1Choice == 1) {
    in1 = in1 + (in1 * -1);
    feet = feet + (feet * -1);
    yards = yards + (yards * -1);
    miles = miles + (miles * -1);
    centimeter = centimeter + (centimeter * -1);
    meter = meter + (meter * -1);
    kilometer = kilometer + (kilometer * -1);
    in1 = length;
    feet = length / 12;
    yards = length / 36;
    miles = length / 63360;
    centimeter = 2.54 * length;
    meter = length / 39.27;
    kilometer = length / 39370;

  }
  if (lengthSelect1Choice == 2) {
    in1 = in1 + (in1 * -1);
    feet = feet + (feet * -1);
    yards = yards + (yards * -1);
    miles = miles + (miles * -1);
    centimeter = centimeter + (centimeter * -1);
    meter = meter + (meter * -1);
    kilometer = kilometer + (kilometer * -1);
    in1 = length * 12;
    feet = length;
    yards = length / 3;
    miles = length / 5280;
    centimeter = length * 30.48;
    meter = length / 3.281;
    kilomter = length / 3281;

  }
  if (lengthSelect1Choice == 3) {
    in1 = in1 + (in1 * -1);
    feet = feet + (feet * -1);
    yards = yards + (yards * -1);
    miles = miles + (miles * -1);
    centimeter = centimeter + (centimeter * -1);
    meter = meter + (meter * -1);
    kilometer = kilometer + (kilometer * -1);
    in1 = length * 36;
    feet = length * 3;
    yards = length;
    miles = length / 880;
    centimeter = length * 91.44;
    meter = length / 1.094;
    kilometer = length / 1094;


  }
  if (lengthSelect1Choice == 4) {
    in1 = in1 + (in1 * -1);
    feet = feet + (feet * -1);
    yards = yards + (yards * -1);
    miles = miles + (miles * -1);
    centimeter = centimeter + (centimeter * -1);
    meter = meter + (meter * -1);
    kilometer = kilometer + (kilometer * -1);
    in1 = length * 63360;
    feet = length * 5280;
    yards = length * 880;
    miles = length;
    centimeter = length * 160934;
    meter = length * 1609.34;
    kilometer = length * 1.60934;
  }
  if (lengthSelect1Choice == 5) {
    in1 = in1 + (in1 * -1);
    feet = feet + (feet * -1);
    yards = yards + (yards * -1);
    miles = miles + (miles * -1);
    centimeter = centimeter + (centimeter * -1);
    meter = meter + (meter * -1);
    kilometer = kilometer + (kilometer * -1);
    in1 = length / 2.54;
    feet = length / 30.84;
    yards = length / 91.44;
    miles = length / 160934;
    centimeter = length;
    meter = length / 100;
    kilometer = length / 100000;
  }
  if (lengthSelect1Choice == 6) {
    in1 = in1 + (in1 * -1);
    feet = feet + (feet * -1);
    yards = yards + (yards * -1);
    miles = miles + (miles * -1);
    centimeter = centimeter + (centimeter * -1);
    meter = meter + (meter * -1);
    kilometer = kilometer + (kilometer * -1);
    in1 = length * 39.37;
    feet = length * 3.281;
    yards = length * 1.094;
    miles = length / 1609;
    centimeter = length * 100;
    meter = length;
    kilometer = length / 1000;
  }
  if (lengthSelect1Choice == 7) {
    in1 = in1 + (in1 * -1);
    feet = feet + (feet * -1);
    yards = yards + (yards * -1);
    miles = miles + (miles * -1);
    centimeter = centimeter + (centimeter * -1);
    meter = meter + (meter * -1);
    kilometer = kilometer + (kilometer * -1);
    in1 = length * 39370;
    feet = length * 3281;
    yards = length * 1094;
    miles = length / 1.609;
    centimeter = length * 100000;
    meter = length * 1000;
    kilometer = length;
  }

  if (lengthSelect2Choice == 1) {
    document.querySelector('.length-output').value = in1;
  }

  if (lengthSelect2Choice == 2) {
    document.querySelector('.length-output').value = feet;
  }

  if (lengthSelect2Choice == 3) {
    document.querySelector('.length-output').value = yards;
  }

  if (lengthSelect2Choice == 4) {
    document.querySelector('.length-output').value = miles;
  }
  if (lengthSelect2Choice == 5) {
    document.querySelector('.length-output').value = centimeter;
  }
  if (lengthSelect2Choice == 6) {
    document.querySelector('.length-output').value = meter;
  }
  if (lengthSelect2Choice == 7) {
    document.querySelector('.length-output').value = kilometer;
  }
}









function massEnter() {
  var massSelect1 = document.querySelector('.mass-select1');
  var massSelect2 = document.querySelector('.mass-select2');
  var mass = document.querySelector('.mass-input').value;
  var massSelect1Choice = massSelect1.options[massSelect1.selectedIndex].value;
  var massSelect2Choice = massSelect2.options[massSelect2.selectedIndex].value;
  var ounce = 0;
  var pound = 0;
  var gram = 0;
  var ton = 0;
  var kilogram = 0;


  if (massSelect1Choice == 1) {
    ounce = ounce + (ounce * -1);
    pound = pound + (pound * -1);
    gram = gram + (gram * -1);
    ton = ton + (ton * -1);
    kilogram = kilogram + (kilogram * -1);
    ounce = mass;
    pound = mass / 16;
    gram = mass * 28.35;
    ton = mass / 32000;
    kilogram = mass / 35.274;
  }

  if (massSelect1Choice == 2) {
    ounce = ounce + (ounce * -1);
    pound = pound + (pound * -1);
    gram = gram + (gram * -1);
    ton = ton + (ton * -1);
    kilogram = kilogram + (kilogram * -1);
    ounce = mass * 16;
    pound = mass;
    gram = mass * 454;
    ton = mass / 2000;
    kilogram = mass / 2.205;
  }

  if (massSelect1Choice == 3) {
    ounce = ounce + (ounce * -1);
    pound = pound + (pound * -1);
    gram = gram + (gram * -1);
    ton = ton + (ton * -1);
    kilogram = kilogram + (kilogram * -1);
    ounce = mass / 28.35;
    pound = mass / 454;
    gram = mass;
    ton = mass / 907185;
    kilogram = mass / 1000;
  }

  if (massSelect1Choice == 4) {
    ounce = ounce + (ounce * -1);
    pound = pound + (pound * -1);
    gram = gram + (gram * -1);
    ton = ton + (ton * -1);
    kilogram = kilogram + (kilogram * -1);
    ounce = mass * 32000;
    pound = mass * 2000;
    gram = mass * 907185;
    ton = mass;
    kilogram = mass * 907;
  }

  if (massSelect1Choice == 5) {
    ounce = ounce + (ounce * -1);
    pound = pound + (pound * -1);
    gram = gram + (gram * -1);
    ton = ton + (ton * -1);
    kilogram = kilogram + (kilogram * -1);
    ounce = mass * 35.274;
    pound = mass * 2.205;
    gram = mass * 1000;
    ton = mass / 907;
    kilogram = mass;
  }

  if (massSelect2Choice == 1) {
    document.querySelector('.mass-output').value = ounce;
  }

  if (massSelect2Choice == 2) {
    document.querySelector('.mass-output').value = pound;
  }

  if (massSelect2Choice == 3) {
    document.querySelector('.mass-output').value = gram;
  }

  if (massSelect2Choice == 4) {
    document.querySelector('.mass-output').value = ton;
  }
  if (massSelect2Choice == 5) {
    document.querySelector('.mass-output').value = kilogram;
  }
}


function volumeEnter() {
  var volumeSelect1 = document.querySelector('.volume-select1');
  var volumeSelect2 = document.querySelector('.volume-select2');
  var volume = document.querySelector('.volume-input').value;
  var volumeSelect1Choice = volumeSelect1.options[volumeSelect1.selectedIndex].value;
  var volumeSelect2Choice = volumeSelect2.options[volumeSelect2.selectedIndex].value;
  var gallon = 0;
  var quart = 0;
  var pint = 0;
  var cup = 0;
  var liqounce = 0;
  var tbspoon = 0;
  var tspoon = 0;
  var cmeter = 0;
  var liter = 0;
  var mliter = 0;
  var cfoot = 0;
  var cinch = 0;

  if (volumeSelect1Choice == 1) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume;
    quart = volume * 4;
    pint = volume * 8;
    cup = volume * 15.773;
    liqounce = volume * 128;
    tbspoon = volume * 256;
    tspoon = volume * 768;
    cmeter = volume / 264;
    liter = volume * 3.785;
    mliter = volume * 3785;
    cfoot = volume / 7.481;
    cinch = volume * 231;
  }

  if (volumeSelect1Choice == 2) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 4;
    quart = volume;
    pint = volume * 2;
    cup = volume * 3.943;
    liqounce = volume * 32;
    tbspoon = volume * 64;
    tspoon = volume * 192;
    cmeter = volume / 1057;
    liter = volume / 1.057;
    mliter = volume * 946;
    cfoot = volume / 29.922;
    cinch = volume * 57.75;
  }

  if (volumeSelect1Choice == 3) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 8;
    quart = volume / 2;
    pint = volume;
    cup = volume * 1.972;
    liqounce = volume * 16;
    tbspoon = volume * 32;
    tspoon = volume * 96;
    cmeter = volume / 2113;
    liter = volume / 2.113;
    mliter = volume * 473;
    cfoot = volume / 59.844;
    cinch = volume * 28.875;
  }

  if (volumeSelect1Choice == 4) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 15.773;
    quart = volume / 3.943;
    pint = volume / 1.972;
    cup = volume;
    liqounce = volume * 8.115;
    tbspoon = volume * 16.231;
    tspoon = volume * 48.692;
    cmeter = volume / 4167;
    liter = volume / 4.167;
    mliter = volume * 4.167;
    cfoot = volume / 118;
    cinch = volume * 14.646;
  }

  if (volumeSelect1Choice == 5) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 128;
    quart = volume / 32;
    pint = volume / 16;
    cup = volume / 8.115;
    liqounce = volume;
    tbspoon = volume * 2;
    tspoon = volume * 6;
    cmeter = volume / 33814;
    liter = volume / 33.814;
    mliter = volume * 29.574;
    cfoot = volume / 958;
    cinch = volume * 1.805;
  }

  if (volumeSelect1Choice == 6) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 256;
    quart = volume / 64;
    pint = volume / 32;
    cup = volume / 16.231;
    liqounce = volume / 2;
    tbspoon = volume;
    tspoon = volume * 3;
    cmeter = volume / 67628;
    liter = volume / 67.628;
    mliter = volume * 14.787;
    cfoot = volume / 1915;
    cinch = volume / 1.108;
  }

  if (volumeSelect1Choice == 7) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 768;
    quart = volume / 192;
    pint = volume / 96;
    cup = volume / 48.692;
    liqounce = volume / 6;
    tbspoon = volume / 3;
    tspoon = volume;
    cmeter = volume / 202884;
    liter = volume / 203;
    mliter = volume * 4.929;
    cfoot = volume / 5745;
    cinch = volume / 3.325;
  }

  if (volumeSelect1Choice == 8) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume * 264;
    quart = volume * 1057;
    pint = volume * 2113;
    cup = volume * 4167;
    liqounce = volume * 33814;
    tbspoon = volume * 67628;
    tspoon = volume * 202884;
    cmeter = volume;
    liter = volume * 1000;
    mliter = volume * 1000000;
    cfoot = volume * 35.315;
    cinch = volume * 61024;
  }

  if (volumeSelect1Choice == 9) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 3.785;
    quart = volume * 1.057;
    pint = volume * 2.113;
    cup = volume * 4.167;
    liqounce = volume * 33.814;
    tbspoon = volume * 67.628;
    tspoon = volume * 203;
    cmeter = volume / 1000;
    liter = volume;
    mliter = volume * 1000;
    cfoot = volume / 28.317;
    cinch = volume * 61.024;
  }

  if (volumeSelect1Choice == 10) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 3785;
    quart = volume / 946;
    pint = volume / 473;
    cup = volume / 240;
    liqounce = volume / 29.574;
    tbspoon = volume / 14.787;
    tspoon = volume / 4.929;
    cmeter = volume / 1000000;
    liter = volume / 1000;
    mliter = volume;
    cfoot = volume / 28317;
    cinch = volume / 16.387;
  }

  if (volumeSelect1Choice == 11) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume * 7.481;
    quart = volume * 29.922;
    pint = volume * 59.844;
    cup = volume * 118;
    liqounce = volume * 958;
    tbspoon = volume * 1915;
    tspoon = volume * 5745;
    cmeter = volume / 35.315;
    liter = volume * 28.317;
    mliter = volume * 28317;
    cfoot = volume;
    cinch = volume * 1728;
  }

  if (volumeSelect1Choice == 12) {
    gallon = gallon + (gallon * -1);
    quart = quart + (quart * -1);
    pint = pint + (pint * -1);
    cup = cup + (cup * -1);
    liqounce = liqounce + (liqounce * -1);
    tbspoon = tbspoon + (tbspoon * -1);
    tspoon = tspoon + (tspoon * -1);
    cmeter = cmeter + (cmeter * -1);
    liter = liter + (liter * -1);
    mliter = mliter + (mliter * -1);
    cfoot = cfoot + (cfoot * -1);
    cinch = cinch + (cinch * -1);

    gallon = volume / 231;
    quart = volume / 57.75;
    pint = volume / 28.875;
    cup = volume / 14.646;
    liqounce = volume / 1.805;
    tbspoon = volume * 3.325;
    tspoon = volume * 5745;
    cmeter = volume / 61024;
    liter = volume / 61.024;
    mliter = volume * 16.387;
    cfoot = volume / 1728;
    cinch = volume;
  }


  if (volumeSelect2Choice == 1) {
    document.querySelector('.volume-output').value = gallon;
  }

  if (volumeSelect2Choice == 2) {
    document.querySelector('.volume-output').value = quart;
  }

  if (volumeSelect2Choice == 3) {
    document.querySelector('.volume-output').value = pint;
  }

  if (volumeSelect2Choice == 4) {
    document.querySelector('.volume-output').value = cup;
  }
  if (volumeSelect2Choice == 5) {
    document.querySelector('.volume-output').value = liqounce;
  }
  if (volumeSelect2Choice == 6) {
    document.querySelector('.volume-output').value = tbspoon;
  }
  if (volumeSelect2Choice == 7) {
    document.querySelector('.volume-output').value = tspoon;
  }
  if (volumeSelect2Choice == 8) {
    document.querySelector('.volume-output').value = cmeter;
  }
  if (volumeSelect2Choice == 9) {
    document.querySelector('.volume-output').value = liter;
  }
  if (volumeSelect2Choice == 10) {
    document.querySelector('.volume-output').value = mliter;
  }
  if (volumeSelect2Choice == 11) {
    document.querySelector('.volume-output').value = cfoot;
  }
  if (volumeSelect2Choice == 12) {
    document.querySelector('.volume-output').value = cinch;
  }

}





// periodic ellement hover here
function hoverPeriodicElement(periodicElementState) {
  if (periodicElementState == 1) {
    document.querySelector('.element-name').innerHTML = "Hydrogen";
    document.querySelector('.element-number').innerHTML = "1";
    document.querySelector('.element-abr').innerHTML = "H";
    document.querySelector('.element-mass').innerHTML = "1.007 g.mol-1";
    document.querySelector('.element-boil').innerHTML = "-252 °C";
    document.querySelector('.element-melt').innerHTML = "-259 °C";
  }

  if (periodicElementState == 2) {
    document.querySelector('.element-name').innerHTML = "Helium";
    document.querySelector('.element-number').innerHTML = "2";
    document.querySelector('.element-abr').innerHTML = "He";
    document.querySelector('.element-mass').innerHTML = "4.002 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-272°C";
    document.querySelector('.element-boil').innerHTML = "-269 °C";
  }

  if (periodicElementState == 3) {
    document.querySelector('.element-name').innerHTML = "Lithium";
    document.querySelector('.element-number').innerHTML = "3";
    document.querySelector('.element-abr').innerHTML = "Li";
    document.querySelector('.element-mass').innerHTML = "6.941 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "180 °C";
    document.querySelector('.element-boil').innerHTML = "1342 °C";
  }
  if (periodicElementState == 4) {
    document.querySelector('.element-name').innerHTML = "Beryllium";
    document.querySelector('.element-number').innerHTML = "4";
    document.querySelector('.element-abr').innerHTML = "Be";
    document.querySelector('.element-mass').innerHTML = "9.01 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1280 °C";
    document.querySelector('.element-boil').innerHTML = "2970 °C";
  }
  if (periodicElementState == 5) {
    document.querySelector('.element-name').innerHTML = "Boron";
    document.querySelector('.element-number').innerHTML = "5";
    document.querySelector('.element-abr').innerHTML = "B";
    document.querySelector('.element-mass').innerHTML = "10.81 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2076 °C";
    document.querySelector('.element-boil').innerHTML = "3927 °C";
  }
  if (periodicElementState == 6) {
    document.querySelector('.element-name').innerHTML = "Carbon";
    document.querySelector('.element-number').innerHTML = "6";
    document.querySelector('.element-abr').innerHTML = "C";
    document.querySelector('.element-mass').innerHTML = "12.011 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "3652 °C";
    document.querySelector('.element-boil').innerHTML = "4827 °C";
  }
  if (periodicElementState == 7) {
    document.querySelector('.element-name').innerHTML = "Nitrogen";
    document.querySelector('.element-number').innerHTML = "7";
    document.querySelector('.element-abr').innerHTML = "N";
    document.querySelector('.element-mass').innerHTML = "14.00 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-210 °C";
    document.querySelector('.element-boil').innerHTML = "-195 °C";
  }
  if (periodicElementState == 8) {
    document.querySelector('.element-name').innerHTML = "Oxygen";
    document.querySelector('.element-number').innerHTML = "8";
    document.querySelector('.element-abr').innerHTML = "O";
    document.querySelector('.element-mass').innerHTML = "15.999 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-219 °C";
    document.querySelector('.element-boil').innerHTML = "-183 °C";
  }
  if (periodicElementState == 9) {
    document.querySelector('.element-name').innerHTML = "Fluorine";
    document.querySelector('.element-number').innerHTML = "9";
    document.querySelector('.element-abr').innerHTML = "F";
    document.querySelector('.element-mass').innerHTML = "18.998 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-219 °C";
    document.querySelector('.element-boil').innerHTML = "-188 °C";
  }
  if (periodicElementState == 10) {
    document.querySelector('.element-name').innerHTML = "Neon";
    document.querySelector('.element-number').innerHTML = "10";
    document.querySelector('.element-abr').innerHTML = "Ne";
    document.querySelector('.element-mass').innerHTML = "20.179 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-249 °C";
    document.querySelector('.element-boil').innerHTML = "-246 °C";
  }
  if (periodicElementState == 11) {
    document.querySelector('.element-name').innerHTML = "Sodium";
    document.querySelector('.element-number').innerHTML = "11";
    document.querySelector('.element-abr').innerHTML = "Na";
    document.querySelector('.element-mass').innerHTML = "22.99 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "97 °C";
    document.querySelector('.element-boil').innerHTML = "883 °C";
  }
  if (periodicElementState == 12) {
    document.querySelector('.element-name').innerHTML = "Magnesium";
    document.querySelector('.element-number').innerHTML = "12";
    document.querySelector('.element-abr').innerHTML = "Mg";
    document.querySelector('.element-mass').innerHTML = "24.305 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "650 °C";
    document.querySelector('.element-boil').innerHTML = "1107 °C";
  }
  if (periodicElementState == 13) {
    document.querySelector('.element-name').innerHTML = "Aluminum";
    document.querySelector('.element-number').innerHTML = "13";
    document.querySelector('.element-abr').innerHTML = "Al";
    document.querySelector('.element-mass').innerHTML = "26.982 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "660 °C";
    document.querySelector('.element-boil').innerHTML = "2467 °C";
  }
  if (periodicElementState == 14) {
    document.querySelector('.element-name').innerHTML = "Silicon";
    document.querySelector('.element-number').innerHTML = "14";
    document.querySelector('.element-abr').innerHTML = "Si";
    document.querySelector('.element-mass').innerHTML = "28.085 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1410 °C";
    document.querySelector('.element-boil').innerHTML = "3265 °C";
  }
  if (periodicElementState == 15) {
    document.querySelector('.element-name').innerHTML = "Phosphorus";
    document.querySelector('.element-number').innerHTML = "15";
    document.querySelector('.element-abr').innerHTML = "P";
    document.querySelector('.element-mass').innerHTML = "3.974 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "44 °C";
    document.querySelector('.element-boil').innerHTML = "280 °C";
  }
  if (periodicElementState == 16) {
    document.querySelector('.element-name').innerHTML = "Sulfur";
    document.querySelector('.element-number').innerHTML = "16";
    document.querySelector('.element-abr').innerHTML = "S";
    document.querySelector('.element-mass').innerHTML = "32.06 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "113 °C";
    document.querySelector('.element-boil').innerHTML = "445 °C";
  }
  if (periodicElementState == 17) {
    document.querySelector('.element-name').innerHTML = "Chlorine";
    document.querySelector('.element-number').innerHTML = "17";
    document.querySelector('.element-abr').innerHTML = "Cl";
    document.querySelector('.element-mass').innerHTML = "35.453 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-101 °C";
    document.querySelector('.element-boil').innerHTML = "-34 °C";
  }
  if (periodicElementState == 18) {
    document.querySelector('.element-name').innerHTML = "Argon";
    document.querySelector('.element-number').innerHTML = "18";
    document.querySelector('.element-abr').innerHTML = "Ar";
    document.querySelector('.element-mass').innerHTML = "39.948 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-189 °C";
    document.querySelector('.element-boil').innerHTML = "-185 °C";
  }
  if (periodicElementState == 19) {
    document.querySelector('.element-name').innerHTML = "Potassium";
    document.querySelector('.element-number').innerHTML = "19";
    document.querySelector('.element-abr').innerHTML = "K";
    document.querySelector('.element-mass').innerHTML = "39.09 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "63 °C";
    document.querySelector('.element-boil').innerHTML = "760 °C";
  }
  if (periodicElementState == 20) {
    document.querySelector('.element-name').innerHTML = "Calcium";
    document.querySelector('.element-number').innerHTML = "20";
    document.querySelector('.element-abr').innerHTML = "Ca";
    document.querySelector('.element-mass').innerHTML = "40.08 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "840 °C";
    document.querySelector('.element-boil').innerHTML = "1484 °C";
  }
  if (periodicElementState == 21) {
    document.querySelector('.element-name').innerHTML = "Scandium";
    document.querySelector('.element-number').innerHTML = "21";
    document.querySelector('.element-abr').innerHTML = "Sc";
    document.querySelector('.element-mass').innerHTML = "44.955 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1541 °C";
    document.querySelector('.element-boil').innerHTML = "2836 °C";
  }
  if (periodicElementState == 23) {
    document.querySelector('.element-name').innerHTML = "Vanadium";
    document.querySelector('.element-number').innerHTML = "23";
    document.querySelector('.element-abr').innerHTML = "V";
    document.querySelector('.element-mass').innerHTML = "50.942 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1910 °C";
    document.querySelector('.element-boil').innerHTML = "3407 °C";
  }
  if (periodicElementState == 24) {
    document.querySelector('.element-name').innerHTML = "Chromium";
    document.querySelector('.element-number').innerHTML = "24";
    document.querySelector('.element-abr').innerHTML = "Cr";
    document.querySelector('.element-mass').innerHTML = "51.996 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1907 °C";
    document.querySelector('.element-boil').innerHTML = "2671 °C";
  }
  if (periodicElementState == 25) {
    document.querySelector('.element-name').innerHTML = "Manganese";
    document.querySelector('.element-number').innerHTML = "25";
    document.querySelector('.element-abr').innerHTML = "Mn";
    document.querySelector('.element-mass').innerHTML = "54.938 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1246 °C";
    document.querySelector('.element-boil').innerHTML = "2061 °C";
  }
  if (periodicElementState == 26) {
    document.querySelector('.element-name').innerHTML = "Iron";
    document.querySelector('.element-number').innerHTML = "26";
    document.querySelector('.element-abr').innerHTML = "Fe";
    document.querySelector('.element-mass').innerHTML = "55.845 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1538 °C";
    document.querySelector('.element-boil').innerHTML = "2861 °C";
  }
  if (periodicElementState == 27) {
    document.querySelector('.element-name').innerHTML = "Cobalt";
    document.querySelector('.element-number').innerHTML = "27";
    document.querySelector('.element-abr').innerHTML = "Co";
    document.querySelector('.element-mass').innerHTML = "58.933 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2723 °C";
    document.querySelector('.element-boil').innerHTML = "2927 °C";
  }
  if (periodicElementState == 28) {
    document.querySelector('.element-name').innerHTML = "Nickel";
    document.querySelector('.element-number').innerHTML = "28";
    document.querySelector('.element-abr').innerHTML = "Ni";
    document.querySelector('.element-mass').innerHTML = "58.693 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1455 °C";
    document.querySelector('.element-boil').innerHTML = "2730 °C";
  }
  if (periodicElementState == 29) {
    document.querySelector('.element-name').innerHTML = "Copper";
    document.querySelector('.element-number').innerHTML = "29";
    document.querySelector('.element-abr').innerHTML = "Cu";
    document.querySelector('.element-mass').innerHTML = "63.546 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1084 °C";
    document.querySelector('.element-boil').innerHTML = "2562 °C";
  }
  if (periodicElementState == 30) {
    document.querySelector('.element-name').innerHTML = "Zinc";
    document.querySelector('.element-number').innerHTML = "30";
    document.querySelector('.element-abr').innerHTML = "Zn";
    document.querySelector('.element-mass').innerHTML = "65.38 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "420 °C";
    document.querySelector('.element-boil').innerHTML = "907 °C";
  }
  if (periodicElementState == 31) {
    document.querySelector('.element-name').innerHTML = "Gallius";
    document.querySelector('.element-number').innerHTML = "31";
    document.querySelector('.element-abr').innerHTML = "Ga";
    document.querySelector('.element-mass').innerHTML = "69.723 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "29 °C";
    document.querySelector('.element-boil').innerHTML = "2400 °C";
  }
  if (periodicElementState == 32) {
    document.querySelector('.element-name').innerHTML = "Germanium";
    document.querySelector('.element-number').innerHTML = "32";
    document.querySelector('.element-abr').innerHTML = "Ge";
    document.querySelector('.element-mass').innerHTML = "72.630 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "938 °C";
    document.querySelector('.element-boil').innerHTML = "2833 °C";
  }
  if (periodicElementState == 33) {
    document.querySelector('.element-name').innerHTML = "Arsenic";
    document.querySelector('.element-number').innerHTML = "33";
    document.querySelector('.element-abr').innerHTML = "As";
    document.querySelector('.element-mass').innerHTML = "74.922 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "817 °C";
    document.querySelector('.element-boil').innerHTML = "614 °C";
  }
  if (periodicElementState == 34) {
    document.querySelector('.element-name').innerHTML = "Selenium";
    document.querySelector('.element-number').innerHTML = "34";
    document.querySelector('.element-abr').innerHTML = "Se";
    document.querySelector('.element-mass').innerHTML = "78.971 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "221 °C";
    document.querySelector('.element-boil').innerHTML = "685 °C";
  }
  if (periodicElementState == 35) {
    document.querySelector('.element-name').innerHTML = "Bromine";
    document.querySelector('.element-number').innerHTML = "35";
    document.querySelector('.element-abr').innerHTML = "Br";
    document.querySelector('.element-mass').innerHTML = "79.904 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-7 °C";
    document.querySelector('.element-boil').innerHTML = "59 °C";
  }

  if (periodicElementState == 36) {
    document.querySelector('.element-name').innerHTML = "Krypton";
    document.querySelector('.element-number').innerHTML = "36";
    document.querySelector('.element-abr').innerHTML = "Kr";
    document.querySelector('.element-mass').innerHTML = "83.798 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-157 °C";
    document.querySelector('.element-boil').innerHTML = "-153 °C";
  }
  if (periodicElementState == 37) {
    document.querySelector('.element-name').innerHTML = "Rubidium";
    document.querySelector('.element-number').innerHTML = "37";
    document.querySelector('.element-abr').innerHTML = "Rb";
    document.querySelector('.element-mass').innerHTML = "85.468 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "39 °C";
    document.querySelector('.element-boil').innerHTML = "688 °C";
  }
  if (periodicElementState == 38) {
    document.querySelector('.element-name').innerHTML = "Strontium";
    document.querySelector('.element-number').innerHTML = "38";
    document.querySelector('.element-abr').innerHTML = "Sr";
    document.querySelector('.element-mass').innerHTML = "87.62 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "777 °C";
    document.querySelector('.element-boil').innerHTML = "1377 °C";
  }
  if (periodicElementState == 39) {
    document.querySelector('.element-name').innerHTML = "Yttrium";
    document.querySelector('.element-number').innerHTML = "39";
    document.querySelector('.element-abr').innerHTML = "Y";
    document.querySelector('.element-mass').innerHTML = "88.906 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1526 °C";
    document.querySelector('.element-boil').innerHTML = "2930 °C";
  }
  if (periodicElementState == 40) {
    document.querySelector('.element-name').innerHTML = "Zirconium";
    document.querySelector('.element-number').innerHTML = "40";
    document.querySelector('.element-abr').innerHTML = "Zr";
    document.querySelector('.element-mass').innerHTML = "91.224 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1855 °C";
    document.querySelector('.element-boil').innerHTML = "4377 °C";
  }
  if (periodicElementState == 41) {
    document.querySelector('.element-name').innerHTML = "Niobium";
    document.querySelector('.element-number').innerHTML = "41";
    document.querySelector('.element-abr').innerHTML = "Nb";
    document.querySelector('.element-mass').innerHTML = "92.906 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2477 °C";
    document.querySelector('.element-boil').innerHTML = "4744 °C";
  }
  if (periodicElementState == 42) {
    document.querySelector('.element-name').innerHTML = "Molybdenum";
    document.querySelector('.element-number').innerHTML = "42";
    document.querySelector('.element-abr').innerHTML = "Mo";
    document.querySelector('.element-mass').innerHTML = "95.95 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2623 °C";
    document.querySelector('.element-boil').innerHTML = "4693 °C";
  }
  if (periodicElementState == 43) {
    document.querySelector('.element-name').innerHTML = "Technetium";
    document.querySelector('.element-number').innerHTML = "43";
    document.querySelector('.element-abr').innerHTML = "Tc";
    document.querySelector('.element-mass').innerHTML = "98 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2157 °C";
    document.querySelector('.element-boil').innerHTML = "4265 °C";
  }
  if (periodicElementState == 44) {
    document.querySelector('.element-name').innerHTML = "Ruthenium";
    document.querySelector('.element-number').innerHTML = "44";
    document.querySelector('.element-abr').innerHTML = "Ru";
    document.querySelector('.element-mass').innerHTML = "101.07 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2334 °C";
    document.querySelector('.element-boil').innerHTML = "4150 °C";
  }
  if (periodicElementState == 45) {
    document.querySelector('.element-name').innerHTML = "Rhodium";
    document.querySelector('.element-number').innerHTML = "45";
    document.querySelector('.element-abr').innerHTML = "Rh";
    document.querySelector('.element-mass').innerHTML = "102.91 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1964 °C";
    document.querySelector('.element-boil').innerHTML = "3695 °C";
  }
  if (periodicElementState == 46) {
    document.querySelector('.element-name').innerHTML = "Palladium";
    document.querySelector('.element-number').innerHTML = "46";
    document.querySelector('.element-abr').innerHTML = "Pd";
    document.querySelector('.element-mass').innerHTML = "106.42 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1554 °C";
    document.querySelector('.element-boil').innerHTML = "2963 °C";
  }
  if (periodicElementState == 47) {
    document.querySelector('.element-name').innerHTML = "Silver";
    document.querySelector('.element-number').innerHTML = "47";
    document.querySelector('.element-abr').innerHTML = "Ag";
    document.querySelector('.element-mass').innerHTML = "107.87 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "961 °C";
    document.querySelector('.element-boil').innerHTML = "2162 °C";
  }
  if (periodicElementState == 48) {
    document.querySelector('.element-name').innerHTML = "Cadmium";
    document.querySelector('.element-number').innerHTML = "48";
    document.querySelector('.element-abr').innerHTML = "Cd";
    document.querySelector('.element-mass').innerHTML = "112.41 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "321 °C";
    document.querySelector('.element-boil').innerHTML = "767 °C";
  }
  if (periodicElementState == 49) {
    document.querySelector('.element-name').innerHTML = "Indium";
    document.querySelector('.element-number').innerHTML = "49";
    document.querySelector('.element-abr').innerHTML = "In";
    document.querySelector('.element-mass').innerHTML = "114.82 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "156 °C";
    document.querySelector('.element-boil').innerHTML = "2072 °C";
  }
  if (periodicElementState == 50) {
    document.querySelector('.element-name').innerHTML = "Tin";
    document.querySelector('.element-number').innerHTML = "50";
    document.querySelector('.element-abr').innerHTML = "Sn";
    document.querySelector('.element-mass').innerHTML = "118.71 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "231 °C";
    document.querySelector('.element-boil').innerHTML = "2602 °C";
  }
  if (periodicElementState == 51) {
    document.querySelector('.element-name').innerHTML = "Antimony";
    document.querySelector('.element-number').innerHTML = "51";
    document.querySelector('.element-abr').innerHTML = "Sb";
    document.querySelector('.element-mass').innerHTML = "121.76 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "630 °C";
    document.querySelector('.element-boil').innerHTML = "1635 °C";
  }
  if (periodicElementState == 52) {
    document.querySelector('.element-name').innerHTML = "Tellurium";
    document.querySelector('.element-number').innerHTML = "52";
    document.querySelector('.element-abr').innerHTML = "Te";
    document.querySelector('.element-mass').innerHTML = "121.60 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "449 °C";
    document.querySelector('.element-boil').innerHTML = "988 °C";
  }
  if (periodicElementState == 53) {
    document.querySelector('.element-name').innerHTML = "Iodine";
    document.querySelector('.element-number').innerHTML = "53";
    document.querySelector('.element-abr').innerHTML = "I";
    document.querySelector('.element-mass').innerHTML = "126.90 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "113 °C";
    document.querySelector('.element-boil').innerHTML = "184 °C";
  }
  if (periodicElementState == 54) {
    document.querySelector('.element-name').innerHTML = "Xenon";
    document.querySelector('.element-number').innerHTML = "54";
    document.querySelector('.element-abr').innerHTML = "Xe";
    document.querySelector('.element-mass').innerHTML = "131.29 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-111 °C";
    document.querySelector('.element-boil').innerHTML = "-108 °C";
  }
  if (periodicElementState == 55) {
    document.querySelector('.element-name').innerHTML = "Caesium";
    document.querySelector('.element-number').innerHTML = "55";
    document.querySelector('.element-abr').innerHTML = "Xe";
    document.querySelector('.element-mass').innerHTML = "132.91 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "28 °C";
    document.querySelector('.element-boil').innerHTML = "671 °C";
  }
  if (periodicElementState == 56) {
    document.querySelector('.element-name').innerHTML = "Barium";
    document.querySelector('.element-number').innerHTML = "56";
    document.querySelector('.element-abr').innerHTML = "Ba";
    document.querySelector('.element-mass').innerHTML = "137.33 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "727 °C";
    document.querySelector('.element-boil').innerHTML = "1845 °C";
  }
  if (periodicElementState == 57) {
    document.querySelector('.element-name').innerHTML = "Lanthanum";
    document.querySelector('.element-number').innerHTML = "57";
    document.querySelector('.element-abr').innerHTML = "La";
    document.querySelector('.element-mass').innerHTML = "138.91 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "920 °C";
    document.querySelector('.element-boil').innerHTML = "3464 °C";
  }
  if (periodicElementState == 58) {
    document.querySelector('.element-name').innerHTML = "Cerium";
    document.querySelector('.element-number').innerHTML = "58";
    document.querySelector('.element-abr').innerHTML = "Ce";
    document.querySelector('.element-mass').innerHTML = "140.12 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "795 °C";
    document.querySelector('.element-boil').innerHTML = "3443 °C";
  }
  if (periodicElementState == 59) {
    document.querySelector('.element-name').innerHTML = "Praseodymium";
    document.querySelector('.element-number').innerHTML = "59";
    document.querySelector('.element-abr').innerHTML = "Pr";
    document.querySelector('.element-mass').innerHTML = "140.91 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "395 °C";
    document.querySelector('.element-boil').innerHTML = "3130 °C";
  }
  if (periodicElementState == 60) {
    document.querySelector('.element-name').innerHTML = "Neodymium";
    document.querySelector('.element-number').innerHTML = "60";
    document.querySelector('.element-abr').innerHTML = "Nd";
    document.querySelector('.element-mass').innerHTML = "144.24 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1034 °C";
    document.querySelector('.element-boil').innerHTML = "3074 °C";
  }
  if (periodicElementState == 61) {
    document.querySelector('.element-name').innerHTML = "Promethium";
    document.querySelector('.element-number').innerHTML = "61";
    document.querySelector('.element-abr').innerHTML = "Pm";
    document.querySelector('.element-mass').innerHTML = "145 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1042 °C";
    document.querySelector('.element-boil').innerHTML = "3000 °C";
  }
  if (periodicElementState == 62) {
    document.querySelector('.element-name').innerHTML = "Samarium";
    document.querySelector('.element-number').innerHTML = "62";
    document.querySelector('.element-abr').innerHTML = "Sm";
    document.querySelector('.element-mass').innerHTML = "150.36 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1072 °C";
    document.querySelector('.element-boil').innerHTML = "1900 °C";
  }
  if (periodicElementState == 63) {
    document.querySelector('.element-name').innerHTML = "Europium";
    document.querySelector('.element-number').innerHTML = "63";
    document.querySelector('.element-abr').innerHTML = "Eu";
    document.querySelector('.element-mass').innerHTML = "151.96 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "826 °C";
    document.querySelector('.element-boil').innerHTML = "1529 °C";
  }
  if (periodicElementState == 64) {
    document.querySelector('.element-name').innerHTML = "Gadolinium";
    document.querySelector('.element-number').innerHTML = "64";
    document.querySelector('.element-abr').innerHTML = "Gd";
    document.querySelector('.element-mass').innerHTML = "157.25 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1312 °C";
    document.querySelector('.element-boil').innerHTML = "3000 °C";
  }
  if (periodicElementState == 65) {
    document.querySelector('.element-name').innerHTML = "Terbium";
    document.querySelector('.element-number').innerHTML = "65";
    document.querySelector('.element-abr').innerHTML = "Tb";
    document.querySelector('.element-mass').innerHTML = "158.93 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1356 °C";
    document.querySelector('.element-boil').innerHTML = "3123 °C";
  }
  if (periodicElementState == 66) {
    document.querySelector('.element-name').innerHTML = "Dysprosium";
    document.querySelector('.element-number').innerHTML = "66";
    document.querySelector('.element-abr').innerHTML = "Dy";
    document.querySelector('.element-mass').innerHTML = "152.50 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1407 °C";
    document.querySelector('.element-boil').innerHTML = "2562 °C";
  }
  if (periodicElementState == 67) {
    document.querySelector('.element-name').innerHTML = "Holmium";
    document.querySelector('.element-number').innerHTML = "67";
    document.querySelector('.element-abr').innerHTML = "Ho";
    document.querySelector('.element-mass').innerHTML = "164.93 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1461 °C";
    document.querySelector('.element-boil').innerHTML = "2600 °C";
  }
  if (periodicElementState == 68) {
    document.querySelector('.element-name').innerHTML = "Erbium";
    document.querySelector('.element-number').innerHTML = "68";
    document.querySelector('.element-abr').innerHTML = "Er";
    document.querySelector('.element-mass').innerHTML = "167.26 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1529 °C";
    document.querySelector('.element-boil').innerHTML = "2868 °C";
  }
  if (periodicElementState == 69) {
    document.querySelector('.element-name').innerHTML = "Thulium";
    document.querySelector('.element-number').innerHTML = "69";
    document.querySelector('.element-abr').innerHTML = "Tm";
    document.querySelector('.element-mass').innerHTML = "168.93 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1545 °C";
    document.querySelector('.element-boil').innerHTML = "1950 °C";
  }
  if (periodicElementState == 70) {
    document.querySelector('.element-name').innerHTML = "Ytterbium";
    document.querySelector('.element-number').innerHTML = "70";
    document.querySelector('.element-abr').innerHTML = "Yb";
    document.querySelector('.element-mass').innerHTML = "173.05 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "824 °C";
    document.querySelector('.element-boil').innerHTML = "1196 °C";
  }
  if (periodicElementState == 71) {
    document.querySelector('.element-name').innerHTML = "Lutetium";
    document.querySelector('.element-number').innerHTML = "71";
    document.querySelector('.element-abr').innerHTML = "Lu";
    document.querySelector('.element-mass').innerHTML = "174.97 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1652 °C";
    document.querySelector('.element-boil').innerHTML = "3402 °C";
  }
  if (periodicElementState == 72) {
    document.querySelector('.element-name').innerHTML = "Hafnium";
    document.querySelector('.element-number').innerHTML = "72";
    document.querySelector('.element-abr').innerHTML = "Hf";
    document.querySelector('.element-mass').innerHTML = "178.49 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2233 °C";
    document.querySelector('.element-boil').innerHTML = "4603 °C";
  }
  if (periodicElementState == 73) {
    document.querySelector('.element-name').innerHTML = "Tantalum";
    document.querySelector('.element-number').innerHTML = "73";
    document.querySelector('.element-abr').innerHTML = "Ta";
    document.querySelector('.element-mass').innerHTML = "180.95 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "3017 °C";
    document.querySelector('.element-boil').innerHTML = "5458 °C";
  }
  if (periodicElementState == 74) {
    document.querySelector('.element-name').innerHTML = "Tungsten";
    document.querySelector('.element-number').innerHTML = "74";
    document.querySelector('.element-abr').innerHTML = "W";
    document.querySelector('.element-mass').innerHTML = "183.84 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "3422 °C";
    document.querySelector('.element-boil').innerHTML = "5930 °C";
  }
  if (periodicElementState == 75) {
    document.querySelector('.element-name').innerHTML = "Rhenium";
    document.querySelector('.element-number').innerHTML = "75";
    document.querySelector('.element-abr').innerHTML = "Re";
    document.querySelector('.element-mass').innerHTML = "186.21 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "3186 °C";
    document.querySelector('.element-boil').innerHTML = "5630 °C";
  }
  if (periodicElementState == 76) {
    document.querySelector('.element-name').innerHTML = "Osmium";
    document.querySelector('.element-number').innerHTML = "76";
    document.querySelector('.element-abr').innerHTML = "Os";
    document.querySelector('.element-mass').innerHTML = "190.23 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "3033 °C";
    document.querySelector('.element-boil').innerHTML = "5012 °C";
  }
  if (periodicElementState == 77) {
    document.querySelector('.element-name').innerHTML = "Iridium";
    document.querySelector('.element-number').innerHTML = "77";
    document.querySelector('.element-abr').innerHTML = "Ir";
    document.querySelector('.element-mass').innerHTML = "192.22 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2446 °C";
    document.querySelector('.element-boil').innerHTML = "4130 °C";
  }
  if (periodicElementState == 78) {
    document.querySelector('.element-name').innerHTML = "Platinum";
    document.querySelector('.element-number').innerHTML = "78";
    document.querySelector('.element-abr').innerHTML = "Pt";
    document.querySelector('.element-mass').innerHTML = "195.08 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1768 °C";
    document.querySelector('.element-boil').innerHTML = "3825 °C";
  }
  if (periodicElementState == 79) {
    document.querySelector('.element-name').innerHTML = "Gold";
    document.querySelector('.element-number').innerHTML = "79";
    document.querySelector('.element-abr').innerHTML = "Au";
    document.querySelector('.element-mass').innerHTML = "196.97 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1064 °C";
    document.querySelector('.element-boil').innerHTML = "2970 °C";
  }
  if (periodicElementState == 80) {
    document.querySelector('.element-name').innerHTML = "Mercury";
    document.querySelector('.element-number').innerHTML = "80";
    document.querySelector('.element-abr').innerHTML = "Hg";
    document.querySelector('.element-mass').innerHTML = "200.59 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-39 °C";
    document.querySelector('.element-boil').innerHTML = "357 °C";
  }
  if (periodicElementState == 81) {
    document.querySelector('.element-name').innerHTML = "Thallium";
    document.querySelector('.element-number').innerHTML = "81";
    document.querySelector('.element-abr').innerHTML = "Tl";
    document.querySelector('.element-mass').innerHTML = "204.38 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "304 °C";
    document.querySelector('.element-boil').innerHTML = "1473 °C";
  }
  if (periodicElementState == 82) {
    document.querySelector('.element-name').innerHTML = "Lead";
    document.querySelector('.element-number').innerHTML = "82";
    document.querySelector('.element-abr').innerHTML = "Pb";
    document.querySelector('.element-mass').innerHTML = "207.02 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "327 °C";
    document.querySelector('.element-boil').innerHTML = "1749 °C";
  }
  if (periodicElementState == 83) {
    document.querySelector('.element-name').innerHTML = "Bismuth";
    document.querySelector('.element-number').innerHTML = "83";
    document.querySelector('.element-abr').innerHTML = "Bi";
    document.querySelector('.element-mass').innerHTML = "208.98 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "271 °C";
    document.querySelector('.element-boil').innerHTML = "1564 °C";
  }
  if (periodicElementState == 84) {
    document.querySelector('.element-name').innerHTML = "Polonium";
    document.querySelector('.element-number').innerHTML = "84";
    document.querySelector('.element-abr').innerHTML = "Po";
    document.querySelector('.element-mass').innerHTML = "209 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "254 °C";
    document.querySelector('.element-boil').innerHTML = "962 °C";
  }
  if (periodicElementState == 85) {
    document.querySelector('.element-name').innerHTML = "Astatine";
    document.querySelector('.element-number').innerHTML = "85";
    document.querySelector('.element-abr').innerHTML = "At";
    document.querySelector('.element-mass').innerHTML = "210 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "N/A °C";
    document.querySelector('.element-boil').innerHTML = "230 °C";
  }
  if (periodicElementState == 86) {
    document.querySelector('.element-name').innerHTML = "Radon";
    document.querySelector('.element-number').innerHTML = "86";
    document.querySelector('.element-abr').innerHTML = "Rn";
    document.querySelector('.element-mass').innerHTML = "222 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-71 °C";
    document.querySelector('.element-boil').innerHTML = "-61 °C";
  }
  if (periodicElementState == 87) {
    document.querySelector('.element-name').innerHTML = "Francium";
    document.querySelector('.element-number').innerHTML = "87";
    document.querySelector('.element-abr').innerHTML = "Fr";
    document.querySelector('.element-mass').innerHTML = "223 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "8 °C";
    document.querySelector('.element-boil').innerHTML = "620 °C";
  }
  if (periodicElementState == 88) {
    document.querySelector('.element-name').innerHTML = "Radium";
    document.querySelector('.element-number').innerHTML = "88";
    document.querySelector('.element-abr').innerHTML = "Ra";
    document.querySelector('.element-mass').innerHTML = "226 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "700 °C";
    document.querySelector('.element-boil').innerHTML = "1737 °C";
  }
  if (periodicElementState == 89) {
    document.querySelector('.element-name').innerHTML = "Actinium";
    document.querySelector('.element-number').innerHTML = "89";
    document.querySelector('.element-abr').innerHTML = "Ac";
    document.querySelector('.element-mass').innerHTML = "227 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1227 °C";
    document.querySelector('.element-boil').innerHTML = "3200 °C";
  }
  if (periodicElementState == 90) {
    document.querySelector('.element-name').innerHTML = "Thorium";
    document.querySelector('.element-number').innerHTML = "90";
    document.querySelector('.element-abr').innerHTML = "Th";
    document.querySelector('.element-mass').innerHTML = "232.04 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1750 °C";
    document.querySelector('.element-boil').innerHTML = "4788 °C";
  }
  if (periodicElementState == 91) {
    document.querySelector('.element-name').innerHTML = "Protactinium";
    document.querySelector('.element-number').innerHTML = "91";
    document.querySelector('.element-abr').innerHTML = "Pa";
    document.querySelector('.element-mass').innerHTML = "231.04 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1568 °C";
    document.querySelector('.element-boil').innerHTML = "4027 °C";
  }
  if (periodicElementState == 92) {
    document.querySelector('.element-name').innerHTML = "Uranium";
    document.querySelector('.element-number').innerHTML = "92";
    document.querySelector('.element-abr').innerHTML = "U";
    document.querySelector('.element-mass').innerHTML = "238.03 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1132 °C";
    document.querySelector('.element-boil').innerHTML = "4131 °C";
  }
  if (periodicElementState == 93) {
    document.querySelector('.element-name').innerHTML = "Neptunium";
    document.querySelector('.element-number').innerHTML = "93";
    document.querySelector('.element-abr').innerHTML = "Np";
    document.querySelector('.element-mass').innerHTML = "237 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "639 °C";
    document.querySelector('.element-boil').innerHTML = "4174 °C";
  }
  if (periodicElementState == 94) {
    document.querySelector('.element-name').innerHTML = "Plutonium";
    document.querySelector('.element-number').innerHTML = "94";
    document.querySelector('.element-abr').innerHTML = "Pu";
    document.querySelector('.element-mass').innerHTML = "244 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "639 °C";
    document.querySelector('.element-boil').innerHTML = "3228 °C";
  }
  if (periodicElementState == 95) {
    document.querySelector('.element-name').innerHTML = "Americium";
    document.querySelector('.element-number').innerHTML = "95";
    document.querySelector('.element-abr').innerHTML = "Am";
    document.querySelector('.element-mass').innerHTML = "243 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1176 °C";
    document.querySelector('.element-boil').innerHTML = "2607 °C";
  }
  if (periodicElementState == 96) {
    document.querySelector('.element-name').innerHTML = "Curium";
    document.querySelector('.element-number').innerHTML = "96";
    document.querySelector('.element-abr').innerHTML = "Cm";
    document.querySelector('.element-mass').innerHTML = "247 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1340 °C";
    document.querySelector('.element-boil').innerHTML = "3110 °C";
  }
  if (periodicElementState == 97) {
    document.querySelector('.element-name').innerHTML = "Berkelium";
    document.querySelector('.element-number').innerHTML = "97";
    document.querySelector('.element-abr').innerHTML = "Bk";
    document.querySelector('.element-mass').innerHTML = "247 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "986 °C";
    document.querySelector('.element-boil').innerHTML = "2627 °C";
  }
  if (periodicElementState == 98) {
    document.querySelector('.element-name').innerHTML = "Californium";
    document.querySelector('.element-number').innerHTML = "98";
    document.querySelector('.element-abr').innerHTML = "Cf";
    document.querySelector('.element-mass').innerHTML = "251 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "900 °C";
    document.querySelector('.element-boil').innerHTML = "1470 °C";
  }
  if (periodicElementState == 99) {
    document.querySelector('.element-name').innerHTML = "Einsteinium";
    document.querySelector('.element-number').innerHTML = "99";
    document.querySelector('.element-abr').innerHTML = "Es";
    document.querySelector('.element-mass').innerHTML = "252 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "860 °C";
    document.querySelector('.element-boil').innerHTML = "996 °C";
  }
  if (periodicElementState == 100) {
    document.querySelector('.element-name').innerHTML = "Fermium";
    document.querySelector('.element-number').innerHTML = "100";
    document.querySelector('.element-abr').innerHTML = "Fm";
    document.querySelector('.element-mass').innerHTML = "257 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1527 °C";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 101) {
    document.querySelector('.element-name').innerHTML = "Mendelevium";
    document.querySelector('.element-number').innerHTML = "101";
    document.querySelector('.element-abr').innerHTML = "Md";
    document.querySelector('.element-mass').innerHTML = "258 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "827 °C";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 102) {
    document.querySelector('.element-name').innerHTML = "Nobelium";
    document.querySelector('.element-number').innerHTML = "102";
    document.querySelector('.element-abr').innerHTML = "No";
    document.querySelector('.element-mass').innerHTML = "259 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "827 °C";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 103) {
    document.querySelector('.element-name').innerHTML = "Lawrencium";
    document.querySelector('.element-number').innerHTML = "103";
    document.querySelector('.element-abr').innerHTML = "Lr";
    document.querySelector('.element-mass').innerHTML = "266 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "1627 °C";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 104) {
    document.querySelector('.element-name').innerHTML = "Rutherfordium";
    document.querySelector('.element-number').innerHTML = "104";
    document.querySelector('.element-abr').innerHTML = "Rf";
    document.querySelector('.element-mass').innerHTML = "267 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "2100 °C";
    document.querySelector('.element-boil').innerHTML = "5500°C";
  }
  if (periodicElementState == 105) {
    document.querySelector('.element-name').innerHTML = "Dubnium";
    document.querySelector('.element-number').innerHTML = "105";
    document.querySelector('.element-abr').innerHTML = "Db";
    document.querySelector('.element-mass').innerHTML = "268 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "N/A";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 106) {
    document.querySelector('.element-name').innerHTML = "Seaborgium";
    document.querySelector('.element-number').innerHTML = "106";
    document.querySelector('.element-abr').innerHTML = "Sg";
    document.querySelector('.element-mass').innerHTML = "269 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "N/A";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 107) {
    document.querySelector('.element-name').innerHTML = "Bohrium";
    document.querySelector('.element-number').innerHTML = "107";
    document.querySelector('.element-abr').innerHTML = "Bh";
    document.querySelector('.element-mass').innerHTML = "270 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "N/A";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 108) {
    document.querySelector('.element-name').innerHTML = "Hassium";
    document.querySelector('.element-number').innerHTML = "108";
    document.querySelector('.element-abr').innerHTML = "Hs";
    document.querySelector('.element-mass').innerHTML = "270 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "N/A";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 109) {
    document.querySelector('.element-name').innerHTML = "Meitnerium";
    document.querySelector('.element-number').innerHTML = "109";
    document.querySelector('.element-abr').innerHTML = "Mt";
    document.querySelector('.element-mass').innerHTML = "278 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "N/A";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 110) {
    document.querySelector('.element-name').innerHTML = "Darmstadtium";
    document.querySelector('.element-number').innerHTML = "110";
    document.querySelector('.element-abr').innerHTML = "Ds";
    document.querySelector('.element-mass').innerHTML = "281 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "N/A";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 111) {
    document.querySelector('.element-name').innerHTML = "Roentgenium";
    document.querySelector('.element-number').innerHTML = "111";
    document.querySelector('.element-abr').innerHTML = "Rg";
    document.querySelector('.element-mass').innerHTML = "282 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "N/A";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 112) {
    document.querySelector('.element-name').innerHTML = "Copernicium";
    document.querySelector('.element-number').innerHTML = "112";
    document.querySelector('.element-abr').innerHTML = "Cn";
    document.querySelector('.element-mass').innerHTML = "282 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "10 ± 11 °C";
    document.querySelector('.element-boil').innerHTML = "67 ± 10 °C";
  }
  if (periodicElementState == 113) {
    document.querySelector('.element-name').innerHTML = "Nihonium";
    document.querySelector('.element-number').innerHTML = "113";
    document.querySelector('.element-abr').innerHTML = "Nh";
    document.querySelector('.element-mass').innerHTML = "286 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "430 °C";
    document.querySelector('.element-boil').innerHTML = "1130 °C";
  }
  if (periodicElementState == 114) {
    document.querySelector('.element-name').innerHTML = "Flerovium";
    document.querySelector('.element-number').innerHTML = "114";
    document.querySelector('.element-abr').innerHTML = "Fl";
    document.querySelector('.element-mass').innerHTML = "289 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "-60 °C";
    document.querySelector('.element-boil').innerHTML = "N/A";
  }
  if (periodicElementState == 115) {
    document.querySelector('.element-name').innerHTML = "Moscovium";
    document.querySelector('.element-number').innerHTML = "115";
    document.querySelector('.element-abr').innerHTML = "Mc";
    document.querySelector('.element-mass').innerHTML = "290 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "400 °C";
    document.querySelector('.element-boil').innerHTML = "100 °C";
  }
  if (periodicElementState == 116) {
    document.querySelector('.element-name').innerHTML = "Livermorium";
    document.querySelector('.element-number').innerHTML = "116";
    document.querySelector('.element-abr').innerHTML = "Lv";
    document.querySelector('.element-mass').innerHTML = "293 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "364–507 °C";
    document.querySelector('.element-boil').innerHTML = "762–862 °C";
  }
  if (periodicElementState == 117) {
    document.querySelector('.element-name').innerHTML = "Tennessine";
    document.querySelector('.element-number').innerHTML = "117";
    document.querySelector('.element-abr').innerHTML = "Ts";
    document.querySelector('.element-mass').innerHTML = "294 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "350–550 °C";
    document.querySelector('.element-boil').innerHTML = "610 °C";
  }
  if (periodicElementState == 118) {
    document.querySelector('.element-name').innerHTML = "Oganesson";
    document.querySelector('.element-number').innerHTML = "118";
    document.querySelector('.element-abr').innerHTML = "Og";
    document.querySelector('.element-mass').innerHTML = "294 g.mol-1";
    document.querySelector('.element-melt').innerHTML = "50 °C";
    document.querySelector('.element-boil').innerHTML = "80±30°C";
  }


}









var calculateString = "";

function calculatorFunction(buttonString) {
  if (buttonString == 0) {
    calculateString = calculateString + "0";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 1) {
    calculateString = calculateString + "1";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 2) {
    calculateString = calculateString + "2";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 3) {
    calculateString = calculateString + "3";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 4) {
    calculateString = calculateString + "4";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 5) {
    calculateString = calculateString + "5";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 6) {
    calculateString = calculateString + "6";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 7) {
    calculateString = calculateString + "7";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 8) {
    calculateString = calculateString + "8";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 9) {
    calculateString = calculateString + "9";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 10) {
    calculateString = calculateString + "(";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 11) {
    calculateString = calculateString + ")";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 12) {
    calculateString = calculateString + "*";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 13) {
    calculateString = calculateString + "-";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 14) {
    calculateString = calculateString + "+";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 15) {
    calculateString = calculateString + "/";
    document.querySelector('.screen').value = calculateString;
  }
  if (buttonString == 16) {
    calculateString = eval(calculateString);
    document.querySelector('.screen').value = calculateString;
    calculateString = "";
  }
  if (buttonString == 17) {
    calculateString = "";
    document.querySelector('.screen').value = calculateString;
  }
}

function quadraticEnter() {
  var aVal = 0;
  var bVal = 0;
  var cVal = 0;

  aVal = document.querySelector('.quadraticA').value;
  bVal = document.querySelector('.quadraticB').value;
  cVal = document.querySelector('.quadraticC').value;

  if (4 * aVal * cVal > bVal * bVal) {
    document.querySelector('.quadraticAnswer').value = "There is no solution";
  } else {
    document.querySelector('.quadraticAnswer').value = "x-intercepts of this equation are: " + ((-1 * bVal) + Math.sqrt(bVal * bVal - 4 * aVal * cVal)) / 2 * aVal + " and " + ((-1 * bVal) - Math.sqrt(bVal * bVal - 4 * aVal * cVal)) / 2 * aVal + ". This can also be written as (x +  " + -(((-1 * bVal) + Math.sqrt(bVal * bVal - 4 * aVal * cVal)) / 2 * aVal) + ")(x +  " + -(((-1 * bVal) - Math.sqrt(bVal * bVal - 4 * aVal * cVal)) / 2 * aVal) + ") = 0.  ";
  }

}
