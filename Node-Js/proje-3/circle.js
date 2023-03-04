const PI = 3.14;

function circleArea(radius) {
  const area = PI * radius * radius;
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}

function circleCircumference(radius) {
  const circumference = 2 * PI * radius;
  console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circumference}`);
}

module.exports = {
  circleArea,
  circleCircumference,
};
