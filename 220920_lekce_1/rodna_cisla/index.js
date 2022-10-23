const form = document.querySelector("#rodne-cislo-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const rodneCislo = document.querySelector("#rodne-cislo").value;

  console.log(rodneCislo);

  rodneCislo.length === 10
    ? console.log("✔️ Zadané rodné číslo má správně deset znaků.")
    : console.log("❌ Uživatel zadal rodné číslo neplatné délky.");

  Number.isInteger(Number(rodneCislo))
    ? console.log("✔️ Rodné číslo je celé číslo.")
    : console.log("❌ Rodné číslo obsahuje nepovolené znaky.");

  rodneCislo % 11 === 0
    ? console.log("✔️ Rodné číslo je dělitelné 11.")
    : console.log("❌ Rodné číslo není dělitelné číslem 11.");

  rodneCislo.length === 10 &&
  Number.isInteger(Number(rodneCislo)) &&
  rodneCislo % 11 === 0
    ? console.log("✔️ Zadané rodné číslo je platné.")
    : console.log("❌ Uživatel zadal neplatné rodné číslo.");
});
