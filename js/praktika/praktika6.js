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






/*Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum 
// of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3*/

//const  = arrayMadness([4, 5, 6], [1, 2, 3]);
function arrayMadness(a, b) {
  const sum1 = a.reduce((sum, number)=> sum + number **2, 0);
  const sum2 = b.reduce((sum, number)=> sum + number **3, 0);
  return sum1 > sum2;
}
console.log('1 task');

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
console.log('--------------');

/*Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1 + 7 + 12 = 20

1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++ ) {
        if( arr[i] > 0) {
            sum+= arr[i];
        }
       }
       return sum;
}
console.log('2 task');
console.log(positiveSum([1, -4, 7, 12]));
console.log('--------------');
   
/*What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

function addWords(str) {
    return str.split(' ').map(n => `${n} ${n.length}`);
}
console.log('3 task');
console.log(addWords("apple ban")); 
console.log(addWords("you will win")); 
console.log('--------------');

const addLength = (str) => { 
    str = str.split (' ');
    for (let i = 0; i < str.length; i++) {
         str[i] += ' ' + str[i].length;      
     }
    return str;
  }
  console.log('3 task_kitas budas');
  console.log(addLength("apple ban")); 
  console.log(addLength("you will win")); 
  
