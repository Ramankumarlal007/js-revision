const user = {
  username: "Rishabh",
  price: 999,

  welcomeMessaage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessaage();
// // console.log(user.price);
// user.username ="Raman";
// user.price = 45,
// user.welcomeMessaage();

// current context i empty here in node environment hee at his place
// if this is present over here like below
// console.log(this);              {}

// function chai() {
//     let x = "zebra"
//     console.log(this.x);
// }
// chai()

// Arrow function

const chai =   () => {
    let x = "zebra"
    console.log(this);
}
// chai()

// function chai() {
//     let x = "zebra"
//     console.log(this.x);
//     console.log(this);
// }
// chai()
 let  a = 95;
 const b = 4205
 
if (true) {
  let a = 10
  const b = 20
  // var c = 30
  console.log("Inner : ", a);
  console.log(` Inner b : ${b}`);
}

 console.log(a);
 console.log(b);
//  console.log(c);












