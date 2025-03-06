
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



// function decdlaration 

function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
console.log(age1);
//function expression
const calage2 = function (birthyeah) {
    return 2037 - birthyeah;
}

const age2 = calage2(1991);

console.log(age1, age2);

// Arrow function

const calAge3 = birthYeah => 2037 - birthYeah;
const age3 = calAge3(1991);
console.log(age3);

// const yearUntilRetirement = birthyeah => {
//     const age = 2037 - birthyeah;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearUntilRetirement(1991, 'jonas'));
// console.log(yearUntilRetirement(1980, 'Bob'));

//// function calling other function


function cutFruitPieces(fruit) {
    return fruit * 3;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);



    console.log(apples, oranges);
    const juice = 'juice with ' +  apples + ' apples and ' + oranges + ' oranges.'
    return juice;
}

console.log(fruitProcessor(2, 3));

/// Reviewing function

const calAge = function(birthyeah) {
    return 2037 - birthyeah;
}

const yearsUntilRetirement = function (birthYeah, firstName)
 {
    const age = calAge(birthYeah);
    const retirement = 65 - age;
    return retirement;

    if (retirement > 0) {
        return retirement;
        console.log(firstName + 'retires in '+ retirement + 'years');
    } else {
        return -1;
        console.log(firstName + ' has already retire')
    }
}

console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));



// function calcAge(birthyear, Name) {
//     const age = 2037 - birthYear;
//     return age
// }

// const calcAge = function(birthYear, Name) {
//     return 2037 - birthYear
// }

// const calcage = bithyear => 2037 - birthYear

/// code 5 challenge 1 ///

// const calcAverage = (a, b, c) => (a +  b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scorekoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scorekoalas);

const checkWinner = function(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log('Dolphins win 🏆 ' + avgDolhins + ' vs ' + avgKoalas);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log('Koalas win 🏆 ' + avgKoalas + ' vs ' + avgDolhins);
    } else {
        console.log('No team wins...');
    }
}
// checkWinner(scoreDolphins, scorekoalas);

checkWinner(576, 111);

// Test 2
// scoreDolphins = calcAverage(85, 54, 42);
// scorekoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scorekoalas);
// checkWinner(scoreDolphins, scorekoalas);

//Arrays

const friend1 = 'Micheal';
const friend2 = 'steven';
const friend3 = 'peter';

// const friends = ['Micheal', 'steven', 'peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);


// const jonas = ['jonas', 'schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);


/// basic arrays operation//

const friends = ['Micheal', 'steven', 'peter'];
friends.push('jay');
console.log(friends);
console.log(friends.length);

friends.unshift('john');
console.log(friends);

///Remove elements

friends.pop();
const popped = friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('steven')) {
    console.log('you have a new friend called Steven');
}

if (friends.includes('Bob')) {
    console.log('you dont have a new friend')
}

/// 6 challenge #2
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips);


// introduction to objects
// const jonas = {
//     firstName: 'jonas',
//     lastName: 'schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
//  };

//  console.log(jonas);

//  console.log(jonas.lastName);
// console.log(jonas['lastName']);


// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('wrong request! choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';


// const jonas = {
//     firstName: 'jonas',
//     lastName: 'schmedtmann',
//     birthyeah: 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense: true,
    

    // calcAge: function(birthYeah) {
    //     return 2037 - birthYeah;
    // }

    // calcAge: function() {
    //     this.age = 2037 - this.birthyeah;
    //     return this.age;
    // }

 

//  console.log(jonas.calcAge());
 
//  console.log(jonas.calcAge());
//  console.log(jonas.calcAge());
//  console.log(jonas.calcAge());
 

//  challenge

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
      }
}

 mark.calcBMI();
 John.calcBMI();

 console.log(mark.bmi, John.bmi);


 if (mark.bmi > John.bmi) {
    console.log(mark.fullName + ' `s BMI ' + (mark.bmi) + ' is higher than ' + John.fullName + ' `s BMI ' + (John.bmi))
 } else if (John.bmi > mark.bmi) {
    console.log(John.fullName + ' `s BMI ' + (John.bmi) + ' is higher than ' + mark.fullName + ' `s BMI ' + (mark.bmi))
 }

 /// iteration : the for loop

//  console.log('lifting weight repetition 1 🏋️');
//  console.log('lifting weight repetition 2 🏋️');
//  console.log('lifting weight repetition 3 🏋️');
//  console.log('lifting weight repetition 4 🏋️');
//  console.log('lifting weight repetition 5 🏋️');
//  console.log('lifting weight repetition 6 🏋️');
//  console.log('lifting weight repetition 7 🏋️');
//  console.log('lifting weight repetition 8 🏋️');
//  console.log('lifting weight repetition 9 🏋️');
//  console.log('lifting weight repetition 10 🏋️');

 /// for loop keeps running while condition is TRUE

//  for(let rep = 1; rep <= 10; rep++) {
//     console.log('lifting weight repetition ' + rep + ' 🏋️');
//  }

 // looping arrays

 const jonas = {
        firstName: 'jonas',
        lastName: 'schmedtmann',
        age: 2037 - 1991,
        job: 'teacher',
        friends: ['Micheal', 'Peter', 'Steven']
     };

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);
}


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

/// continue and break
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
  }

  ///looping backwards and loops in loops
  // while loops

  


 let rep = 1
while (rep <= 10) {
    console.log('WHILE: lifting weight repetition ' + rep + ' 🏋️');
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log('you rolled a ' + dice);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6)console.log('loop is about to end...');
}

//// challenge 4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
  
for (let i = 0; i < bills.length; i++) {
  const tips = calcTip(bills[i]);   
  tips.push(tip);
  totals.push(tip + bills (i));
  }
  
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;

}
  
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
