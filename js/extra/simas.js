const school = {
    name: "Baltijos Technologijų Institutas",
    classes: [
        {
            name: "1A",
            students: [
                { name: "Jonas", grades: [8, 7, 9, 10] },
                { name: "Ieva", grades: [6, 5, 8, 7] },
                { name: "Mantas", grades: [9, 10, 8, 9] }
            ]
        },
        {
            name: "1B",
            students: [
                { name: "Aistė", grades: [5, 6, 7, 8] },
                { name: "Dovydas", grades: [6, 7, 5, 6] },
                { name: "Tomas", grades: [8, 9, 10, 10] }
            ]
        },
        {
            name: "1C",
            students: [
                { name: "Lukas", grades: [9, 9, 10, 10] },
                { name: "Monika", grades: [7, 8, 6, 7] },
                { name: "Karolis", grades: [8, 7, 9, 10] }
            ]
        }
    ]
};

function average(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }

    return sum / list.length;
}

/**
 * 1. Parašykite funkciją calculateClassAverage(classObj), kuri priims klasės objektą ir grąžins jos vidurkį (visų mokinių individualių vidurkių vidurkis).
 */

function calculateClassAverage(classObj) {
    const studentsAverages = [];

    for (let s = 0; s < classObj.students.length; s++) {
        studentsAverages.push(average(classObj.students[s].grades));
    }

    return average(studentsAverages);
}

/**
 * 2. Parašykite funkciją calculateSchoolAverages(schoolObj), kuri apskaičiuos visų mokyklos klasių vidurkius ir grąžins juos masyve.
 */

function calculateSchoolAverages(schoolObj) {
    const averages = [];

    for (let c = 0; c < schoolObj.classes.length; c++) {
        averages.push(calculateClassAverage(schoolObj.classes[c]));
    }

    return averages;
}

console.log(calculateSchoolAverages(school));

/**
 * 3. Išrikiuokite klases pagal vidurkį (nuo didžiausio iki mažiausio) ir išveskite jas į konsolę formatu:
 * 1C - 8.5
 * 1A - 8.0
 * 1B - 6.5
 */

const classAverages = [];

for (let c = 0; c < school.classes.length; c++) {
    const average = calculateClassAverage(school.classes[c]);
    classAverages.push({
        name: school.classes[c].name,
        average: average,
    });
}

classAverages.sort((a, b) => b.average - a.average);
console.log(classAverages);

for (let a = 0; a < classAverages.length; a++) {
    console.log(`${classAverages[a].name} - ${classAverages[a].average.toFixed(1)}`);
}





for (let c = 0; c < school.classes.length; c++) {
    const schoolClass = school.classes[c];
    let classSum = 0;

    for (let s = 0; s < schoolClass.students.length; s++) {
        const student = schoolClass.students[s];
        let studentGradeSum = 0;

        for (let g = 0; g < student.grades.length; g++) {
            studentGradeSum += student.grades[g];
        }

        classSum += studentGradeSum / student.grades.length;
    }

    const classAverage = classSum / schoolClass.students.length;
    console.log('-->', classAverage);
}

/**
 * Užduotis: "Miesto eismo analizė"
 * 
 * Jūsų tikslas - parašyti kelias funkcijas, kurios analizuos miesto transporto srautą.
 * Įsivaizduokite, kad turime duomenų apie įvairius miesto rajonus, jų populiacija ir eismo intensyvumą.
 * Turėsite apdoroti šiuos duomenis ir pateikti išvadas apie transporto srautą.
 */


/**
 * Turite masyvą, kuris reprezentuoja miesto rajonus ir jų populiaciją, transporto duomenis:
 * 
 * name - rajono pavadinimas
 * population - rajono gyventojų skaičius
 * traffic - masyvas, kuris parodo eismo intensyvumą (automobilių skaičius per valandą) kiekvieną savaitės dieną (pirmadienis - sekmadienis)
 */
const cityTraffic = [
    { name: "Senamiestis", population: 15000, traffic: [120, 85, 90, 70, 150, 200, 130] },
    { name: "Šnipiškės", population: 10000, traffic: [80, 60, 75, 95, 100, 120, 110] },
    { name: "Antakalnis", population: 20000, traffic: [100, 120, 140, 160, 180, 200, 220] },
    { name: "Žirmūnai", population: 25000, traffic: [200, 220, 250, 270, 300, 330, 350] },
    { name: "Lazdynai", population: 12000, traffic: [50, 70, 80, 90, 100, 120, 130] }
];


/**
 * [1] Vidutinis eismo srautas rajone
 * 
 * Sukurkite funkciją averageTraffic(region), kuri priima rajono objektą ir grąžina vidutinį eismo intensyvumą per savaitę.
 * 
 * Pvz.: averageTraffic(cityTraffic[0]) turėtų grąžinti 120.71 (suapvalinta iki dviejų skaičių po kablelio).
 */


/**
 * [2] Rajonas su didžiausiu vidutiniu eismu
 * 
 * Parašykite funkciją busiestRegion(data), kuri priima miesto duomenų masyvą ir grąžina rajono pavadinimą, kuriame vidutinis eismo intensyvumas yra didžiausias.
 * 
 * Pvz.: busiestRegion(cityTraffic) turėtų grąžinti "Žirmūnai".
 */


/**
 * [3] Eismo intensyvumas vienam gyventojui
 * 
 * Parašykite funkciją trafficPerPerson(region), kuri priima rajono objektą ir grąžina eismo srautą, tenkantį vienam gyventojui per savaitę.
 * 
 * Pvz.: trafficPerPerson(cityTraffic[0]) turi grąžinti 0.056 (suapvalinta iki trijų skaičių po kablelio).
 */