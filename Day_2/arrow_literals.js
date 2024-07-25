//Write functions using arrow functions and template literals.

//declare function as usual
function hello(name)  {
    return("Hello , " + name + "!")
}


//declare function using arrow and template literal

const helloArrow = name => `Hello , ${name}!`;

console.log(hello("Shriya"))
console.log(helloArrow('Neel'))