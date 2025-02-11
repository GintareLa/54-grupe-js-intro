
// Praktinių Užduočių sting metodai
//1 užduotis
// Sukurkite stringą ir išveskite jo ilgį.
const zodis = 'Slibinas';
const zodis1 = 'Tigras';

console.log('1 užduotis');
console.log(zodis.length);
console.log(zodis1.length);
console.log('.............');

//2 užduotis
// Konvertuokite stringą į didžiąsias raides.
const vardas = 'Gintare';

console.log('2 užduotis');
console.log(vardas.toUpperCase());
console.log('.............');

//3 užduotis
// Konvertuokite stringą į mažąsias raides.
const pav = 'PRASIDEDA EGZAMINAS';

console.log('3 užduotis');
console.log(pav.toLowerCase());
console.log('.............');

//4 užduotis
// Pašalinkite tarpus iš string'o pradžios ir pabaigos.
const sakinys = '     "Kaip gražu miške"      ';

console.log('4 užduotis');
console.log(sakinys.trim());
console.log('.............');

//5 užduotis
// Patikrinkite, ar stringas prasideda žodžiu "Hello".
const sentence = 'Hello World';

console.log('5 užduotis');
console.log(sentence.startsWith('Hello'));
console.log('.............');

//6 užduotis
// Patikrinkite, ar stringas baigiasi žodžiu "World".
const word = 'Hello World';

console.log('6 užduotis');
console.log(word.endsWith('Hello'));
console.log('.............');

//7 užduotis
// Raskite pirmąją žodžio "Java" poziciją string'e.
const zod = 'Java';

console.log('7 užduotis');
console.log(zod[0]);
console.log('.............');

//8 užduotis
// Raskite paskutinę žodžio "Java" poziciją string'e.
const zod1 = 'Java';

console.log('8 užduotis');
console.log(zod1.charAt(zod1.length - 1));
console.log('.............');

//9 užduotis
// Pakeiskite pirmąjį "Java" į "JS".
const uzrasas = 'Java';

console.log('9 užduotis');
console.log(uzrasas.replace('Ja' , 'JS'));
console.log('.............');

//10 užduotis
// Pakeiskite visus "Java" į "JS".
const uzrasas1 = 'Java';

console.log('10 užduotis');
console.log(uzrasas1.replaceAll('Java', 'JS'));
console.log('.............');
//11 užduotis
// Padalinkite stringą į masyvą pagal skyriklį.
const dalinti = 'Sugalvotą sakinį reikia padalinti.';
const dalin1 = dalinti.split(' ');

console.log('11 užduotis');
console.log(dalin1[2]);
console.log('--------------');
//12 užduotis
// Sujunkite du string'us į vieną.
const sak14 = 'Pagaliau';
const sak15 = 'atostogos';

console.log('12 užduotis');
console.log(sak14.concat (' ', sak15)) ;
console.log('.............');
//13 užduotis
// Išskirkite string'o dalį nuo 3 iki 8 simbolio.
const task = 'Today is a good day';

console.log('13 užduotis');
console.log(task.substring (3, 8 + 1)) ;
console.log('.............');

//14 užduotis
// Naudodami slice, paimkite paskutinius 5 string'o simbolius.
const task1 = 'Vel atejo pavasaris';

console.log('14 užduotis');
console.log(task1.slice(-5)) ;
console.log('.............');

//15 užduotis
// Naudodami substring, paimkite pirmus 5 string'o simbolius.
const task2 = 'Pagaliau prasidejo savaitgalis'

console.log('15 užduotis');
console.log(task2.substring(0, 5));
console.log('--------------');
//16 užduotis
// Sukurkite stringą, kuris pakartojamas 4 kartus.
const kartoti = 'Valio!';

console.log('16 užduotis');
console.log(kartoti.repeat(4));
console.log('.............');
//17 užduotis 
// Patikrinkite, ar string'e yra žodis "fun".
const sak = 'My friend is very fun';
const sak1 ='fun';
console.log('17 užduotis');
console.log(`The word "${sak1}" ${
      sak.includes(sak1) ? 'is' : 'is not'
    } in the sentence`,);
    console.log('.............');

