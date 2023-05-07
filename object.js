// object are declared in 2 ways (literal and constructor)
// objects when declared in literal way Singleton  is not made 
// objects when declared in constructor way Singleton  is  made Object.create

// Object Literals

// singleton
// Object.create

// object literals

// declaring a symbol
const mySym = Symbol("key1")


const JsUser = {
    // by default these  name etc are declared in js as string "name"
    name: "Hitesh",     
    "full name": "Hitesh Choudhary",
       //Symbol is declared as  below way in key:value pair. if not 
    //    declared in this way it is a string
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) to lock a value freeze is done on object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());