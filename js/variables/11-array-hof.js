
/*
HOF - highere order functions
*/

//1 pvz.: su for ciklu
const numbers = [1, 2, 3, 4];
const numbers2x = [];

for (let i = 0; i < numbers.length; i++) {
    numbers2x.push(numbers[i] * 2);
}

console.log(numbers2x);
console.log('--------------');

// 2 pvz.: su funkcija
function triple(n) {
    return n * 3;
}
// .map() - padaro ta pati, ka ir for ciklas
const numbers3x = numbers.map(triple);
console.log(numbers3x);
console.log('--------------');

//3 pvz.: su rodykline f-ja
const numbers5x = numbers.map(n => n * 5);
console.log(numbers5x);
console.log('--------------');

const dic = ['Labas', 'rytas', 'Lietuva'];
const letters = dic.map(s => s[0]);
console.log(letters);
console.log('--------------');


const gg = 'Gera gira geroj girioj gera gerti';
const ggInit = gg
    .split(' ')
    .map(s => s[0])
    .join('.') + '!';
console.log(ggInit);
console.log('--------------');

const kk = ['Aa1', 'Bb2', 'Cc3'];
const kkresult = kk.map(s=> s[3]);
console.log(kkresult);
console.log('--------------');
//.filter tikrina , kaip if, ar true ar false ir ziuri kokia funkcija ir ja vykdo
//.map eina per reiksmes ir transformuoja pagal funkcija, padaro is vieno i kita


// 0 -> "pirma simboli"
// 1 -> "antra simboli"
// 2 -> "trecia simboli"
// 3 -> "ketvirta simboli"
// 4 -> 

const kkresulr = kk.map(s => s[3]);
console.log(kkresulr);
console.log('toliau');
console.log('--------------');

const luckyNumbers = [0, 1, 5, 96, 7, 13, 28, 66, 69];
console.log(luckyNumbers);
console.log('--------------');

//.map *************************
//grazino array padauginta n is 10
const bigerLucky = luckyNumbers.map(n => n * 10);
console.log(bigerLucky);
console.log('--------------');

// 1 - grazinti didesnius uz 20 -> [96, 28, 66, 69];
// 2 - grazinti didesnius arba lygius 28 -> [ 96, 28, 66, 69];
// 3 - grazinti mazesnius uz 50 -> [0, 1, 5, 7, 13, 28]
// [0, 1, 5, 96, 7, 13, 28, 66, 69] -> [28, 66, 69]

//.filter ***********************
// 1.- grazinti didesnius uz 20 -> [96, 28, 66, 69];
const bigLucky1 = luckyNumbers.filter(n => n > 20);
console.log(bigLucky1);
console.log('--------------');

//// 2 - grazinti didesnius arba lygius 28 -> [ 96, 28, 66, 69];
const bigLucky2 = luckyNumbers.filter(n => n >= 28);
console.log(bigLucky2);
console.log('--------------');

//3 - grazinti mazesnius uz 50-> [0, 1, 5, 7, 13, 28]
const bigLucky3 = luckyNumbers.filter(n => n < 50);
console.log(bigLucky3);
console.log('--------------');
// surasti sk., kurie padalinus is 10, liekana 6
const sixLast = luckyNumbers.filter(n => n % 10 === 6);
console.log(sixLast);
console.log('--------------');

// surasti sk. kuris prasideda 6
const sixFirst = luckyNumbers.filter(n => ('' + n)[0] === '6');
console.log(sixFirst);
console.log('--------------');

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);
console.log('--------------');

//name length
const nameSize = students.map(s => s.length);
console.log(nameSize);
console.log('--------------');

// >5
const longNamesFilter = students.filter(name => name.length > 5);
console.log(longNamesFilter);
console.log('--------------');

const longNamesMap = students.map(name => name.length > 5);
console.log(longNamesMap);
console.log('--------------');

// ['J.', ....]

const studentsInitials = students.map(name => name[0] + '.');
console.log(studentsInitials);
console.log('--------------');

//kaip surastyi moteriskus vardus masyve:
// 1 - vardai, kurie nesibaigia su raide "s"
// 2 - vardai, kurie baigia su raide "e" arba "a"