//18 užduotis
// Išveskite stringą su kabutėmis "teksto" viduje.
const sk = 'Jis apsimeta kvailu';

console.log('18 užduotis');
console.log(sk.replace('kvailu','"kvailu"'));
console.log('.............');
//19 užduotis
// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.
let vardas1 = 'Marytė';
let uzvad = `Jono geriausia draugė vardu ${vardas1}`;

console.log('19 užduotis');
console.log(uzvad);
console.log('.............');
//20 užduotis !!!
// Pašalinkite tarpus tik iš string'o pradžios.
const uzd = `"     Please be silent"`;

console.log('20 užduotis');
console.log(uzd.trimStart());
console.log('.............');
console.log('.............');
console.log('.............');
console.clear();


//Papildomos užduotys (sprendimams naudokite string metodus ir for ciklą 
// (ne visuose uždaviniuose)):
// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų
//  didžiosios, o likusios mažosios.
function pakeistasTekstas(word1) {
  let firstWord = 'mokymo';
  let secondWord = 'centras';
   return word1 = firstWord[0].toUpperCase() + 'okymo' + ' ' + secondWord[0].toUpperCase() + 'entras';
   
}

console.log('1 Papildoma  užduotis');
console.log(pakeistasTekstas('mokymo centras'));
console.log('.............');


// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.
const sutrump = 'Javascript programavimas';

console.log('2 Papildoma užduotis');
console.log(sutrump.slice(0, 10) + '...') ;
console.log('.............');
// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.

function reverseWord(zodis5) {
  return zodis5.split('').reverse().join('');
}
console.log('3 Papildoma  užduotis');
console.log(reverseWord('Javascript'));
console.log('.............');



// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.
function pakeiskSintakse(vaisiai) {
  return vaisiai.replaceAll( ',' , ';');
}
console.log('4 Papildoma  užduotis');
console.log(pakeiskSintakse('obuolys, bananas, kivis'));
console.log('.............');
// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".

function suskaiciuokZodzius (reiksme) {
  return reiksme.split(' ').length;
}
console.log('5 Papildoma  užduotis');
console.log(suskaiciuokZodzius('Šiandien gera diena'));
console.log('.............');

// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.
const b = 'test@gmail.com';
const b1 ='@';
const b2 = '.com';
console.log('6 Papildoma užduotis');
console.log(`Simbolis "${b1}" ${
      b.includes(b1) ? 'yra' : 'nera'
    } sakinyje`,);
console.log(`Simbolis "${b2}" ${
      b.endsWith(b2) ? 'baigiasi' : 'nesibaigia'
    } sakiniu`,);    
    console.log('.............');


// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.
function pasalinkTarpa(tarpas) {
  if (tarpas.includes('')) {
  } return tarpas.trim();

}
console.log('7 Papildoma užduotis');
console.log(pasalinkTarpa(" 'JavaScript'"));
console.log('.............');


// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.
const simb1 = 'JavaScript';
const simb2 = 'javascript';
function palyginkZodzius() {
  if (simb1 === simb2) {
   return true; 
  } 
    return false;
  }

console.log('8 Papildoma užduotis');
console.log(palyginkZodzius(simb1, simb2));

console.log('.............');

// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".
// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.
// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.
// 12. Raskite pirmą žodį string'e "Hello World!".
console.log('12 Papildoma užduotis');
const fraze = 'Hello World';
console.log(fraze.startsWith('Hello'));
console.log('.............');

// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.

const stringas = 'JavaScript';

console.log('13 Papildoma užduotis');
console.log(stringas.slice(-3));
console.log('.............');
 
// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.
// 15. Tekste "mokytojas" pakeiskite pabaigą į "ėja", kad gautumėte "mokytoja".
const text1 = 'Siandien mokytojas puikios nuotaikos';
const text = text1.replace('mokytojas', 'mokytoja');
console.log('15 Papildoma užduotis');
console.log(text);
console.log('.............');