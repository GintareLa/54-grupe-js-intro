//1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina 
// atitinkamą vertinimą: "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".
// Kuris operatorius čia tinkamiausias?

function balas(num) {
    if (num >= 9 && num <= 10) {
        return "Labai gerai";
    } else if (num === 8) {
        return "Gerai";
    } else if (num >= 5 && num < 8) {
        return "Patenkinamai";
    } else if (num <= 4 && num >= 1) {
        return "Nepatenkinamai";
    } else {
        return "Netinkamas skaicius";
    }

}


console.log(balas(10));
console.log(balas(9));
console.log(balas(8));
console.log(balas(7));
console.log(balas(6));
console.log(balas(5));
console.log(balas(4));
console.log(balas(3));
console.log(balas(2));
console.log(balas(1));
console.log(balas(0));

console.log('......');


//2. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).
// Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".
// Kuris metodas čia tinkamiausias?

function vote(age) {
    if (age >= 18) {
        return "Gali balsuoti";
    } else {
        return "Negali balsuoti";
    }

}

console.log(vote(17));
console.log(vote(18));
console.log(vote(19));

console.log('......');


//3. Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina 
// dienos pavadinimą.Kurį metodą čia patartumėte naudoti?

function savaitesDiena(num) {
    if (num == 1) {
        return "Pirmadienis";
    } else if (num == 2) {
        return "Antradienis";
    } else if (num == 3) {
        return "Treciadienis";
    } else if (num == 4) {
        return "Ketvirtadienis";
    } else if (num == 5) {
        return "Penktadienis";
    } else if (num == 6) {
        return "Sestadienis";
    } else if (num == 7) {
        return "Sekmadienis";
    } else {
        return "Error"
    }

}
console.log(savaitesDiena(1));
console.log(savaitesDiena(2));
console.log(savaitesDiena(3));
console.log(savaitesDiena(4));
console.log(savaitesDiena(5));
console.log(savaitesDiena(6));
console.log(savaitesDiena(7));
console.log(savaitesDiena(8));


console.log('......');
//4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas 
// ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?

function veiksmas(n) {
    let result = 0;
    if (n > 0) {
        result = "Teigiamas";
    } else {
        result = "Neigiamas";
    }
    return result;
}
console.log(veiksmas(5));
console.log(veiksmas(-2));
console.log(veiksmas(15));

console.log('......');

//5. Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų 
// grupių: "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).
// Koks operatorius geriausiai tinka šiam atvejui?

function vartotojas(age) {
    if (age >= 13 && age <= 19) {
        return "Jaunuolis";
    } else if (age >= 20 && age <= 64) {
        return "Suaugęs";
    } else if (age >= 65) {
        return "Pensininkas";
    } else {
        return "Nepriskirtas jokiai grupei";
    }

}


console.log(vartotojas(13));
console.log(vartotojas(22));
console.log(vartotojas(66));
console.log(vartotojas(2));

console.log('......');
//6. Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar
// nelyginis, ir atspausdina atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?

function algoritmas(n) {
    let result = 0;

    if (n % 2 === 0) {
        result = "Lyginis";
    } else {
        result = "Nelyginis";

    }
    return result;
}
console.log(algoritmas(5));
console.log(algoritmas(2));
console.log(algoritmas(0));

console.log('......');