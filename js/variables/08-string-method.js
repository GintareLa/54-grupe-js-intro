//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw

const firstname = 'Kulverstukas';
const nameSize = firstname.length;

console.log(firstname, firstname.length);
console.log(firstname, nameSize);

console.log();


//Kulverstukas name is 12 letters long.//

const chuckName1 = `${firstname} name is ${firstname.length} letters.`

console.log();
console.log(chuckName1);

console.log('-->', firstname[0]);
console.log('-->', firstname[1]);
console.log('-->', firstname[2]);
console.log('-->', firstname[4]);
console.log('-->', firstname[5]);
console.log('-->', firstname[6]);
console.log('-->', firstname[7]);
console.log('-->', firstname[8]);
console.log('-->', firstname[9]);
console.log('-->', firstname[10]);
console.log('-->', firstname[11]);
console.log('-->', firstname[12]);

console.log();
//is kaires i desine, is eiles//
const vardas = 'Pomidoras'
for (let i = 0; i < vardas.length; i++) {
    console.log('-->', i, vardas[i]);
}
//atvirksciai//
console.log();
for (let i = vardas.length -1; i>= 0 ; i--) {
    console.log('-->', i, vardas[i]);
}

console.log();
const word = 'vasara';
let countA = 0;
let countV = 0;
let countS = 0;
let countX = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a') {
        countA++;
    }
    if (word[i] === 'v') { 
       countV++;
    }
    if (word[i] === 's') { 
       countS++;
    }   
    if (word[i] === 'x') { 
        countX++;
    }
  
}    
console.log(`Zodyje "${word}" yra ${countA} "a" raides`);
console.log(`Zodyje "${word}" yra ${countV} "v" raides`);
console.log(`Zodyje "${word}" yra ${countS} "s" raides`);
console.log(`Zodyje "${word}" yra ${countX} "x" raides`); 
console.log('----------------------');

// vasara -> a?
// vasara -> v?
// vasara -> r?
// vasara -> x?

// terminator x -> a?
// terminator x -> t?
// terminator x -> m?


const word1 = 'vasara';
const word2 = 'terminator x';

console.log(letterCount(word1, 'a'));
console.log(letterCount(word1, 'v'));
console.log(letterCount(word1, 'r'));
console.log(letterCount(word1, 'x'));
console.log('----------------------');
console.log(letterCount(word2, 'x'));
console.log(letterCount(word2, 't'));
console.log(letterCount(word2, 'a'));
console.log(letterCount(word2, 'r'));
console.log('----------------------');


function letterCount(text, searchSymbol) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '' + searchSymbol) {
            count++;
        }
    }
    return `Zodyje "${text}" yra ${count} "${searchSymbol}" raides.`;
}
console.log(letterCount('Mano tel nr yra 8612345678', '8'));
console.log('----------------------');

function doesTextIncludeSymbol(text, symbol) {
    const end = text.length;

    for (let i = 0; i < end; i++) {
        if (text[i] === symbol) {
            return true;
        }
    }

    return false;
}

console.log(doesTextIncludeSymbol('vasara', 'a'));
console.log(doesTextIncludeSymbol('vasara', 'g'));
console.log(doesTextIncludeSymbol('terminator x', 'g'));
console.log(doesTextIncludeSymbol('terminator x', 'x'));
console.log(doesTextIncludeSymbol('terminator x', 'e'));
console.log(doesTextIncludeSymbol('terminator x', 'h'));
console.log(doesTextIncludeSymbol('65845254', '9'));
console.log(doesTextIncludeSymbol('65845254', '4'));

console.log('----------');

console.log('vasara'.includes('a'));
console.log('vasara'.includes('g'));
console.log('vasara'.includes('v'));
console.log('vasara'.includes('r'));
console.log('vasara'.includes('x'));
console.log('terminator x'.includes('x'));
console.log('terminator x'.includes('g'));

console.log('----------');

function symbolAtPosition(text, pos) {
    const index = pos >= 0 ? pos : (text.length + pos);
    return text[index];
}

// **********************  STRINGU METODAI *******************************************
//*** .at()/ .charAt()/.charCodeAt()/string.fromCharCode()/.concat()/.endsWith()/.startsWith()/.includes()/.indexOf()/.repeat()/
// .replace()/.replace.All()/.slice()/.toUpperCase()/.toLowercase()/ .toString()/.split()/.trim()/.trimStart()/***
//
// yra keli budai/metodai isskirti stringe raides/ zodis.at(0)/ zodis[0]/ f-jos pavadinimas(zodis, 0)
//.at metodas
const p = 'pomidoras';
console.log(p.at(0), p[0], symbolAtPosition(p, 0));
console.log(p.at(1), p[1], symbolAtPosition(p, 1));
console.log(p.at(2), p[2], symbolAtPosition(p, 2));

// tokios pozicijos zodyje nera, todel reiksme ateina undefined
console.log(p.at(22), p[22], symbolAtPosition(p, 22));

