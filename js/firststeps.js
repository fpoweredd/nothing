const foodarray = ["apple", "mango", "me"]
let yourname = prompt("What is your name?")
const array = [["hello"], ["world"]]

/// ---
// Hello world, uppercase to first letter, for loop to console
// ---

// console.info("Step 0 (or 1):\n")

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    for (let j = 0; j < array[i].length; j++) {
        for(let k = 0; k < array[i][j].length; k++)
        if (k === 0) {
            console.log(array[i][j][k].toUpperCase())
        } else {
            console.log(array[i][j][k])
        }
    }
}

// una VARiable llamada nameUser
let nameUser = "Nikolai";

// Age, for exemple = 0
let age = 0;
console.log("Now my age is " + age);

// Now 1
age = 1; 
console.log("Update: My age is " + age);

nameUser = "Nik";
console.log("Final: My name is " + nameUser + ", I'm " + age + " y.o.")

// -------------------------

// console.info("### Challenge: Request a prompt with function ###\n")

function hello(name) {
    if (name) {
        console.log("Hello, " + name)
        alert(`Hello, ${name}!`)
    }
    else {
        console.warn("Hello.\nIt is without ${name}, because you didn't tell me your name :(")
        alert("Hello.\nIt is without ${name}, because you didn't tell me your name :(")
        name = "Person without name"
    }
    // eat for loop
    for (let integer = 0; integer < foodarray.length; integer++) {
        console.log(name + ", do you want to eat " + foodarray[integer])
    }
    return name
}

console.log("return from function is " + hello(yourname))
