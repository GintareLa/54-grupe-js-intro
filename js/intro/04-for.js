/* 
FOR - "tevinis" ciklas
ciklas (cikliskumas) - kazkas kartojasi;
- gali buti ribotas kiekis kartu
- gali buti neribotas kiekis kartu
*/



// ciklas
const increment = 1;

let sum = 0;
console.log(sum);

sum = sum + increment;
console.log(sum);

sum = sum + increment;
console.log(sum);

sum = sum + increment;
console.log(sum);


// ciklas turi baigtis , todel turi buti salyga i = i + 1, 
// kitaip ciklas bus begalinis

console.log('start');

for (let i = 1; i < 10; i = i + 1) {
    console.log(i, 'Labas rytas, Lietuva');

}

console.log('finish');

/* Teorija destytojos Agnes
for(Inicijavimas (nuo ko prasideti); Sąlyga (kiek laiko, tai daryti/kada turiu sustoti); 
VeiksmasPoIteracijos(kokia tures buti sekanti iteracija){ 
  statement
}

  */
// 1 būdas
for (let i = 0; i <= 5; i ++) {
    console.log(i);  
 }

console.log();

 // 2 būdas, kai i padidiname vienetu
for (let i = 0; i < 5; i ++) {
    console.log(i+1);  
 }
 console.log();
// 3 būdas, kai i nebutina rasyti i++(tradicinis), o galima rasyti i += 2, 
//tada bus kas antras
for (let i = 0; i < 5; i += 2) {
    console.log(i+1);  
 }
 console.log();
 //4 būdas, kai eina is galo
 for (let i = 10; i >= 0; i--) {
    console.log(i);  
 }
 console.log();
 let sum1 = 0;
 let maxSk = 100;

 for(let i = 0; i <= maxSk; i++) {
    sum1 += i;
  }
console.log(sum1);
console.log();

let skaiciai = [1, 4, 44, 64, 55, 24, 32, 55, 19, 1, 74, 22, 23];
let lyginiai = [];
let nelyginiai = [];
for (let i = 0; i < skaiciai.length; i++) {
    if(skaiciai [i] % 2 != 1) {
        lyginiai.push(skaiciai[i]);
    } else {
        nelyginiai.push(skaiciai[i]);
    }
 }
 console.log(lyginiai);  
 console.log(nelyginiai); 
 console.log();
 /* 4. Recepto ingredientų sąrašas 
console.log("\n4. Recepto ingredientų sąrašas");
const ingredientai = ["cukrus", "miltai", "kiaušiniai", 
    "pienas", "sviestas"]; */

const ingredientai = ["cukrus", "miltai", "kiaušiniai", 
"pienas", "sviestas"];
for (let i = 0; i < ingredientai.length; i ++) {
     console.log(`${i + 1}. ${ingredientai[i]}`);  
}
/* 6. Temperatūros patikra ar virsija ar ne 30 laipsnių
console.log("\n6. Temperatūros patikra");
const temperaturos = [22, 32, 28, 31, 29, 27, 30];
// Diena 1. Temperatūra neviršija 30 laipsnių
// Diena 2. Temperatūra viršija 30 laipsnių */

const temperaturos = [22, 32, 28, 31, 29, 27, 30];
const savaitesDienos = ['Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis'];


for (let i = 0; i < temperaturos.length; i++) {
    console.log(`${savaitesDienos[i]}. Temperatura ${temperaturos[i]> 30? 'virsija' : 'nevirsija'} 30 laipniu`);
}
console.log();
for (let i = 0; i < temperaturos.length; i++) {
    if(temperaturos[i] > 30){
      console.log(`Diena ${i +1}. Temperatura viršija 30 laipsnių`);
    } else {;
       console.log(`Diena ${i +1}. Temperatura neviršija 30 laipsnių`);
       
    }
}
  
console.log();

/* 7. Studentų pažymių vidurkis 
console.log("\n7. Studentų pažymių vidurkis");
const pazymiai = [8, 9, 7, 10, 6];*/
 
const pazymiai = [8, 9, 7, 10, 6];
let sumaPazymiu = 0;

for(let i = 0; i < pazymiai.length; i++) {
    sumaPazymiu = sumaPazymiu + pazymiai[i];
  }
console.log(sumaPazymiu);
let vidurkis = sumaPazymiu / pazymiai.length;

console.log(vidurkis);
console.log();
 
