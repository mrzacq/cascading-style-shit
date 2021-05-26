const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
  .then((res) => res.json())
  .then((res) => displayData(res));

function displayData(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} ${entries[i][1]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} ${entries[i][1]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;

  let value = num.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
    ans.value = "Loading...";
  } else {
    alert("Pilih mata uang yang lain");
  }
});

function convert(satu, dua, value) {
  fetch(
    `https://api.frankfurter.app/latest?amount=${value}&from=${satu}&to=${dua}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (dua === "IDR") {
        ans.value = toRupiah(Object.values(data.rates)[0]);
      } else {
        ans.value = Object.values(data.rates)[0];
      }
    });
}

function toRupiah(number) {
  let tempNum = String(number).split("").reverse();

  for (let i = 0; i < tempNum.length; i++) {
    if ((i + 1) % 3 == 0 && i != tempNum.length - 1) {
      tempNum[i] = `.${tempNum[i]}`;
    }
  }
  tempNum = `Rp. ${tempNum.reverse().join("")},00`;
  return tempNum;
}
