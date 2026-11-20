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

//Object Literal Inference
const studentInfo ={
    id: 65671,
    name: "Sor Visal",
    age: 20,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "Phnom Penh",
        country: "Cambodia"
    },
    currentAddress: {
        street: "456 Secondary St",
        city: "Phnom Penh",
        country: "Cambodia"
    },
    isActive: true
}
console.log('ID:', studentInfo.id);
console.log('Name:', studentInfo.name);
console.log('Age:', studentInfo.age);
console.log('Skills:', studentInfo.skills);
console.log('Is Student:', studentInfo.isStudent);
console.log('Address:', studentInfo.address);
console.log('Current Address:', studentInfo.currentAddress);
console.log('Is Active:', studentInfo.isActive);

//Object Types
function displayStudentInfo(
    student: {
        id: number;
        name: string;
        age: number;
        skills: string[];
        isStudent: boolean;
        email?: string; // Optional property
    }
){
    return `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Skills: ${student.skills.join(", ")}, Is Student: ${student.isStudent}, Email: ${student.email ?? "N/A"}`;
}
console.log(displayStudentInfo({
    id: 65671,
    name: "Sor Visal",
    age: 20,
    skills: ["JavaScript", "TypeScript", "Python"],
    isStudent: true
}));

interface Student {
    id: number;
    name: string;
    age: number;
    skills: string[];
    isStudent: boolean;
    email?: string; // Optional property
}
const student: Student = {
    id: 65671,
    name: "Sor Visal",
    age: 20,
    skills: ["JavaScript", "TypeScript", "Python"],
    isStudent: true
};
console.log(displayStudentInfo(student));