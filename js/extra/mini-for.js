/*Ciklo for panaudojimas
1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30

*/

function suskaičiuotiKaGausime (num1, num2) {
    if(typeof num1 !== 'number'||typeof num2 !== 'number') {
        return 'Pateikti sk nera sk tipo';
    } if(!isFinite(num1) || !isFinite(num2)) {
        return 'Sk nera tinkami';
    }
    const n1 = num1 < num2 ? num1 : num2;
    const n2 = num2 > num1 ? num2 : num1;
    let count = 0;
       for(let i = num1 -(num1 % 1); i <= num2; i++) {
        count+= i;
    }
    return count;
}
console.log('---1 užduotis---');
console.log(suskaičiuotiKaGausime(0, 0));
console.log(suskaičiuotiKaGausime(0, 4));
console.log(suskaičiuotiKaGausime(0, 100));
console.log(suskaičiuotiKaGausime(574, 815));
console.log(suskaičiuotiKaGausime(-50, 50));
console.log(suskaičiuotiKaGausime(-70, 30));
console.log(suskaičiuotiKaGausime(-4.5, 1.4));
console.log(suskaičiuotiKaGausime('ABC', 30));
console.log(suskaičiuotiKaGausime(NaN, 30));
console.log('----------------');
/*
2. Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/
function reiksmeAtv (str) {
    if (typeof str !== 'string') {
        return 'Tekstas nera stringo tipo';
    } if (str.length === 0) {
        return 'Tuscias tekstas';
    }
    let newString = '';
    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log('---2 užduotis---');
console.log(reiksmeAtv('abcdef'));
console.log(reiksmeAtv('labas'));
console.log(reiksmeAtv('12345'));
console.log(reiksmeAtv(12345));
console.log(reiksmeAtv(false));
console.log(reiksmeAtv('BIT'));
console.log(reiksmeAtv('sula'));
console.log('---------------');


/*
3.Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai
*/

function dalyba (sk1, sk2, daliklis) {
    if (typeof sk1 !== 'number'|| typeof sk2 !== 'number' || typeof daliklis !== 'number') {
        return 'Pateikti sk nera sk tipo';
    } if(!isFinite(sk1) || !isFinite(sk2) ||!isFinite(daliklis)) {
        return 'Sk nera tinkami';
    } if (daliklis === 0) {
        return 'Dalyba is nulio negalima';
    }
    
    let suma = 0;
    for(let i = sk1 -(sk1 % 1); i <= sk2; i++) {
        if( i % daliklis === 0) {
            suma++;
        }

    }
    return suma;
}
console.log('---3 užduotis---');
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${ dalyba (0, 11, 3)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${ dalyba (0, 11, 5)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${ dalyba (0, 11, 7)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 0 yra ${ dalyba (0, 11, 0)} vienetai.`);
console.log('-------------');

console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra ${ dalyba (8, 31, 3)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ${ dalyba (8, 31, 5)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ${ dalyba (8, 31, 7)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ${ dalyba ('abc', 31, 7)} vienetai.`);
console.log('-------------');

console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra ${ dalyba (-18, 18, 3)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 5 yra ${ dalyba (-18, 18, 5)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra ${ dalyba (-18, 18, 7)} vienetai.`);
console.log();
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra ${ dalyba (-18, Infinity, 7)} vienetai.`);
console.log();
