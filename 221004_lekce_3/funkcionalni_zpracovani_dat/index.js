const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx', 'Alex'];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];

//a persons.forEach((p) => console.log(p.age));

//b persons.forEach((p) => console.log(p.name[0]));

//c console.log(persons.find((p) => p.name === 'Adam'));

//d
// let onyx = persons.find((p) => p.name === 'Onyx');
// console.log(onyx.gender);

//e let vekPohlavi = persons.findIndex((p) => p.age === 22 && p.gender === 'male');
// console.log(vekPohlavi);

//f
// numbers.some((n) => console.log(n%11 === 0));

//g
// console.log(persons.some((p) => !p.gender.includes('male')));

//h
//console.log(persons.every((p) => p.age > 18));

let evenNumbers = numbers.filter((n) => n%2 === 0);
console.log(evenNumbers);

let adults = persons.filter((p) => p.age >= 18);
console.log(adults);

let dividedByThree = numbers.map((n) => n/3);
console.log(dividedByThree);

console.log(numbers.map((n) => String(n)));

let emails = persons.map((p) => `${p.name}@gmail.com`);
console.log(emails);

let list = persons.map((p) => `<li>${p.name} (${p.age})</li>`);
console.log(list);

// let personsList = (persons.map((p) => `<li>${p.name} (${p.age})</li>`)).join("");
// document.querySelector('#persons').innerHTML = personsList;


// let personsListAdult = persons
// .filter((p) => p.age >= 18)
// .map((p) => `<li>${p.name} (${p.age})</li>`)
// .join("");

// document.querySelector('#persons').innerHTML = personsListAdult;

let personsListClass = persons
.filter((p) => p.age >= 18)
.map((p) => `<li class="${getGender(p.gender)}">${p.name} (${p.age})</li>`)
.join("");

document.querySelector('#persons').innerHTML = personsListClass;

function getGender(gender) {
    switch (gender) {
        case "male":
        case "female":
            return gender;
        default:
            return "nonbinary";
    }
};