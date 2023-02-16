let timeDOM = document.querySelector("#time");
let nameDom = document.querySelector("#name");
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

const checkZero = (value) => {
  return value < 10 ? "0" + value : value;
};

const showTime = () => {
  let name = prompt("Lütfen adınızı giriniz.");

  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const day = days[date.getDay()];
    timeDOM.innerHTML = `${checkZero(hour)}:${checkZero(minute)}:${checkZero(second)}, ${day}`;
    nameDom.innerHTML = name;
  }, 1000);
};

showTime();
