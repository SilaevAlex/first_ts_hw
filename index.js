// let name :string = "John";
// console.log("Имя:", name);
// let age = 30;
// console.log("Возраст:", age);
// let city = "New York";
// console.log("Город:", city);
var greet = function (name) {
    console.log("Привет,", name + "!");
};
var sum = function (a, b) {
    var result = a + b;
    console.log(a, "+", b, "=", result);
    return result;
};
greet("Alice");
var total = sum(5, 3);