// jei norima stringa is kitos puses atvaizduoti, naudojami zodis.at(-1)/ zodis[zodis.lenght 1]/f-jos pavadinimas(zodis, -1)
console.log(p.at(-1), p[p.length - 1], symbolAtPosition(p, -1));
console.log(p.at(-2), p[p.length - 2], symbolAtPosition(p, -2));
console.log(p.at(-3), p[p.length - 3], symbolAtPosition(p, -3));

// tokios pozicijos zodyje nera, todel reiksme ateina undefined
console.log(p.at(-33), p[p.length - 33], symbolAtPosition(p, -33));

console.log('----------');
// kitas metodas .charAt(), jei gerai suprantu, jis paremtas tik iki 0 ir minusiniu poziciju negrazina/undefined
console.log('pomidoras'.charAt(0));
console.log('pomidoras'.charAt(1));
console.log('pomidoras'.charAt(2));
console.log('pomidoras'.charAt(3));
console.log('pomidoras'.charAt(-1));
console.log('pomidoras'.charAt(-2));
console.log('pomidoras'.charAt(-3), 'pomidoras'[-3]);

console.log('----------');
// metodas .charCodeAt(), grazina kurioje pozicijoje yra spec lokacijoje 
console.log('ABCDEF'.charCodeAt(0));
console.log('ABCDEF'.charCodeAt(1));
console.log('ABCDEF'.charCodeAt(2));
console.log('Z'.charCodeAt(0));
console.log('abcdef'.charCodeAt(0));
console.log('abcdef'.charCodeAt(1));
console.log('abcdef'.charCodeAt(2));
console.log('----------');
//metodas string.fromCharCode()
console.log(String.fromCharCode(91, 92, 93, 94, 95, 96));
console.log(String.fromCharCode(333));
console.log(String.fromCharCode(222));
console.log(String.fromCharCode(2222));
console.log(String.fromCharCode(22222));
console.log(String.fromCharCode(222222));
// metodas .concat() Grąžina eilutę, kurioje yra dviejų ar daugiau eilučių sujungimas.
console.log('----------');
console.log('pomidoras'.concat('aaa'));
console.log('pomidoras'.concat('aaa', 'bbb'));
console.log('pomidoras' + 'aaa' + 'bbb');

console.log('----------');
// metodas .endsWith()
// Grąžina true, jei paieškosEilutės elementų seka, konvertuota į eilutę, yra tokia pati kaip atitinkami šio objekto elementai (konvertuoti į eilutę), 
// prasidedantys nuo endPosition – ilgis(this). Kitu atveju grąžina false.
console.log('pomidoras'.endsWith('aaa'));
console.log('pomidoras'.endsWith('a'));
console.log('pomidoras'.endsWith('s'));
console.log('pomidoras'.endsWith('as'));
console.log('pomidoras'.endsWith('ras'));
console.log('pomidoras'.endsWith('Ras'));
console.log('pomidoras'.endsWith('pomidoras'));
console.log('----------');
console.log('----------');
//metodas .startsWith()
//Grąžina true, jei paieškosEilutės elementų seka, konvertuota į eilutę, yra tokia pati kaip atitinkami šio 
// objekto elementai (konvertuoti į eilutę), pradedant nuo pozicijos. Kitu atveju grąžina false.
console.log('.startsWith');
console.log('pomidoras'.startsWith('a'));
console.log('pomidoras'.startsWith('p'));
console.log('pomidoras'.startsWith('pr'));
console.log('pomidoras'.startsWith('po'));
console.log('pomidoras'.startsWith('pom'));
console.log('pomidoras'.startsWith('pomidoras'));
console.log('----------');

console.log('.endsWith');
console.log('selfy.png'.endsWith('.png'));
console.log('selfy.png'.endsWith('.jpg'));
console.log('----------');

console.log('https://abc.lt'.startsWith('https://'));
console.log('http://abc.lt'.startsWith('http://'));
console.log('----------');
//metodas .includes()
//paziuri, ar yra ieskoma raide true, o jeigu nera, grazina false...
console.log('includes');
console.log('pomidoras'.includes('a'));
console.log('pomidoras'.includes('r'));
console.log('pomidoras'.includes('x'));
console.log('pomidoras'.includes('pom'));
console.log('pomidoras'.includes('ido'));
console.log('pomidoras'.includes('ras'));
console.log('----------');
// metodas .indexOf()
// kurioje vietoje yra ieskomas simbolis, raide...
console.log('indexOf');
console.log('pomidoras'.indexOf('a'));
console.log('pomidoras'.indexOf('r'));
console.log('pomidoras'.indexOf('x'));
console.log('pomidoras'.indexOf('pom'));
console.log('pomidoras'.indexOf('ido'));
console.log('pomidoras'.indexOf('ras'));
console.log('pomidoras'.indexOf('gg'));
console.log('----------');
//           012345
console.log('ffgghh'.indexOf('gg'));
console.log('----------');

