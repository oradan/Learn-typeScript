class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user));
console.log(user.fullName)

class Animals{
    constructor(public name:string, public type:string, public numberOfLegs:number){}
}

function describeTheAnimal(animal:Animals){
    return "I am a beautiful "+animal.type+" "+animal.name+" and I have all "+animal.numberOfLegs+" legs !!!"
    }



let animal=new Animals("cat","domestic",4)



console.log(describeTheAnimal(animal))
// example of embeding the data in to a string 
function templateString(){
    return `Heloo world I am a beautiful ${animal.name}. I am 
    ${animal.type} but a have a problem, I have only
    ${animal.numberOfLegs-1} legs....oooo I am so sad !!!!`
}
console.log(templateString())

//Array

var myArray:number[]=[1,2,3]
console.log(myArray)
myArray.push(5)
console.log(myArray)

//Tuple type

var tupleArr:[string,number,boolean]
tupleArr=["Olga",7,false]
console.log(tupleArr)
console.log(tupleArr[0]+" "+tupleArr[1].toString())

//enum

enum Color {Red = 1, Green, Blue}
console.log(Color)
var c:Color=Color.Blue
console.log(c)
let colorName:string=Color[2]
console.log(colorName)
