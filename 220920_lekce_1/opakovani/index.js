console.log("trhni si nohou");

const name = "standa";
const married = false;
const age = 25;
const nic = null;
const jesteVicNic = undefined;

const person = {
  name: "standa",
  married: false,
  age: 25,
};

const nabehaneKilometry = [3, 0, 0, 4];

const checkPassword = (password) => password === "simsalabim";

//pokud ma funkce jen return, muze se return vynechat

console.log(checkPassword("simsalabim"));

const names = ["pert", "jana", "eva", "robert", "ctirad"];

names.forEach((name, index) => {
  if (index > 3) {
    console.log(name);
  }
});

//anonymni funkce = nema jmeno

const button = document.querySelector("#button");
// button.onclick = function () {
//   button.textContent = "ahoj";
// };

button.addEventListener("click", () => {
  button.textContent = "ahoj";
});

const from = document.querySelector("#prihlaseni");
from.addEventListener("submit", (event) => {
  event.preventDefault();
  //preventDefault = po kliknuti na tlacitko submit se stranka nerefreshne

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  console.log(username, password);
});
