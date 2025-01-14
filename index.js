
///let name = "Mosh";
///let age = 22;
///let isApproved = false;
///let firstName = undefined;
///let selectedColor = null;




///let person = {
    //name: "Mosh",g
   // age: 30,
//}

//console.log(person);

// Dot Notation
//person.name = 'john';

//console.log(person.name);

// Bracket Notation
//person['name'] = 'Mary';
//console.log(person.name);

// Data Types
//let javascriptIsFun = "true";
//console.log(javascriptIsFun);

///console.log(typeof true);
///console.log(typeof 23);
//console.log(typeof javascriptIsFun);
///console.log(typeof "jonas");

///Undefined
//let year;
//console.log(year);
//console.log(typeof year);
//number
//year = 1991;
//console.log(typeof year);
//null
//console.log(typeof null);




//let age = 30;
//age = 31;
////console.log(age);

//const birthYear = 1991;
///birthYear = 1990;
//console.log(birthYear);


//var job = "programmer";
//job = "teacher";
//console.log(job);

//const now ="2037";
////const ageJonas = now  - 1991;
//const ageSarah = now - 2018;
///console.log(ageJonas, ageSarah);


//console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

//const firstName = "jonas";
//const lastName = "schmedteam";
//console.log(firstName + ' ' + lastName);

//let x = 10 + 5;
//x += 10;
//x += 4;
//x++;
//x--;
//x--;
//console.log(x);

/// comparison operator
//console.log(ageJonas > ageSarah);
//console.log(ageSarah >= 18);

//const isFullAge = ageSarah >= 18;

//console.log(now - 1991 > now - 2012);

////let x, y;
///x = y = 25 - 10 -5;
//console(x, y)

//const averageAge = (ageJonas + ageSarah / 2)
//console.log(ageJonas, ageSarah, averageAge);



//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn)
//const markHigherBMI = BMIMark > BMIJohn;

//console.log(BMIMark, BMIJohn, markHigherBMI)


//const firstName = 'jonas';
//const job = 'teacher';
//const birthYear = 1991;

//const jonas = "i'm" + firstName + ', a ' + (year - birthYear) + 'years old' + job + '!';
//console.log(jonas);


//console.log('Just a regular string...');

///control structure

const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years:)`);
}

//if() {

////} else {

//}



const birthYear = 2012;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMark > BMIJohn;

if(BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than john's!")
} else {
    console.log ("John's BMI is higher than Mark's!")
}

// type conversion

const inputyear = '1991';
console.log(Number(inputyear), inputyear);
console.log(inputyear + 18);

console.log(Number('2003'));
console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('i am ' + 23 + ' years old');
console.log('23' - '10' - 3);

let n = '1' + 1;
n = n - 1;
console.log(n);



//truthy and falsy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("you should get a job!");
}


let height;
if (height) {
    cnsole.log('YAY! height is defined');
} else {
    console.log('height is UNDEFINED');
}

const ageBirth = 18;
if (ageBirth === 18) {
    console.log('you have become an adult:D (Strict)');
} else {
    console.log('Not yet adult:D (loose)')
}



const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is a cool number');
} else if (favourite === 9) {
    console.log('9 is a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('why not 23');





