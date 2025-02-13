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

console.log(students);
console.log(students.length);

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
const x = ['asd'];

if (Array.isArray(x)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log(Array.isArray(14562));
console.log(Array.isArray(true));
console.log(Array.isArray('afsd'));
console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log(Array.isArray([154]));
console.log(Array.isArray(['154']));
console.log(Array.isArray([true]));




const studentsAt = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsAt[0]);
console.log(studentsAt[1]);
console.log(studentsAt[2]);
console.log(studentsAt[3]);
console.log(studentsAt[studentsAt.length - 1]);
console.log(studentsAt[studentsAt.length - 2]);
console.log(studentsAt[studentsAt.length - 3]);
console.log(studentsAt[studentsAt.length - 4]);

console.log('------------');

console.log(studentsAt.at(0));
console.log(studentsAt.at(1));
console.log(studentsAt.at(-1));
console.log(studentsAt.at(-2));



const studentsCon1 = ['Jonas', 'Maryte'];
const studentsCon2 = ['Petras', 'Ona'];

const studentsCon111 = studentsCon1.concat(studentsCon2);
console.log(studentsCon111);

const studentsCon222 = studentsCon2.concat(studentsCon1);
console.log(studentsCon222);

console.log([1].concat([2]));
console.log([1].concat([2]).concat([3]));
console.log([1].concat([2]).concat([3]).concat([4]));

console.log([1].concat([2], [3], [4]));



const notFlat = [1, 2, 3, [4], [[[[[[[[5]]]]]]], 6]];
console.log(notFlat);
console.log(notFlat[0]);
console.log(notFlat[1]);
console.log(notFlat[2]);
console.log(notFlat[3]);
console.log(notFlat[3][0]);

console.log(notFlat[4]);
console.log(notFlat[4][0]);
console.log(notFlat[4][1]);

console.log(notFlat.flat().flat());
console.log(notFlat.flat(Infinity));
console.log(notFlat);

const studentsInc = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsInc.includes('Chuck'));
console.log(studentsInc.includes('a'));
console.log(studentsInc.includes('Jonas'));
console.log(studentsInc.includes('ona'));
console.log(studentsInc.includes('Ona'));



const studentsIndex = ['Jonas', 'Ona', 'Maryte', 'Petras', 'Ona'];
console.log(studentsIndex.indexOf('Chuck'));
console.log(studentsIndex.indexOf('a'));
console.log(studentsIndex.indexOf('Jonas'));
console.log(studentsIndex.indexOf('ona'));
console.log(studentsIndex.indexOf('Ona'));
console.log(studentsIndex.indexOf('Ona', 2));
console.log(studentsIndex.indexOf('Ona', 5));



const seachStudent = 'Maryte';
let studentCount = 0;

for (let i = 0; i < studentsIndex.length; i++) {
    if (studentsIndex[i] === seachStudent) {
        studentCount++;
    }
}

if (studentCount === 0) {
    console.log('Norimo studento nerasta');
} else {
    console.log(`Sarase yra "${seachStudent}": ${studentCount}`);
}



//.push - padaro masyva
const medziai = [];
console.log(medziai);

medziai.push('ąžuolas');
console.log(medziai);

medziai.push('egle');
console.log(medziai);

medziai.push('berzas');
console.log(medziai);

//.pop -pasalina elementa is galo
medziai.pop();
console.log(medziai);

//.unshift - iterpia masyve i prieki
medziai.unshift('pusis')
console.log(medziai);

medziai.unshift('kedras')
console.log(medziai);

// .shift pasalina pirekyje
medziai.shift()
console.log(medziai);

//.slice -atsikrato priekinemis ir galinemis reiksmemis

console.log([1, 2, 3].concat([4, 5]));
console.log([9, 99, 999, 9999].slice(1));

console.log([9, 99, 999, 9999].slice(-1));
console.log([9, 99, 999, 9999].slice(1, -1));

//.splice -isspaudina ka istrine
console.log([1, 2, 3, 4, 5, 6, 7].splice(2));

const sp1 = [1, 2, 3, 4, 5, 6, 7];
console.log(sp1);

const sp2 = sp1.splice(2, 3);
console.log(sp2);

console.log(sp1);
console.log();

const text = 'Labas rytas Lietuva';
const words = text.split(' ');
console.log(words);

const wordsFromS = text.split('s');
console.log(wordsFromS);
console.log();

// .join
const textWithDashes = words.join();
console.log(textWithDashes);

const texToStr = '' + words;
console.log(texToStr);

// .reverse

const rev  = [1, 2, 3];
console.log(rev);

rev.reverse();
console.log(rev);

rev.reverse();
console.log(rev);
console.log();


//Labas rytas Lietuva -- Lietuva rytas Labas

const lrl = 'Labas rytas Lietuva '
    .split(' ')
    .reverse()
    .join(' ');
console.log(lrl);
console.log();


// alus-- sula
const alus = 'alus'
    .split('')
    .reverse()
    .join('');
console.log(alus);
console.log();











