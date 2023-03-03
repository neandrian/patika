const PI = 3.14;
const [x] = process.argv.slice(2);

function calculateCircleArea(radius) {
  const area = PI * radius * radius;
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}
console.log(x);
calculateCircleArea(+x);
