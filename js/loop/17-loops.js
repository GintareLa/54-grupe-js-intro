const numbers = [10, 2, 8, 4, 6];
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log('for');
//FOR ciklas- labiau universalus, galima keisti salygas, galima padaryti , 
// kad eitu per kas antra, pvz i+2
 for(let i =0; i< numbers.length; i++) {
    const number = numbers [i];
    console.log(number);

 }

 for(let i =0; i< names.length; i++) {
    const name = names [i];
    console.log(name);
 
 }
 console.log('-------------');
 //FOR -OF ciklas - bus naudojamas pereiti per visas Array reiksmes is eiles 
 // ir nekreipia demesio i pozicijas
 console.log('for-of');
 for (const number of numbers) {
   console.log(number);
 }


 for (const name of names) {
   console.log(name);

 }
 console.log('-------------');

 //WHILE -turi suktis tol, kol tenkina salyga ir yra tas pats kaip FOR ciklas
 {
   let i = 0;
   while(i < 5) {
      console.log( i, 'while...');  
      i++;
   }

 }
 console.log('-------------');
 {
   for (let i = 0; i< 5; i++) {
      console.log(i, 'while...');
      
   }
 }
 console.log('-------------');

 
{
 for (let i = 0, j = 25; i < 20; i++) {
      console.log(i, j);
  }
}
console.log('-------------');
{
   for (let i = 0, j = 25; i < 20 && j > 10; i++, j--) {
        console.log( i, j);
    }
  }
  console.log('-------------');
  // siuo atveju 'for' kitaip uzrasytas, ir jis toks pat, kaip while, tik yra kabliataskis 
 // ; salygoje priekyje ir gale;
{
  let i = 0;
  let j = 25;
  for (; i < 20 && j > 10; ) {
   console.log('for:',i, j);
   i++;
   j--;
   }
}
console.log('-------------');
  // siuo atveju 'while' kitaip uzrasytas, ir jis toks pat, kaip for, tik nera kabliataskio 
 // ; salygoje priekyje ir gale;
{
   let i = 0;
   let j = 25;
   while ( i < 20 && j > 10) {
    console.log('while:',i , j);
    i++;
    j--;
    }
 }