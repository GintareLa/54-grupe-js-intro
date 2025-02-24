//.slice metodas yra iki, ne imtinai

//Object.keys() - butina O didzioji ir istraukiau objekto raktus
const number = 3.14;
const numberError = NaN;

console.log(number.toFixed(0));
console.log(number.toFixed(1));
console.log(number.toFixed(2));
console.log(number.toFixed(3));
console.log(number.toFixed(4));

console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);
console.log(7 % 5);
console.log(7 ** 5);

let i = 0;
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);

i += 2;
i -= 2;
i *= 2;
i /= 2;
i %= 2;
i **= 2;

const text = 'Labas rytas, Lietuva!';
const kabutes = 'Vienguba (\').';
const kabutes2 = `Vienguba (').`;
const textWithNumber = `My favorite number is ${number}.`;
const symbolCount = text.length;

console.log(text[0]);
console.log(text.charAt(-1));
console.log(text.includes('Labas'));
console.log(text.replace(' ', '-=-'));
console.log(text.split(' '));
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.trim());

const yes = true;
const no = false;

const marks = [10, 2, 8, 4, 6];

console.log(marks.length);
console.log(marks.filter(n => n > 5));
console.log(marks.includes(10));
console.log(marks.includes(11));
console.log(marks.indexOf(10));
console.log(marks.indexOf(11));
console.log(marks.join(' - '));
console.log(marks.map(n => n * 100));
console.log(marks.push(8));
console.log(marks);
console.log(marks.slice(1, 3));
console.log(marks.reverse());

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(person['age']);
console.log(person.name);

console.log(Object.keys(person));
console.log(Object.keys({}));
console.log(Object.keys({ marks: [] }));

const a1 = [1, 11];
const a2 = [2, 22];
const a12 = [...a1, ...a1, 7777, ...a2, ...a2];
console.log(a12);

const o1 = { color: 'red' };
const o2 = { height: '1m' };
const o3 = { width: '3m' };
const o123 = { ...o1, ...o2, ...o3, extra: 'extra' };
console.log(o123);

const { name, age, ...personRest } = person;
console.log(name, age, personRest);

const numbers = [10, 2, 8, 4, 6];
const [n1, n2, ...nRest] = numbers;
console.log(n1, n2, nRest);

if (!'Labas'.includes('a')) {
}

console.log(typeof 5);
console.log(typeof 'asd');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof (() => { }));
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(null === null);
console.log({} === null);
console.log([] === null);
console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(Array.isArray(5));

switch (5) {
    case 1:
        // do smthg...
        break;
    case 5:
        // do smthg...
        break;
    default:
    // do smthg...
}

const arr = [1, 'asd', 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
        continue;
    }

    sum += arr[i];

    if (sum > 1000000) {
        break;
    }
}

for (const number of arr) {
    console.log('-->', number);
}

const kebabas = {
    lavasas: true,
    mesa: 'jautiena',
    padazas: 'cesnakinis',
    kaina: 4.99,
};

const kebabasKeys = Object.keys(kebabas);
console.log(kebabasKeys);

for (const key of kebabasKeys) {
    console.log('###', key, '-->', kebabas[key]);
}

for (const key in kebabas) {
    console.log('***', key, '-->', kebabas[key]);
}

const t1 = true ? 1 : 2;
const t2 = 1 < 2 ? 3 : 4;
console.log(t1);
console.log(t2);

function addition(a, b) {
    return a + b;
}

console.log(addition(7, 5));

const multi = (k, l) => k * l;
console.log(multi(7, 5));