/*
Destrukturizavimas
Strukturizavimas
*/

//const a = [1, 22];

//...a => 1, 22
//[...a] => [1, 22]

const numbers = [10, 2, 8, 4, 6];

const n1 = numbers[0];
const n2 = numbers[1];
const nRest = [numbers[2], numbers[3], numbers[4]];
const nRest2 = numbers.slice(2);

console.log(n1);
console.log(n2);
console.log(nRest);
console.log(nRest2);


const [m1, m2, m3, m4, m5, m6] = numbers;
console.log(m1, m2, m3, m4, m5, m6);
//bet kokie kintamieji gali buti ir m1, ir a, bet ims nuo 0 reiksmes
const [a, b,c ,d, e, f] = numbers;
console.log (a, b,c ,d, e, f);


console.log('------');

const [k1, , , , k3] = numbers;
console.log(k1, k3);
console.log('------');

//paima likusiais reiksmas ...l
const[l1, l2, ...l] = numbers;
console.log(l1, l2, l);
console.log('------');

//.rest turi buti paskutinis narys ir pries =
const [...r] = numbers;
console.log(r);
console.log('------');

const t = [...numbers];
console.log(t);
console.log('------');
//gaunasi tuscias masyvas
const numbersList = [9, 99];
const [y1, y2,...yRest] = numbersList;
console.log(y1, y2, yRest);
console.log('------');
console.log('------');
/* pasipildyti
const numbersList1 = [9, 99, 999, 9999m 8, 88, 888];
const [y1, y2,...yRest] = numbersList1;
console.log(y1, y2, yRest);
console.log('------');
*/

//restrukturizavimass su objektais
const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    marks: [10, 2, 8, 4, 6],
    phone: 861222148562,
    address: {
        city: 'Miestas',
        street: 'Gatve',
        number: 9,
    },
};

const name = person.name;
const age = person.age;
const isMarried = person.isMarried;
const personRest = {
    marks: person.marks,
    phone: person.phone,
    address: person.address,
       }

console.log(name);
console.log(age);
console.log(isMarried);
console.log(personRest);



