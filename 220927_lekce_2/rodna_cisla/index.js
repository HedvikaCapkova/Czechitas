const form = document.querySelector("#rodne-cislo-form");
const cifry = document.getElementById("cifry");
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const checkBirthId = (rodneCislo) => {
  console.log(rodneCislo);

  if (rodneCislo.length !== 10) {
    console.log("invalidLength");
    document.getElementById("zprava-pro-uzivatele").innerHTML = "❌ V rodném čísle jsou chyby.";
    return "invalidLength";
  }

  if (!Number.isInteger(Number(rodneCislo))) {
    console.log("notANumber");
    document.getElementById("zprava-pro-uzivatele").innerHTML = "❌ V rodném čísle jsou chyby.";
    return "notANumber";
  }

  if (rodneCislo % 11 !== 0) {
    console.log("failedChecksum");
    document.getElementById("zprava-pro-uzivatele").innerHTML = "❌ V rodném čísle jsou chyby.";
    return "failedChecksum";
  }

  console.log("ok");
  document.getElementById("zprava-pro-uzivatele").innerHTML = "✔️ V pořádku.";
};

function isDigit(znak) {
  if (!digits.includes(znak)) {
    console.log(znak);
  }
}

function logInvalidCharacters(rodneCislo) {
  rodneCislo.split("").forEach((znak) => {
    isDigit(znak);
  });
}

function validateCharactersObject(rodneCislo){
  let result = [];
  rodneCislo.split("").forEach((znak) => {
    if (digits.includes(znak)) {
      result.push({ char: znak, digit: true });
    } else{
      result.push({ char: znak, digit: false });
    }
  });
    console.log(result); 
  }

function validateCharacters(rodneCislo){
  rodneCislo.split("").forEach((znak) => {
    if (digits.includes(znak)){
      cifry.innerHTML += `<div class="green">${znak}</div>`;
    } else {
      cifry.innerHTML += '<div class="red">'+znak+'</div>';
    }
  });
}  

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const rodneCislo = document.querySelector("#rodne-cislo").value;
  cifry.innerHTML = "";
  checkBirthId(rodneCislo);
  //logInvalidCharacters(rodneCislo);
  //validateCharactersObject(rodneCislo);
  validateCharacters(rodneCislo);
  


});
