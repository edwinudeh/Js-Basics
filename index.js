
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

//const age = 19;
//const isOldEnough = age >= 18;

//if(isOldEnough) {
//    console.log('sarah can start driving license');
//} else {
 //   const yearsLeft = 18 - age;
 //   console.log(`sarah is too young. wait another ${yearsLeft} years:)`);
//}

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



//const favourite = Number(prompt("What's your favourite number?"));
//console.log(favourite);
//console.log(typeof favourite);

//if(favourite === 23) {
//    console.log('Cool! 23 is an amazing number');
//} else if (favourite === 7) {
//    console.log('7 is a cool number');
//} else if (favourite === 9) {
////    console.log('9 is a cool number');
//} else {
//    console.log('Number is not 23 or 7 or 9');
//}

//if (favourite !== 23) console.log('why not 23');


// coding challenge 3

///const scoreDolphins = (96 + 80 + 89) / 3;
//const scoreKoalos = (80 + 91 + 100) / 3;
//console.log(scoreDolphins, scoreKoalos);

//if (scoreDolphins > scoreKoalos && scoreDolphins >= 100) {
//    console.log('Dolphins win the trophy');
//} else if (scoreKoalos > scoreDolphins && scoreKoalos >= 100) {
//    console.log('kaolos win the trophy');
//} else if (scoreDolphins === scoreKoalos) {
//    console.log('both win the trophy!');
//} else {
//    console.log('No one wins the trophy!');
//}


//// Switch statement

const day = 'tuesday'

switch(day) {
    case 'monday':
        console.log('plan course structure');
        console.log('Go to coding meet up');
        break;
    case 'tuesday':    
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case  'sunday':
        console.log('Enjoy the weekend : D');
        break;
    default:
        console.log('Not a valid day');
       
}



//if (day === 'monday') {
//    console.log('plan course structure');
//    console.log('Go to coding meet up');
//} else if (day === 'tuesday') {
//    console.log('Prepare theory videos');
//} else if (day === 'wednesday'|| day === 'thursday') {
///    console.log('Write code examples');
//} else if (day === friday) {
//    console.log('Record videos');
//} else if (day === 'saturday' || day === 'sunday') {
//    console.log('Enjoy the weekend : D');
//} else {
//    console.log('Not a valid day');
//}



/// expression

3 + 4
1991
true & false & !false

if (23 > 10) {
    const str = '23 is bigger';
}



const ageYear = 13;
ageYear >= 18 ? console.log('I like to drink wine 🍷'):
console.log('I like to drink water 💧');

const drink = ageYear >= 18 ? 'wine 🍷' : 'water💧';
console.log(drink);

let drink2;
if (ageYear >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

///challenge 4 ////////////////

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log('The bill was ' + bill , 'the tip was ' + tip, 'and the total value ' + bill+tip);console.log('The bill was ' + bill, 'the tip was ' + tip, 'and the total value ' + bill + tip);


/////// strict mode //////
'use strick';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D'); 

// const interface = 'Audio';
// const private = 534;


function logger() {
    console.log('My name is jonas');
}

// calling //running // invokling function
logger();
logger();
logger();

function food() {
    console.log('beans and rice')
}
food();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = 'juice with ' +  apples + ' apples and ' + oranges + ' oranges.'
    return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


const num = Number('23');
console.log(num);