// console.log("R");
// console.log("I");
// console.log("s");
// console.log("H");
// console.log("A");
// console.log("B");
// console.log("H");

// if we want to execute it 10 times it is difficult. we use function for that
// this is definition if function
function sayMyName() {
  console.log("R");
  console.log("I");
  console.log("s");
  console.log("H");
  console.log("A");
  console.log("B");
  console.log("H");
}
// function, name of function, syntax

//  sayMyName   this  is reference of function .. no result is found in output
// sayMyName()    to execute a function (to call a function)

// sayMyName(); 

// R
// I
// s
// H
// A
// B
// H

function addTwoNumber(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumber(5 , 6);  calling a function  output is 11

// const result = addTwoNumber(5 , 6);   // here also output is 11 
// console.log(result);     this is undefined . what is coming out of the function
// calling a function is having a value in this case
// console.log(number1 + number2); mainly (number1 + number2) is coming out ofthe 
// function which is undefined

// console.log(`Result : ` , result);
// console and return are different concept . console only prints the value

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result; code written after return is not printed

    // another way
    return number1 + number2
}

// addTwoNumbers(10,15) this si gettingthe result value but need to be stored 
// somewhere to get printed
// const added = addTwoNumbers(10,15);  here return value is saved and it is in "added"
// console.log(typeof added);   number
// console.log(typeof addTwoNumbers(10,15));  

function loginUserMessage (userName){
  return `${userName} just logged in`
}
// console.log(loginUserMessage("Raman"));
// loginUserMessage("Raman") Raman just logged in 
// loginUserMessage("")  just logged in 
// loginUserMessage() Raman just logged in undefined just logged in


function loginUserMessage1 (userName){
  if (userName === undefined) {
    
    console.log("Please use a userName");
    return
    
  }
  return `${userName} just logged in`
}
// console.log(loginUserMessage1());
// Please use a userName
// undefined just logged in


// shopping Items
// these ...num1 is rest operator/spread operator; depedimh the scenaro
function calculateCartPrice(...num1) {
  return num1
}
// console.log(calculateCartPrice(200, 500,5550,2000));
// we can also write as
function calculateCartPrice(val,val2,...num1) {
  return num1
}
// console.log(calculateCartPrice(200, 500,5550,2000,545,2545,495985,656595));


const user = {
  userName : "Rishabh Kumar Yadav",
  email : "rishabh@gmail.com"
}

function handleObject (anyObject) {
  return `Username is ${anyObject.userName} and email is ${anyObject.email}`
}

// handleObject(user);   return  is being called 
// console.log(handleObject(user));  return here it is been printed
// let profile = handleObject(user);  return here it is been saved in a variable
// console.log(profile);   here return is executed

// handling array with a function

const myNewArray = [200, 500, 800, 700, 452, 458, 658];
const myNewArray1 = [2040, 500, 800, 700, 452, 452128, 651148];
const myNewArray2 = [2040, 50450, 8500, 700, 452, 44558, 658];
const myNewArray3 = [204, 500, 802420, 700, 44452, 45148, 658];

function returnFourthValue(getArray) {
  return `${getArray[4]} , lenth of array is : ${getArray.length}`
  
}

// console.log(returnFourthValue(myNewArray));
// console.log(returnFourthValue(myNewArray1));
// console.log(returnFourthValue(myNewArray2));
// console.log(returnFourthValue(myNewArray3));

function one() {
  const Username = "Rishabh"

  function two  () {    
  const website  = "youtube"
  console.log(Username);
}
  // console.log(website);
  
 two()
}

one()

//++++++++++++++++++ interesting +++++++++++

function addone(num) {
  return num + 1;
}

addone (8);









