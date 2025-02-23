//sudetis
//function declaration
const n1 = 7;
const n2 = 5;


function sudetis(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sudetis(n1, n2)}`);
console.log('--------------');

//atimtis
//anonimines funkcijos logika, priskirta kitamajam
const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);
console.log('--------------');
//sandauga

function sandauga(a, b) {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);
console.log('--------------');
//arrow function (rodykline funcija) (liambda function)

const sandauga1 = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga1(n1, n2)}`);
console.log('--------------');
//dalyba
function dalyba(a, b) {
    return a / b;
}
console.log(`${n1} / ${n2} = ${dalyba(n1, n2)}`);
console.log('--------------');
//jeigu, logikos bloke (tie kur yra kabliataskis- return) yra tik 1 procedura
// galima nerasyti{} ir return
const dalyba1 = (a, b) => {
    return a / b;
}
console.log(`${n1} / ${n2} = ${dalyba1(n1, n2)}`);
console.log('--------------');
//kitas budas, kai nerasome {} ir return
const dalyba3 = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${dalyba3(n1, n2)}`);
console.log('--------------');


function kvadratu(a) {
    return a * a;
}
console.log(`${n1} * ${n1} = ${kvadratu(n1, n1)}`);
console.log('--------------');
//jeigu,parametru bloke (pvz.: a) yra tik 1 parametras
//galima nerasyti () 

const kvadratu1 = a => a * a;
console.log(`${n1} / ${n1} = ${kvadratu1(n1, n1)}`);
console.log('--------------');

//rodyklines f-jos naudojamos ne tik skaiciuose
// Vardas -> V.
//s -stringo trumpinys
//n - skaiciu trumpinys

const nameInit = s => s[0] + '.';
console.log(nameInit('Gintare'));
console.log('--------------');
//'Vardenis Pavardenis' -> 'V.P.'
// 'Vardenis Pavardenis' -> 'V.P.'

// 1. 'Vardenis Pavardenis'

// 2. ['Vardenis', 'Pavardenis']

// 3a. Vardenis -> V.
// 3b. Pavardenis -> P.

// 4 V.P.
function inicialai(fullName) {
    const nameParts = fullName.split(' ');
    const firstname = nameParts[0][0] + ' . ';
    const lastname = nameParts[1][0] + ' . ';
    return firstname + lastname;
}


console.log(inicialai('Vardenis Pavardenis'));
console.log(inicialai('Chuck Norris'));
console.log(inicialai('Bruce Willis'));
console.log('--------------');
///

const inicialaiArrow = fullName => {
    const nameParts = fullName.split(' ');
    const firstname = nameParts[0][0] + '.';
    const lastname = nameParts[1][0] + '.';
    return firstname + lastname;
}
/*function inicialai2 (fullName) {
    const parts = fullName.split(' ');
    const firstname = nameInit(nameParts[0]);
    const lastname = nameInit(nameParts[1]);
    return firstname + lastname;
}*/
function inicialai2(fullName) {
    const parts = fullName.split(' ');
    return nameInit(parts[0]) + nameInit(parts[1]);
}
console.log(inicialai2('Vardenis Pavrdenis'));
console.log(inicialai2('Chuck Norris'));
console.log(inicialai2('Bruce Willis'));
console.log('--------------');

// 5 -> false
// 4 -> true
// 3 -> false
// 2 -> true
// 1 -> false
// 0 -> true

// n: 5                 n: 4
// !(n % 2)             !(n % 2)
// !(5 % 2)             !(4 % 2)
// !(1)                 !(0)
// !1                   !0
// !true                !false
// false                true

function isEven(n) {
    return !(n % 2);
    // return n % 2 === 0;
}
console.log('//', 5, '->', isEven(5));
console.log('//', 4, '->', isEven(4));
console.log('//', 3, '->', isEven(3));
console.log('//', 2, '->', isEven(2));
console.log('//', 1, '->', isEven(1));
console.log('//', 0, '->', isEven(0));
console.log('--------------');
// Labas rytas, Lietuva! -> 3
// Ką tu? Ką vakare? -> 4
//pvz.: du budai, 1 budas(paprastas su function)
function sakinys(text) {
    return text.split(' ').length;
}
console.log(sakinys('Labas rytas, Lietuva!'));
console.log(sakinys('Ką tu? Ką vakare?'));
console.log('--------------');
// 2 budas, kai yra rodykline funkcija
const sakinys2 = text => text.split(' ').length;
console.log(sakinys2('Labas rytas, Lietuva!'));
console.log(sakinys2('Ką tu? Ką vakare?'));