/*
ARRAY -Arėjus, sąrašas, listas, masyvas, matrica
*/

const numbers = [10, 2, 8, 4, 6];
console.log(numbers);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

console.log(numbers.length);
console.log(students.length);


//geriau nemiksuoti //
const mix = [145, 'asddf', true];
console.log(mix);
console.log(mix.length);

console.log();

console.log(`Studentas: ${students[0]} pradejo mokytis.`);
console.log(`Studentas: ${students[1]} pradejo mokytis.`);
console.log(`Studentas: ${students[2]} pradejo mokytis.`);
console.log(`Studentas: ${students[3]} pradejo mokytis.`);

console.log();
for (let i = 0; i < 4; i ++) {
    console.log(`Studentas: ${students[0]} pradejo mokytis.`);
}

console.log();
for (let i = 0; i < students.length; i ++) {
    console.log(i,`Studentas: ${students[i]} pradejo mokytis.`);
}

//Array metodai
//ArrayisArray
const x = 45565;
if (Array.isArray(x)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

const studentsAt = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log();


