// Day 2 | Classwork | Basic
// Basic 1:

// Create a class constructor named Person that should hold information about 
// name, 
// age,  
// jobTitle and have 
// a function that will return a string “Hello there, My name is (name) and I am (age) years old,
 // and I am a (jobTitle)”

// Basic 2

// Create a class based on the Person class and add some other properties like salary, 
// jobLocation and a function that will call the function that is inside the Person class 
// and add “and I get (salary) every month, and I work in (jobLocation)”



class Person {
   firstName = "";
   lastName = "";
   age = ""  
   jobTitle = ""
constructor(firstName, lastName, age, jobTitle) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.jobTitle =jobTitle;
   }
   message() {
       return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am a ${this.jobTitle}`;
     }
}

let employee = new Person("Barbara", "Schuch", "35", "Fullstack Webdeveloper");

console.log(employee.message());

document.getElementById("text").innerHTML = employee.message();

class Job extends Person {
   salary;
   jobLocation;

   constructor(firstName, lastName, age, jobTitle, salary, jobLocation) {
       super(firstName, lastName, age, jobTitle);
       this.salary = salary;
       this.jobLocation = jobLocation;
   }

   message() {
       return `${super.message()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
   }
}

let job = new Job("Barbara", "Schuch", "35", "Fullstack Webdeveloper", "100.000€","Vienna");
console.log(job.message());

document.getElementById("text2").innerHTML = job.message();


