/* 
FOR - "tevinis" ciklas
ciklas (cikliskumas) - kazkas kartojasi;
- gali buti ribistas kiekis kartu
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