const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// let heros = marvel_heros.push(dc_heros);

console.log(marvel_heros);
[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// one way
let allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Another way
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(8);
const real_another_array1 = another_array.flat(Infinity);
console.log(real_another_array);
console.log(real_another_array1);

this checks ("Rishabh") is array or not
console.log(Array.isArray("Rishabh"))

to convert this to array
console.log(Array.from("Rishabh"));
[
    'R', 'i', 's',
    'h', 'a', 'b',
    'h'
  ]

this cannot be extracted as array so result is an empty array []
console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

of "Returns a new array from a set of elements."
console.log(Array.of(score1, score2, score3));
[ 100, 200, 300 ]