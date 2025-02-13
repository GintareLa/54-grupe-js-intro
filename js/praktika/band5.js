console.log(true || false);
console.log(false || (true && false));
console.log((5 > 3) && (10 < 20));
console.log((5 > 10) || (10 > 5));
console.log(!true);console.log(!(5 > 3));
console.log(!(false || true));
console.log(!(10 < 5 && 5 > 2));

console.log(`.....`);

//Sudėtingesnis. Write a function that checks if a number is both greater than 10 and less than 100.
function skaicius(num) { 
    if (num > 10 && num <100) {
        return true;
    } else {
    return false;
    }

}

console.log(skaicius (9));
console.log(skaicius(10));
console.log(skaicius(55));

console.log(`.....`);

//Sudėtingesnis. Write a function that takes age and hasLicense as arguments and returns:
//"Can drive" if the person is 18 or older AND has a license
//"Cannot drive" otherwise

function age(num, hasLicence) {
    if (num >= 18 && hasLicence === true) {
        return "can drive";
    } else { 
        return "cannot drive";
    }

}

console.log(age(17, false));
console.log(age(18, true));
console.log(age(19, false));

