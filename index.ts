// let name :string = "John";
// console.log("Имя:", name);

// let age = 30;
// console.log("Возраст:", age);

// let city = "New York";
// console.log("Город:", city);

const greet = (name :string) => {
    console.log("Привет,", name + "!");
};

const sum = (a :number, b :number) => {
    let result = a + b;
    console.log( a, "+", b, "=", result);
    return result;
};

greet("Alice");
let total = sum(5, 3);