console.log('pomidoras'.indexOf('o'));
console.log('pomidoras'.indexOf('o', 0));
console.log('pomidoras'.indexOf('o', 1));
//           012345
console.log('----------');
console.log('pomidoras'.indexOf('o', 2));
console.log('pomidoras'.indexOf('o', 6));
console.log('----------');
//           01234567891             
console.log('pomidoras storas'.indexOf('o', 2));
console.log('pomidoras storas'.indexOf('o', 7));
console.log('pomidoras storas'.indexOf('o', 12));
console.log('pomidoras storas'.indexOf('o', 13));
// .repeat -kartojimas() nurodant kieki
console.log('----------');
console.log(20, 'aaaaaaaaaaaaaaaaaaaa');
console.log(5, 'a'.repeat(5));
console.log(7, 'b-'.repeat(7));
console.log(7, 'labas, '.repeat(3));

console.log('----------');

let summer = 'vasara';
console.log(summer);
//.replace() - pakeicia viena raide.. kitu nurodytu simboliu
summer = summer.replace('a', '-');
console.log(summer);

summer = summer.replace('a', '-');
console.log(summer);
console.log('----------');

let bird = 'kikilis';
console.log(bird);
//. replaceAll - pakeicia viska stringe
bird = bird.replaceAll('k', '-=K=-');
console.log(bird);

bird = bird.replaceAll('=-', '').replaceAll('-=', '').replaceAll('K', 's');
console.log(bird);

console.log('Ananasas'.replaceAll('a', '-'));

console.log('----------');

//.slice() nupjauna nuo nurodytos vietos ir grazina , kas liko prie kursoriau, pvz jei 'pomidoras'.slice(1)=> liks omidoras
console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('----------');
//is galo su neigiama reiksme
console.log('pomidoras'.slice(-1));
console.log('pomidoras'.slice(-2));
console.log('pomidoras'.slice(-4));
console.log('----------');
// .slice nurodo nuo kurios reiksmes, nupjauti gala (kiek)
console.log('pomidoras'.slice(0, -4));
console.log('pomidoras'.slice(1, -1));
console.log('----------');


// mokytojas -> mokytoja
const text = 'Mokytojas atejo ir tare. Ryte mokytojas vaiksto.';
const textFemale = text
    .replaceAll('mokytojas', 'mokytoja')
    .replaceAll('Mokytojas', 'Mokytoja');

console.log(textFemale);
console.log('----------');

//metodas .toUpperCase()/.toLowercase()

console.log('pomidoras'.toUpperCase());
console.log('3 pomidorai ir 4 AGurkai'.toUpperCase());

console.log('POMIDORAS'.toLowerCase());
console.log('3 POMIDORAI ir 4 AGURKAI'.toLowerCase());
console.log('----------');

// .toString() -pavercia skaicius => stringus
console.log( 562156, (562126).toString(), '' + 562156);
const randomNumber = 562156;
console.log(randomNumber);
console.log(randomNumber.toString());
console.log('' + randomNumber);
console.log(`${randomNumber}`);
console.log('----------');

console.log(true);
console.log(true.toString());
console.log('' + true);
console.log(`${true}`);
console.log('----------');

console.log('<','pomidoras', '>');
console.log('pomidoras                 ');
console.log('<',             'pomidoras', '>');
console.log('                 pomidoras ');
console.log('----------');

const formUsername = ' Grietine   ';
console.log(formUsername.length);
console.log(formUsername.replaceAll(' ','').length);
console.log('----------');

const hi = '   Labas    rytas,    Lietuva!    ';
console.log(
    hi
    .trim()
    .replaceAll('   ', ' ')
    .replaceAll('   ', ' ')
);
console.log(hi.includes('  '));
console.log('----------');

//metodas .split()// butina nurodyti skyrikli, pagal kuri .split().Padalinkite eilutę į eilutes naudodami nurodytą skyriklį ir grąžinkite jas kaip masyvą.
console.log('pirmas antras trecias'.split(' '));
console.log('pirmas antras trecias'.split(' ').length);
console.log('----------');

const text123 = 'pirmas antras trecias';
const dictionary = text123.split(' ');
const wordsCount = dictionary.length;

console.log(text123);
console.log(dictionary);
console.log(wordsCount);
console.log(text123[0]);
console.log(text123[1]);
console.log(text123[2]);
console.log(dictionary[0]);
console.log(dictionary[1]);
console.log(dictionary[2]);
console.log('----------');

const js = `Array objects cannot use arbitrary strings as element indexes (as in an associative array) but must use nonnegative integers 
(or their respective string form). Setting or accessing via non-integers will not set or retrieve an element from the array list itself, 
but will set or access a variable associated with that array's object property collection. The array's object properties and list of array 
elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.`;

const sentence = js.split('.');
console.log(sentence);
console.log(sentence.length);


console.log('----------');

console.log('duona'.split('o'));
console.log('duona'.split('u'));
console.log('duona'.split('g'));
console.log('duona'.split('d'));
console.log('duona'.split('a'));
console.log('duona'.split('uo'));
console.log('duona'.split('uon'));
console.log('duona'.split('du'));

console.log('vasara'.split('s'));
console.log('vasara'.split('a'));

console.log('vasara'.split(''));
console.log('vasara'.length);