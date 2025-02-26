//https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit?tab=t.0#heading=h.40g6yguvm5k8

/*
1. Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false
*/
function tusciaFunkcija() {
    return false;
}
console.log('1. Funkcija pavadinimu “tusciaFunkcija”');
console.log(tusciaFunkcija());
console.log('-----------------');
/*

2.Funkcija pavadinimu “daugyba”:
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;
*/
function daugyba1 (n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        const result = n1 *n2;
        return result;
    }
    return false;
}
console.log('2.Funkcija pavadinimu “daugyba”');
console.log(daugyba1(7, 5));
console.log(daugyba1(-7, 5));
console.log(daugyba1(-7, -5));
console.log(daugyba1(7, -5));
console.log(daugyba1('labas', -5));
console.log('-----------------');

/*
//parasytos funkcijos perziura
function demo(...params) {
    // parametru validavimas
    // logika
    // apskaiciuoto rezultato validavimas
    // rezultato grazinimas
}


function daugyba1(n1, n2) {
    // validavimas
    if (typeof n1 !== 'number') {
        return 'Error: pirmasis parametras turi buti skaiciaus tipo';
    }
    if (typeof n2 !== 'number') {
        return 'Error: antrasis parametras turi buti skaiciaus tipo';
    }
    if (n1 === Infinity || n1 === -Infinity || '' + n1 === 'NaN') {
        return 'Error: pirmasis parametras turi buti normalus skaicius';
    }
    if (n2 === Infinity || n2 === -Infinity || isNaN(n2)) {
        return 'Error: antrasis parametras turi buti normalus skaicius';
    }

    // logika
    const result = n1 * n2;

    // rezultato validavimas
    if (result >= Number.MAX_VALUE) {
        return 'Error: rezultatas galimai virsijo maksimalia galima prisiminti skaiciaus reiksme';
    }

    // rezultato grazinimas
    return result;
}

console.log(daugyba1());
console.log(daugyba1(undefined));
console.log(daugyba1(undefined, undefined));
console.log(daugyba1('labas', 5));
console.log(daugyba1('labas', 'rytas'));
console.log(daugyba1(7, Infinity));
console.log(daugyba1(Infinity, 5));
console.log(daugyba1(Infinity, Infinity));
console.log(daugyba1(7, -Infinity));
console.log(daugyba1(-Infinity, 5));
console.log(daugyba1(-Infinity, -Infinity));
console.log(daugyba1(7, NaN));
console.log(daugyba1(NaN, 5));
console.log(daugyba1(NaN, NaN));
console.log('-----------------');
console.log(daugyba1(7, 5));
console.log(daugyba1(-7, 5));
console.log(daugyba1(-7, -5));
console.log(daugyba1(7, -5));
*/


/*

3.Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą 
“Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/
function skaitmenuKiekisSkaiciuje(sk) {
    if (typeof sk !== 'number' || sk === Infinity || sk === -Infinity || isNaN(sk)) {
        return 'Pateikta netinkamo tipo reikšmė';
    }   
        return sk.toString().length;

}
console.log('3.Funkcija pavadinimu “skaitmenuKiekisSkaiciuje');
console.log(skaitmenuKiekisSkaiciuje(5));
//rezultatas: 1
console.log(skaitmenuKiekisSkaiciuje(781));
//rezultatas: 3
console.log(skaitmenuKiekisSkaiciuje(37060123456));
//rezultatas: 11
console.log(skaitmenuKiekisSkaiciuje(true));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(skaitmenuKiekisSkaiciuje('asd'));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(skaitmenuKiekisSkaiciuje(NaN));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(skaitmenuKiekisSkaiciuje(Infinity));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(skaitmenuKiekisSkaiciuje(-Infinity));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log('-----------------');

/*
4.Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/
function didziausiasSkaiciusSarase(num) {
    if (!Array.isArray(num) || num.includes(Infinity) || num.includes(-Infinity) || num.some(isNaN)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    } else if (num.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
    
    let largest = num[0];
    for (let i = 1; i < num.length; i++) {
        if (largest < num[i]) {
            largest = num[i];
        }
    }
    return largest;
}   
console.log('4.Funkcija pavadinimu “didziausiasSkaiciusSarase'); 
console.log( didziausiasSkaiciusSarase([ 1 ]));
//rezultatas: 1
console.log( didziausiasSkaiciusSarase([ 1, 2, 3 ]));
//rezultatas: 3
console.log( didziausiasSkaiciusSarase([ -5, 78, 14, 0, 18 ]));
//rezultatas: 78
console.log( didziausiasSkaiciusSarase([ 69, 69, 69, 69, 66 ]));
//rezultatas: 69
console.log( didziausiasSkaiciusSarase([ -1, -2, -3, -4, -5, -6, -7, -8 ]));
//rezultatas: -1
console.log( didziausiasSkaiciusSarase('pomidoras') );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”
console.log( didziausiasSkaiciusSarase(NaN) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase(null));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase(-Infinity));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log('-----------------');

/*
5.Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą

išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
*/
function isrinktiRaides (text, number) {
    if (typeof text!== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo';
    } if (text.length === 0 || text.length >= 100) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio';
    } if (typeof number !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo';
    } if (number === Infinity || number === -Infinity|| number === null || isNaN(number)) {
        return 'Antrasis kintamasis yra netinkamo tipo';
    } if (number <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį';
    } if (number > text.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį';
    }
    const abc = 'abcdefghijklmnoprstuvwz';
    let newText = '' ;
    for (let i = number - 1; i < text.length; i+=number) {
        if(abc.includes(text[i])) {
            newText+=text[i];
        } 
    }
        return newText;
}

console.log('5.Funkcija pavadinimu “isrinktiRaides"'); 
console.log( isrinktiRaides('abcdefg', 2));
//rezultatas: 'bdf'
console.log( isrinktiRaides('abcdefghijkl', 3));
//rezultatas: 'cfil'
console.log( isrinktiRaides('abc', 0));
//rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( 'abc', 4));
//rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2));
console.log( isrinktiRaides( 'avd', NaN));
console.log( isrinktiRaides( 'avd', -Infinity));
console.log('-----------------');


/*
6.Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
grąžinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/
function dalyba (x, y) {
    if (x === undefined || y === undefined) {
        return 'Iveskite skaicius';
    } if (typeof x!== 'number' || x === Infinity || x === -Infinity|| x === null || isNaN(x)) {
        return 'Pirmasis kintamasis yra netinkamo tipo';
    } if (x === 0 && y === 0) {
        return 'Dalyba is nulio negalima';
    } if (typeof y!== 'number' || y === Infinity || y === -Infinity|| y === null ||y === 0||isNaN(y)) {
        return 'Antrasis kintamasis yra netinkamo tipo';
    } 
    let result = 0;
    result = x / y;
    return result;
}
console.log('6.Funkcija pavadinimu “dalyba”'); 
console.log(dalyba('asf', 5));
console.log(dalyba('asf', Infinity));
console.log(dalyba());
console.log(dalyba(5, 0));
console.log(dalyba(0, 0));
console.log(dalyba(15, 3));
console.log(dalyba(45, 5));
