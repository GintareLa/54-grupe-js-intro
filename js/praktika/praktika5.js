// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================
const numbers1 = [1, 2, 3, 4, 5];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let sum = 0;
for (let i = 0; i <= numbers1.length; i++) {
    sum += i;
}
 console.log('Užduotis 1 su for');
 console.log(sum);
 console.log('.............');
 
// Sprendimas su array metodu (reduce):
// Jūsų kodas čia...


 
// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
const numbers2 = [1, 2, 3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let countS = 0;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        countS++;
    }
} 
console.log('Užduotis 2 su for');
console.log(`Masyve lyginiu skaiciu yra: ${countS} `);
console.log('.............'); 
// Sprendimas su filter metodu:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
const numbers3 = [10, 5, 20, 8, 15];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
    let largest = 0;
    for (let i = 0; i < numbers3.length; i++) {
        if (largest < numbers3[i]) { 
        largest = numbers3[i]
     }   
     
    }
    console.log('Užduotis 3 su for');
    console.log(largest);
    console.log('.............');
 
// Sprendimas su Math.max ir spread operator:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let count = 0;
for (let i = 0; i < numbers4.length; i++) {
    if(numbers4[i] === 2) {
        count++;
    }
   
} 
console.log('Užduotis 4 su for');
console.log(`Masyve "${target}" pasikartoja: ${count} kartus`);  
console.log('.............');
// Sprendimas su filter metodu:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
const numbers5 = [-3, 0, 5, -1, 8, -2];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let teigiami = [];
let neigiami = [];
for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] >= 0) {
        teigiami.push(numbers5[i]);
    } else {
        neigiami.push(numbers5[i]);
    }    
}
console.log('Užduotis 5 su for');
console.log(teigiami);
console.log(neigiami);
console.log('.............'); 
// Sprendimas su filter metodu:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
const numbers6 = [1, 2, 3, 4];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let sandauga = 1;
for (let i = 0; i < numbers6.length; i++) {
  sandauga = sandauga * numbers6[i]  
} 
console.log('Užduotis 6 su for');
console.log(sandauga);
console.log('.............'); 
// Sprendimas su reduce metodu:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
const array7 = [1, 2, 3, 4, 5];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
let apverstas = [];
for (let i = 0; i < array7.length; i++) {
    apverstas = array7.reverse();
}
console.log('Užduotis 7 su for');
console.log(apverstas);
console.log('.............');  
// Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...
 
 
// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. 
// Jei neranda, grąžinti -1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =============================================
const array8 = ['a', 'b', 'c', 'd'];
const searchElement = 'c';
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
console.log('Užduotis 8 su for');
for (let i = 0; i < array8.length; i++) {
    console.log(array8[i].includes('c')) ? "yra" : "(-1)"; 
}


console.log('************');
console.log('.............');  


// Sprendimas su indexOf metodu:
// Jūsų kodas čia...
 
 
// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =============================================
const array9 = [1, 3, 5, 7, 9];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
for (let i = 0; i < array9.length; i++) {
   if (array9[i]< array9[i]) {
 return true;
   }
} 
console.log('Užduotis 9 su for');
console.log(array9);
console.log('************');
console.log('.............'); 
// Sprendimas su every metodu:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra 
// pradinio masyvo elemento kvadratas
// =============================================
const numbers10 = [1, 2, 3, 4, 5];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const numbers2x = [];

for (let i = 0; i < numbers10.length; i++) {
    numbers2x.push(numbers10[i] * 2);
}
console.log('Užduotis 10 su for');
console.log(numbers2x);
console.log('.............'); 

// Sprendimas su map metodu:
// Jūsų kodas čia...
const naujasMasyvas = numbers10.map(n=> n*n);
console.log('Užduotis 10 su map');
console.log(naujasMasyvas);
console.log('.............');  
 
// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
const numbers11 = [1, 2, 3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let countnum = 0;
for (let i = 0; i < numbers11.length; i++) { 
    if (numbers11[i] % 2 != 0) {
        countnum = countnum + numbers11[i];
    }
}
console.log('Užduotis 11 su for');
console.log(countnum);
console.log('.............');  
// Sprendimas su filter ir reduce:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
const numbers12 = [10, 20, 30, 40, 50];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let sumaSkaiciu = 0;
let vidurkis = 0;
 for (i = 0; i < numbers12.length; i++) { 
    sumaSkaiciu = sumaSkaiciu + numbers12[i];
    vidurkis = sumaSkaiciu / numbers12.length;
     }
 
 console.log('Užduotis 12 su for');
 console.log(vidurkis);
 console.log('.............'); 
 
// Sprendimas su reduce:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
const numbers13 = [1, 2, 3, 2, 4, 3, 5];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 
 
// Sprendimas su Set:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =============================================
const numbers14 = [5, 3, 9, 1, 7];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
/*let largest2 = 0;
for (i = 0; i < numbers14.length; i++) { 
     if (largest2 < numbers14[i]) {
         largest2 = numbers14[i]
   }
 }
 
 console.log('Užduotis 14 su for');
 console.log(largest2);
 console.log('.............'); 
 */
// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20;
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let count5 = 0;
for (let i = 0; i < numbers15.length; i++) {
    if(numbers15[i] > 20) {
        count5++;
    }
} 
console.log('Užduotis 15 su for');
console.log(`Masyve didesni uz ${threshold} yra: ${count5}`);
console.log('.............'); 
// Sprendimas su filter:
// Jūsų kodas čia...
 
 
// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

// Sprendimas su for ciklu:
// Jūsų kodas čia...
const sujungimas = arrayA.concat(arrayB);
for (let i = 0; i < sujungimas.length; i++) {
   }

console.log('Užduotis 16 su for');
console.log(sujungimas);
console.log('.............'); 
// Sprendimas su concat metodu:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
const nestedArray = [[1, 2], [3, 4], [5, 6]];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 
// Sprendimas su flat metodu:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let bendras = [];
for(let i = 0; i < arrA.length; i++) {
    if (arrB.includes(arrA[i])) {
     bendras.push(arrA[i]);
    }
}
console.log('Užduotis 18 su for');
console.log(bendras);
console.log('.............'); 
// Sprendimas su filter:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į
//  "lyginiai" ir "nelyginiai"
// =============================================
const numbers19 = [1, 2, 3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let lyginiai = [];
let nelyginiai = [];
for (let i = 0; i < numbers19.length; i++) {
    if (numbers19[i] % 2 === 0) {
      lyginiai.push(numbers19[i]);  
    } else {
       nelyginiai.push(numbers19[i]);
    }
} 
console.log('Užduotis 19 su for');

console.log(lyginiai);
console.log(nelyginiai);
console.log('.............'); 
// Sprendimas su reduce:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio
//  masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
const numbers20 = [1, 2, 3, 4];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 
 
// Sprendimas su reduce:
// Jūsų kodas čia...
 
 