//Variable Declaration and Initialization
let firstName: string = "Visal";
let LastName: string = "Sor";
let age: number = 20;
let isStudent: boolean = true;
let message: string = `My name is ${firstName} ${LastName} and I am ${age} years old. I am ${isStudent ? "a student" : "not a student"}.`;
let hobbies: string[] = ["Reading", "Traveling", "Coding"];

console.log(message);
console.log(`My hobbies are: ${hobbies.join(", ")}`);

let height: number = 1.86;
let weight: number = 75;

let total: number = height + weight;
console.log(`I'm ${age} year old, ${height}m tall and weigh ${weight}kg. The total of my height and weight is ${total}.`);

//Array
let skills: string[] =[
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++" 
]
console.log(skills[0]);
console.log(skills.push("TypeScript"));