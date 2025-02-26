

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

  /*
Complete the function that receives as input a string, and produces 
outputs according to the following table:
Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the 
function is not any of the values in the table, then the return value should be "Beer".
*/
/*
{
//{function getDrinkByProfession(param) {
  const newParam = param.split(' ');
  const newParam1 = param.toLowerCase();
  switch(newParam1) {
    case "jabroni":
      newDrink = "Patron Tequila"
      break;
    case "school counselor":
      newDrink = "Anything with Alcohol"
      break;
    case "programmer":
      newDrink ="Hipster Craft Beer"
      break;
    case"bike gang member":
      newDrink = "Moonshine"
      break;
    case "politician":
      newDrink = "Your tax dollars"
      break;
    case "rapper":
      newDrink = "Cristal"
      break;
      default:
      return "Beer";
  }
    return newDrink;
}

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars");
console.log(getDrinkByProfession("rapper"), "Cristal");
console.log(getDrinkByProfession("pundit"), "Beer");
console.log(getDrinkByProfession("Pug"), "Beer");
console.log('-----------------');
/*
}

/*
Code as fast as you can! You need to double the integer and return it.

console.log('6 task_homeworks');
function doubleInteger(i) {
 const daugyba = i * i ;
   return daugyba;
 }
 console.log(doubleInteger(8));
 console.log('-----------------');
*/
 /*
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, 
he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return 
the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/
 function litres(time) {
  needToDrink = Math.trunc(time * 0.5);
  return needToDrink;
}
console.log('7 task_homeworks');
console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');
console.log('-----------------');

/*
You were camping with your friends far away from home,
but when it's time to go back, you realize that your fuel
 is running out and the nearest pump is 50 miles away! You 
 know that on average, your car runs on about 25 miles per gallon. 
 There are 2 gallons left.
Considering these factors, write a function that tells you if it is 
possible to get to the pump or not.
Function should return true if it is possible and false if not.
*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {return distanceToPump <= mpg * fuelLeft};
console.log('8 task_homeworks');
console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
console.log('-----------------');

/*Complete the function/method so that it returns the url 
with anything after the anchor (#) removed.
Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/
function removeUrlAnchor(url) {
  return url.split('#')[0];
  }
console.log('9 task_homeworks');
console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
console.log('-----------------');    

/*
Write a function which converts the input string to uppercase.
*/

function makeUpperCase(str) {
  let newStr = str.toUpperCase(); 
  return newStr;
}

console.log('10 task_homeworks');
console.log(makeUpperCase("hello"), "HELLO");
console.log(makeUpperCase("Hello"), "HELLO");
console.log(makeUpperCase("HELLO"), "HELLO");
console.log(makeUpperCase(""),           "");
console.log('-----------------');   

/*
Make a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most 
creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?*/
const greet = a => a;
console.log('11 task_homeworks');
console.log(greet('hello world!'));
//codewars praejo sitas variantas
const greetCodeWars = () => 'hello world!';
console.log(greetCodeWars());
console.log('-----------------');  

/*
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.
Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

function reverseWordsVC(strVC){
  let newSentence = '';
  for(let i = strVC.lenght - 1; i = 0; i--)
    newSentence+= strVC[i];
  return newSentence; 
}
console.log('12 task_homeworks');
console.log(reverseWords("hello world!"                 ),  "world! hello")
console.log(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
console.log(reverseWords("foobar"                       ),  "foobar")
console.log(reverseWords("kata editor"                  ),  "editor kata")
console.log(reverseWords("row row row your boat"        ),  "boat your row row row")
console.log(reverseWords(""                             ),  "")
console.log('-----------------'); 
//codewars praejo sitas variantas
function reverseWords(str) {
  let words = str.split(' ');
  let reversedWords = words.reverse();
  return reversedWords.join(' ');
}
console.log(reverseWords("hello world!"                 ),  "world! hello")
console.log(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
console.log(reverseWords("foobar"                       ),  "foobar")
console.log(reverseWords("kata editor"                  ),  "editor kata")
console.log(reverseWords("row row row your boat"        ),  "boat your row row row")
console.log(reverseWords(""                             ),  "")
console.log('-----------------'); 

/*While making a game, your partner, Greg, decided to create a function 
to check if the user is still alive called checkAlive/CheckAlive/check_alive.
 Unfortunately, Greg made some errors while creating the function.
checkAlive/CheckAlive/check_alive should return true if the player's
 health is greater than 0 or false if it is 0 or below.
The function receives one parameter health which will always be a whole 
number between -10 and 10.*/
function checkAlive (health) {
    if (health <= 0) {
      return false;
    } 
       return true;
    }
console.log('13 task_homeworks');
console.log(checkAlive(10), true);
console.log(checkAlive(-10), false);
console.log(checkAlive(0), false);
console.log('-----------------'); 

/*
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program 
to greet everyone as they come aboard. It is your job to fix the code 
and get the program working again!*/

function sayHello(name) {
    let newName = 'Hello' + ', ' + name;
    return newName;
}
console.log('14 task_homeworks');
console.log(sayHello('Mr. Spock'));
console.log(sayHello('Captain Kirk'));
console.log(sayHello('Liutenant Uhura'));
console.log(sayHello('Dr. McCoy'));
console.log('-----------------'); 

/*Make a function that returns the value multiplied by 50 and increased by 6. 
If the value entered is a string it should return "Error".
*/
function problem(x) {
    if (typeof x === 'string') {
       return 'Error';
    }
    let result = x * 50 + 6; 
    return result;
}
    console.log('15 task_homeworks');
    console.log(problem("hello"), "Error");
    console.log(problem(1), 56);
    console.log(problem(5), 256);
    console.log(problem(0), 6);
    console.log(problem(1.2), 66);
    console.log(problem(3), 156);
    console.log(problem("RyanIsCool"), "Error");
    console.log(problem(-3), -144);
    console.log(problem(""), "Error");
    console.log(problem(0.03), 7.5);
    console.log('-----------------');

/*Finish the solution so that it sorts the passed in array of numbers.
 If the function passes in an empty array or null/nil value then it s
 hould return an empty array.
For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(nums) {
   if (nums === null || nums === undefined) {
    return [];
    }
    if (!Array.isArray(nums)) {
    return [];
    }
  let naujas = nums.sort((a, b) => a - b);
    return naujas;
  }
  console.log('15 task_homeworks');
  console.log(solution([1,2,3,10,5]), [1,2,3,5,10]);
  console.log(solution(null), []);
  console.log(solution([]), []);
  console.log(solution([20, 2, 10]), [2,10,20]);
  console.log(solution([2, 20, 10]), [2,10,20]);
  console.log('-----------------');

  /*Very simple, given a number (integer / decimal / both depending on the language),
 find its opposite (additive inverse).
 */
 function opposite(number) {
   if (number < 0) {
    let newNumb = Math.abs(number);
    return newNumb;
   } else {
    return (-number);
   }
 }
console.log('16 task_homeworks');
console.log(opposite(-4.25));
console.log(opposite(3));
console.log('-----------------');
console.clear();
/*

Complete the function that takes an array of words.
You must concatenate the nth letter from each word to construct a new 
word which should be returned as a string, where n is the position of the word in the list.
For example:
["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; 
and each word will have enough letters.
*/

function nthChar(words) {
     const wordsResult = words.map(a=> a[0]);
  return wordsResult;
 }

 console.log(nthChar(['yoda', 'best', 'has']));
 