//1 - vardai, kurie nesibaigia su raide "s"
const womanNames1 = students.filter(name => name.at(-1) !== 's');
console.log(1, womanNames1);
// 2 - vardai, kurie baigia su raide "e" arba "a"
const womanNames2 = students.filter(name => name.at(-1) === 'e' || name.at(-1) === 'a');
console.log(2, womanNames2);
//3 -
// string.endsWith()
const womanNames3 = students.filter(name => name.endsWith('e') || name.endsWith('a'));
console.log(3, womanNames3);
// 4-
const womanNames4 = students.filter(name => !name.endsWith('s'));
console.log(4, womanNames4);
//5-
// array.includes()
const womanNames5 = students.filter(name => ['e', 'a'].includes(name.at(-1)));
console.log(5, womanNames5);
// 6-
const womanNames6 = students.filter(name => 'ea'.includes(name.at(-1)));
console.log(6, womanNames6);
console.log();
console.log('--------------');

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

// [0, 1, 2, 3, 4, 5]
//  ^     ^     ^
//  a     c     e
// ['a', 'c', 'e']

const evenAbc = abc.filter((s, i) => i % 2 === 0);
console.log(evenAbc);
console.log('--------------');

// atrinkti zodzius, kuriuose yra papildoma raide,
// tokia kokia jie ir prasideda
const words = ['labas', 'ananasas', 'tuktukas', 'vasara'];

const doubleWords1 = words.filter(w => w.slice(1).includes(w[0]));
console.log(doubleWords1);
console.log('----');

const doubleWords2 = words.filter(w => w.indexOf(w[0], 1) > 0);
console.log(doubleWords2);
console.log('----');


const colors = ['red', 'green', 'blue', 'yellow', 'red', 'orange'];
console.log(colors);
console.log('----');

const colors2 = colors.map((item, index, list) => item);
console.log(colors2);
console.log('----');

const colors3 = colors.map((item, index, list) => list[index]);
console.log(colors3);
console.log('----');
// rasti, visas spalvas, kurios kartojasi
// rasti, visas spalvas, kurios yra unikalios

// ['red', 'green', 'blue', 'yellow', 'red', 'orange'];
// norimas gauti rezultatas ['red', 'red'] ir ['green', 'blue', 'yellow', 'orange'];
function repeatingVAlua(color, index, list) {
    return list.indexOf(color) !== list.lastOf(color);
    //return list.indexOf(color)<1;
}


const colorRepeat = colors.filter(
    (color, index, list) =>
        // list.indexOf(color) !== list.lastIndexOf(color)
        list.indexOf(color) < 1
);

console.log(colorRepeat);
console.log('----');
console.log('----');

//metodas .sort - rikiavimas

const colorsA = ['red', 'green', 'blue', 'yellow', 'red', 'orange'];
const colorsB = ['green', 'red', 'red'];
const colorsC = ['red', 'red', 'orange', 'red'];
const colorsD = ['red', 'green', 'blue', 'yellow'];

const colorsCopy2 = colorsA.map((item, index, list) => item);
console.log(colorsCopy2);

const colorsCopy3 = colorsA.map((item, index, list) => list[index]);
console.log(colorsCopy3);
console.log('----');
console.log('----');
// rasti, visas spalvas, kurios kartojasi
// ['red', 'red', 'orange', 'red']
// 0: list.indexOf(red) !== list.lastIndexOf(red): 0 !== 3 -> true
// 1: list.indexOf(red) !== list.lastIndexOf(red): 0 !== 3 -> true
// 2: list.indexOf(orange) !== list.lastIndexOf(orange): 2 !== 2 -> false
// 3: list.indexOf(red) !== list.lastIndexOf(red): 0 !== 3 -> true
// ISVADA: sprendimas logiskai neteisingas,
// taciau gaunamas rezultatas yra teisingas 👀👀👀
function repeatingValues(color, index, list) {
    return list.indexOf(color) !== list.lastIndexOf(color);
}

console.log(colorsA.filter(repeatingValues));
console.log(colorsB.filter(repeatingValues));
console.log(colorsC.filter(repeatingValues));
console.log(colorsD.filter(repeatingValues));


