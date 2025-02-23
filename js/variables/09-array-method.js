/*
ARRAY -Arėjus, sąrašas, listas, masyvas, matrica
*/
//*******ARRAY METODAI*********
//Array.isArray()/.at()/.concat()/.flat()/.includes()/.indexOf()/.push()/.pop()/.unshift()/.shift()/.slice()/
//.splice()/.split()/.join()/.reverse()./.map()/.filter()/.reduce()/.sort()/.reference()

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
console.log('----------------------');

//Array metodai
//ArrayisArray nurodo boolean reiksme true ar false, atsakymas i kl ar tai yra array
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



console.log('------------');

const studentsAt = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsAt[0]);
console.log(studentsAt[1]);
console.log(studentsAt[2]);
console.log(studentsAt[3]);
console.log('------------');
console.log(studentsAt[studentsAt.length - 1]);
console.log(studentsAt[studentsAt.length - 2]);
console.log(studentsAt[studentsAt.length - 3]);
console.log(studentsAt[studentsAt.length - 4]);

console.log('------------');

//.at() grazina nurodytoje vietoje (), esancia reiksme
console.log(studentsAt.at(0));
console.log(studentsAt.at(1));
console.log(studentsAt.at(-1));
console.log(studentsAt.at(-2));
console.log('------------');


//.concat sujungia su 2 ar daugiau masyvu i viena
const studentsCon1 = ['Jonas', 'Maryte'];
const studentsCon2 = ['Petras', 'Ona'];

const studentsCon111 = studentsCon1.concat(studentsCon2);
console.log(studentsCon111);
console.log('------------');

const studentsCon222 = studentsCon2.concat(studentsCon1);
console.log(studentsCon222);
console.log('------------');

console.log([1].concat([2]));
console.log([1].concat([2]).concat([3]));
console.log([1].concat([2]).concat([3]).concat([4]));

console.log([1].concat([2], [3], [4]));
console.log('------------');


//.flat() -istraukia is skliaustu
const notFlat = [1, 2, 3, [4], [[[[[[[[5]]]]]]], 6]];
console.log(notFlat);
console.log(notFlat[0]);
console.log(notFlat[1]);
console.log(notFlat[2]);
console.log(notFlat[3]);
//istraukia [4] is [] skliaustu
console.log(notFlat[3][0]);
console.log('------------');
console.log(notFlat[4]);
console.log(notFlat[4][0]);
console.log(notFlat[4][1]);
console.log('------------');

console.log(notFlat.flat().flat());
console.log(notFlat.flat(Infinity));
console.log(notFlat);
console.log('------------');

//.includes() grazina boolean true arba false, 
// kai klausi ar yra tokia reiksme masyve;
const studentsInc = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsInc.includes('Chuck'));
console.log(studentsInc.includes('a'));
console.log(studentsInc.includes('Jonas'));
console.log(studentsInc.includes('ona'));
console.log(studentsInc.includes('Ona'));
console.log('------------');


//.indexOf() nurodo kurioje vietoje yra reiksme, jei jos nera, tada -1
const studentsIndex = ['Jonas', 'Ona', 'Maryte', 'Petras', 'Ona'];
console.log(studentsIndex.indexOf('Chuck'));
console.log(studentsIndex.indexOf('a'));
console.log(studentsIndex.indexOf('Jonas'));
console.log(studentsIndex.indexOf('ona'));
console.log(studentsIndex.indexOf('Ona'));

//nurodo kuria reiksme Ona ieskoti, siuo atveju 2, nes yra ne viena
console.log(studentsIndex.indexOf('Ona', 2));

//nurodo kuria reiksme Ona ieskoti, siuo atveju 5, bet kadangi 
//tokio nera, grazina -1
console.log(studentsIndex.indexOf('Ona', 5));
console.log('------------');


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
console.log('------------');


//.push - ideda i masyvo gala nauja reiksme
const medziai = [];
console.log(medziai);

medziai.push('ąžuolas');
console.log(medziai);

medziai.push('egle');
console.log(medziai);

medziai.push('berzas');
console.log(medziai);
console.log('------------');

//.pop -pasalina elementa is galo
medziai.pop();
console.log(medziai);

//.unshift - iterpia masyve i prieki
medziai.unshift('pusis')
console.log(medziai);

medziai.unshift('kedras')
console.log(medziai);
console.log('------------');

// .shift masyve pasalina priekyje
medziai.shift()
console.log(medziai);
console.log('------------');

//.slice -atsikrato priekinemis ir galinemis reiksmemis, priklausomai, kurioje vietoje pjausi.

console.log([1, 2, 3].concat([4, 5]));
console.log([9, 99, 999, 9999].slice(1));
console.log('------------');

console.log([9, 99, 999, 9999].slice(-1));
console.log([9, 99, 999, 9999].slice(1, -1));
console.log('------------');

//.splice -isspaudina ka istrine
console.log([1, 2, 3, 4, 5, 6, 7].splice(2));

const sp1 = [1, 2, 3, 4, 5, 6, 7];
console.log(sp1);
console.log('------------');

const sp2 = sp1.splice(2, 3);
console.log(sp2);
console.log('------------');

console.log(sp1);
console.log();
console.log('------------');

//.split() - masyva padalina i atskiras reiksme masyve pagal '', pagal raide
const text = 'Labas rytas Lietuva';
const words = text.split(' ');
console.log(words);

const wordsFromS = text.split('s');
console.log(wordsFromS);
console.log();
console.log('------------');

// .join - sujungia 
const textWithDashes = words.join();
console.log(textWithDashes);

const texToStr = '' + words;
console.log(texToStr);
console.log('------------');
// .reverse- apvercia masyve esancius elementus

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
console.log('------------');

// alus-- sula
const alus = 'alus'
    .split('')
    .reverse()
    .join('');
console.log(alus);
console.log();











