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
  console.log('-----------------');


  console.clear();

/*  Description:
The function is not returning the correct values. Can you figure out why?
Example (Input --> Output ):
3 --> "Earth"
*/
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }

console.log('1 task_homeworks');
console.log(getPlanetName(1));
console.log(getPlanetName(2));
console.log(getPlanetName(3));
console.log('-----------------');

/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
a can contain numbers or strings. x can be either.
Return true if the array contains the value, false if not.
*/
function check(a, x) {
    const end = a.length;

    for (let i = 0; i < end; i++) {
        if (a[i] === x) {
            return true; 
        }
    }
    return false;
}
console.log('2 task_homeworks');
console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(['t', 'e', 's', 't'], 'e'));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));
console.log('-----------------');

/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.
For example:
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski";
"Lech Wałęsa" -->  "Lech Walesa";
"Maria Skłodowska-Curie"--> "Maria Sklodowska-Curie";
*/
function correctPolishLetters (string) {
    return string
    .replaceAll('ą', 'a')
    .replaceAll('ć', 'c')
    .replaceAll('ę', 'e')
    .replaceAll('ł', 'l')
    .replaceAll('ń', 'n')
    .replaceAll('ó', 'o')
    .replaceAll('ś', 's')
    .replaceAll('ź', 'z')
    .replaceAll('ż', 'z');
  }
  console.log('3 task_homeworks');
  console.log(correctPolishLetters('Jędrzej Błądziński'));
  console.log(correctPolishLetters('Lech Wałęsa'));
  console.log(correctPolishLetters('Maria Skłodowska-Curie'));
  console.log('-----------------');

/*
Create a function that accepts a string and a single character, and returns an integer
of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string 
of length 1
*/

function strCount(str, letter) { 
    let count = 0; 
       for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count ++;
        }
  }
  return count;
}
console.log('4 task_homeworks');
console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('',      'z'));
console.log('-----------------');


/*
At the annual family gathering, the family likes to find the oldest living family 
member’s age and the youngest family member’s age and calculate the difference between them.
You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have 
an ascribed ‘age’ of 0. Return a new array (a tuple in Python) 
with [youngest age, oldest age, difference between the youngest and oldest age].
*/

function differenceInAges(ages) {
    ages.sort((a, b) => a - b);
    const young = ages[0];
    const old = ages[ages.length-1]; 
    const difference = old - young;
    return [young, old, difference];
   
  }
  console.log('5 task_homeworks');
  console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
  console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
  console.log('-----------------');