

console.log();
const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

///du budai, kaip isspausdinti
console.log(jonas);
console.log(jonas.name);
console.log(jonas.age);
console.log(jonas.isMarried);
console.log();

console.log(jonas['name']);
console.log(jonas['age']);
console.log(jonas['isMarried']);
console.log();

const luckyNumbers = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6, 
};
//objekte raktai tai yra tekstai
console.log(luckyNumbers);
console.log(luckyNumbers['0'], luckyNumbers[0]);
console.log(luckyNumbers['1'], luckyNumbers[1]);
console.log(luckyNumbers['2'], luckyNumbers[2]);
console.log(luckyNumbers['3'], luckyNumbers[3]);
console.log(luckyNumbers['4'], luckyNumbers[4]);
console.log();
//dedasi kableliai po kiekvienos eilutes
const crazy = {
    title: 'pavadinimas....',
    isMarried: true,
    '7': 'septyni',
    'atskiri zodziai': 'daug atskiru zodziu',
    new: 'Kazkas naujo',
    new2: 'Kazkas naujo 2',
};

console.log(crazy);
console.log();
console.log(crazy['title']);
console.log(crazy['7']);
console.log(crazy['isMarried']);
console.log(crazy['atskiri zodziai']);
console.log();

console.log(crazy[7]);
console.log(crazy.title);
console.log(crazy.isMarried);
console.log();

const maryte = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    marks: [10, 2, 8, 4, 6],
    parents: [
        {
            name: 'Juozapas',
            age: 112,
            isMarried: true,
            phone: 861475214,
            marks: [10, 9, 8, 7, 6, 5, 4],
        },
        {
            name: 'Marija',
            age: 110,
            isMarried: true,
            phone: 861475214,
            marks: [10, 9, 8, 3, 4, 5],
        },
    ],
};
console.log(maryte);

const marksCount = maryte.marks.length;
let marksTotalSum = 0;

for (let i = 0; i < marksCount; i++) {
    marksTotalSum += maryte.marks[i];
}

const maryteMarksAverage = marksTotalSum / marksCount;

console.log('Pazymiu suma:', marksTotalSum);
console.log('Pazymiu kiekis:', marksCount);
console.log('Marytes pazymiu vidurkis:', maryteMarksAverage);
console.log();


console.log(maryte.parents.length);

console.log(maryte.parents[0].name);
console.log(maryte.parents[1].name);
console.log();


for (let i = 0; i < maryte.parents.length; i++) {
    const parent = maryte.parents[i];

    console.log(parent.name);
    console.log(parent.age);
    console.log(parent.isMarried);
    console.log(parent.marks);
    
}
console.log();

const countFatherMarks = maryte.parents[0].marks.length;
let marksFatherVisaSuma = 0;
for (let i = 0; i < maryte.parents[0].marks.length; i++) {
   marksFatherVisaSuma += countFatherMarks;
   averageFatherMarks = marksFatherVisaSuma / countFatherMarks;
}

console.log('Marytes tevo Juozapo pazymiu suma:', marksFatherVisaSuma);
console.log('Marytes tevo Juozapo pazymiu kiekis:', countFatherMarks);
console.log('Marytes tevo Juozapo pazymiu vidurkis:', averageFatherMarks);
console.log();

const countMotherMarks = maryte.parents[1].marks.length;
let marksMotherTotal = 0;
for (let i = 0; i < maryte.parents[1].marks.length; i++) {
   marksMotherTotal += countMotherMarks;
   averageMotherMarks = marksMotherTotal / countMotherMarks;
}

console.log('Marytes mamos Marijos pazymiu suma:',  marksMotherTotal);
console.log('Marytes mamos Marijos pazymiu kiekis:', countMotherMarks);
console.log('Marytes mamos Marijos pazymiu vidurkis:',  averageMotherMarks);
console.log();

