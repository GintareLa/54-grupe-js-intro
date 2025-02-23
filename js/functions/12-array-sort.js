//metodas arary
//.sort (surikiuoja, kaip pagal abecele)

const numbers = [1, 10, 2, 8, 105, 201, 4, 6, 319, 500, 5];
const words = ['a,', 'b', 'de', 'ak', 'eeee', 'ab', 'bo', 'bh' ]; 
const list = [ [2, 2], [], [3, 3, 3], [1], [4, 4], [2], [2, 1]];
console.log(numbers);
console.log('---------------');


numbers.sort();
console.log(numbers);
console.log('---------------');

words.sort();
console.log(words);
console.log('---------------');

list.sort();
console.log(list);
console.log('---------------');

// surikiuoja .sort ir padaro is eiles nuo maziausio iki didziausio
// (a, b) => a - b);
numbers.sort((a, b) => a - b);
console.log(numbers);
console.log('---------------');

// surikiuoja .sort ir padaro is galo nuo didziausio iki maziausio
//  (a, b) => b -a);
numbers.sort((a, b) => b - a);
console.log(numbers);
console.log('---------------');

//mazesnis -1
//lygus 0
//didesnis +1
 // .sort iskrenta kad reiksme 0, tada jis juos palieka
 // .sort iskrenta kad reiksme -1, tada jis juos palieka  
 //.sort iskrenta kad reiksme +1, tada jis iskelia i prieki

 //(7, 5) => 7-5 = 2
 //(5, 7) = => 5-7 = -2

 words.sort();
 console.log(words);

 //.reverse () padaro is kitos puses zodzius
 words.sort().reverse();
 console.log(words);
 console.log('---------------');

list.sort();
console.log(list);
console.log();

//is eiles surikiuoja
list.sort((a, b) => a.length - b.length);
console.log(list);
console.log();

//is galo surikiuoja
list.sort((a, b) => b.length - a.length);
console.log(list);
console.log('---------------');

//su objektais
const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
    { name: 'Petras', age: 77, isMarried: false },
];
console.log(students);
console.log('1-------------');

// .sort -pagal amziu nuo jauniausio
students.sort((a, b) => a.age - b.age);
console.log(students);
console.log('2-------------');

// .sort -pagal amziu nuo seniausio
students.sort((a, b) => b.age - a.age);
console.log(students);
console.log('3-------------');

//.sort  - pagal ilgiausia varda
students.sort((a, b) => b.name.length - a.name.length);
console.log(students);
console.log('4-------------');

//.sort  - pagal trumpiausia varda
students.sort((a, b) => a.name.length - b.name.length);
console.log(students);
console.log('5-------------');


//mazesnis -1
//lygus 0
//didesnis +1
 // .sort iskrenta kad reiksme 0, tada jis juos palieka
 // .sort iskrenta kad reiksme -1, tada jis juos palieka  
 //.sort iskrenta kad reiksme +1, tada jis iskelia i prieki
/*const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
    { name: 'Petras', age: 77, isMarried: false },
];
*/
 //vardus pagal abecele su ternary 1 budas
students.sort((a, b) => a.name < b.name? -1 :  a.name === b.name? 0 : 1);
console.log(students);
console.log('6-------------');

 //vardus pagal abecele su ternary 2 budas
function sortStudentsByName(a,b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name === b.name) {
        return ;
    } else {
        return 1;
    }
}
students.sort(sortStudentsByName);
console.log(students);

