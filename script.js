var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = new Student("Jane", "M.", "User");
// console.log(greeter(user));
// console.log(user.fullName)
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
colorName = Color[3];
console.log(colorName);
function createSquare(config) {
    var newSquare = { color: "white", area: "fgfgh", circle: 23 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width + "" + config.width;
    }
    // return newSquare;
    console.log("This is a function that does something ,it display the color of the Square,with is: " + newSquare.circle + " ");
}
createSquare({ color: "black", width: 300 });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch("eu merg la mare la ora 7", "7"));
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greeting);
console.log("I am saying hello from the meton " + greeter.greet());
// class Animal {
//     move(distanceInMeters: number=0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(100);
// dog.bark();
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
//  sam.move();
//  tom.move(34);
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animall = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
console.log(animall);
console.log(rhino);
console.log(employee);
animall = rhino;
//animall = employee;
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
