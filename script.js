var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
console.log(user.fullName);
var Animals = /** @class */ (function () {
    function Animals(name, type, numberOfLegs) {
        this.name = name;
        this.type = type;
        this.numberOfLegs = numberOfLegs;
    }
    return Animals;
}());
function describeTheAnimal(animal) {
    return "I am a beautiful " + animal.type + " " + animal.name + " and I have all " + animal.numberOfLegs + " legs !!!";
}
var animal = new Animals("cat", "domestic", 4);
console.log(describeTheAnimal(animal));
// example of embeding the data in to a string 
function templateString() {
    return "Heloo world I am a beautiful " + animal.name + ". I am \n    " + animal.type + " but a have a problem, I have only\n    " + (animal.numberOfLegs - 1) + " legs....oooo I am so sad !!!!";
}
console.log(templateString());
//Array
var myArray = [1, 2, 3];
console.log(myArray);
myArray.push(5);
console.log(myArray);
//Tuple type
var tupleArr;
tupleArr = ["Olga", 7, false];
console.log(tupleArr);
console.log(tupleArr[0] + " " + tupleArr[1].toString());
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color);
var c = Color.Blue;
console.log(c);
var colorName = Color[2];
console.log(colorName);
