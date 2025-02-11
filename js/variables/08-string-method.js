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
console.log();

//console.log(`Zodyje "vasara" yra 3 "a" raides`);
//const word2 = 'terminatorius';
/*
console.log(letterCount(word2, 'x'));
console.log(letterCount(word2, 't'));
console.log(letterCount(word2, 'a'));
console.log(letterCount(word2, 'r'));
*/
/*
function letterCount(text, searchSymbol){
    let count = 0;
    for (let i = 0; i< text.length; i++) {
        if (text[i] === searchSymbol) {
            count++;
        }
    }
    return `Zodyje "${text}" yra ${count} "${searchSymbol}"`;
}
*/


//metodas toUpperCase/toLowercase

console.log('pomidoras'.toUpperCase());
console.log('3 pomidorai ir 4 AGurkai'.toUpperCase());

console.log('POMIDORAS'.toLowerCase());
console.log('3 POMIDORAI ir 4 AGURKAI'.toLowerCase());

console.log( 562156, (562126).toString(), '' + 562156);
const randomNumber = 562156;
console.log(randomNumber);
console.log(randomNumber.toString());
console.log('' + randomNumber);
console.log(`${randomNumber}`);

console.log(true);
console.log(true.toString());
console.log('' + true);
console.log(`${true}`);

console.clear();
console.log('<','pomidoras', '>');
console.log('pomidoras                 ');
console.log('<',             'pomidoras', '>');
console.log('                 pomidoras ');

const formUsername = ' Grietine   ';
console.log(formUsername.length);
console.log(formUsername.replaceAll(' ','').length);

const hi = '   Labas    rytas,    Lietuva!    ';
console.log(
    hi
    .trim()
    .replaceAll('   ', ' ')
    .replaceAll('   ', ' ')
);
console.log(hi.includes('  '));

//metodas .split//
console.log('pirmas antras trecias'.split(' '));
console.log('pirmas antras trecias'.split(' ').length);

