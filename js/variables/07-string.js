/* string - tekstas - simboliu grandinele
INICIAVIMAS GALIMAS:
- ' (viengubomis kabutemis)
- " (dvigubomis kabutemis)
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
