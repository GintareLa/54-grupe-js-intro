/* string - tekstas - simboliu grandinele
INICIAVIMAS GALIMAS:
- ' (viengubomis kabutemis)
- " (dvigubomis kabutemis)
- ` backtick
*/

const firstname = 'Chuck';
console.log(firstname);

const lastname = 'Norris';
console.log(lastname);

const fullname = firstname + ' ' + lastname;
console.log(fullname);
 const age = 84
// Hi, my name is Chuck and I am 84 years old.
// Hi, my name is Maryte and I am 8 years old.
// Hi, my name is {NAME} and I am 8 years old.

const chuckIntro = 'Hi, my name is ' + firstname + ' and I am ' + age + ' years old.';
console.log(chuckIntro);
console.log('--------');
// Kabute: ' (vienguba).
const k1 = "Kabute: ' (vienguba).";
console.log(k1);

// Kabute: " (dviguba).
const k2 = 'Kabute: " (dviguba).';
console.log(k2);

// Kabute: '  (vienguba) ir " (dviguba).
const k12 = "Kabutes: ' (vienguba)" + ' ir " (dviguba). ';
console.log(k12);
console.log('--------');

/* 
<div>
    <h1>Labas rytas, Lietuva!</h>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/

const html1 = ' <div> ';
const html2 = '     <h1>Labas rytas, Lietuva!</h> ';
const html3 = '    <p>Pirmadienis.</p> ';
const html4 = ' </div> ';
console.log(html1);
console.log(html2);
console.log(html3);
console.log(html4);
console.log('--------');

// \n - new line
// \r - return
// \ t - tab
// \r\n - "ultimate" new line
//  

const html = '<div>\n\
    <h1>Labas rytas, Lietuva!</h>\n\
    <p>Pirmadienis.</p>\n\
    <p>Pomidoras.</p>\n\
</div>';
console.log(html);
console.log('--------');




// Kabute: '  (vienguba) ir " (dviguba).
const k3 = 'Kabutes: \' (vienguba) ir " (dviguba).';
console.log(k3);
const k4 = "Kabutes: ' (vienguba) ir \" (dviguba).";
console.log(k4);
const k5 = "Kabutes: \' (vienguba) ir \" (dviguba).";
console.log(k5);
const k6 = 'Kabutes: \' (vienguba) ir \" (dviguba).';
console.log(k6);
console.log('--------');

const bHtml = `<div>
    <h1>Labas rytas, Lietuva!</h>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>`;
console.log(bHtml);
console.log('--------');


/*      !!!!!!!!!papildyti!!!!!!
//Kabute: ` (backtick).
const bactickBedute1
*/

const luckyNumber = 13;
 
//My lucky number is 13.

const lucky = 'My lucky number is ' + luckyNumber + '. ';
console.log(lucky);

const lucky2 = `My lucky number is ${luckyNumber}.`;
console.log(lucky2);

const chuckBack = `Hi, my name is ${firstname} and I am ${age} years old.`;
console.log(chuckBack);
console.log('--------');

//Price: $45.00 $ veikia tik su backtick
const price = 45;
const priceStr = `Price: $${price}. 00`;
console.log(priceStr);
console.log('--------');

//C:\Documents\troliai\rekia\namie - turi buti dvigubi backflash
const troliai1 = 'C:\\Documents\\troliai\\rekia\\namie'
console.log(troliai1);
const troliai2 = "C:\\Documents\\troliai\\rekia\\namie"
console.log(troliai2);
const troliai3 = `C:\\Documents\troliai\\rekia\\namie`
console.log(troliai3);

// String.raw`C:\Documents\troliai\rekia\namie`;

const broliai = `String.raw\`C:\\Documents\\troliai\\rekia\\namie\`;`;
console.log(broliai);