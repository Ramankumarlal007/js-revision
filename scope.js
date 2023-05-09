function one() {
  const username = "Rishabh kuymar Yadav";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  //   two();
}
// one();
if (true) {
  const username = "Rishabh";
  if (username === " Rishabh") {
    const website = "Tinder";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++++++interesting +++++++++++

// console.log(typeof addone(15));   in case of function we can declare this above
// console.log(addone(15));
function addone(num) {
  return num + 1;
}


const addTwo = addone(15);
// console.log(typeof addTwo);
// in case of function which is saved in a variable  we can't declare this above it
console.log(addthree(15));    

const addthree = function (num1) {  
    return num1 + 15;
};
