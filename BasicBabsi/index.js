// Day 2 | Classwork | Basic
// Basic 1:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, jobTitle) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.message = function () {
        return "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old and I am a " + this.jobTitle;
    };
    return Person;
}());
var employee = new Person("Barbara", "Schuch", "35", "Fullstack Webdeveloper");
console.log(employee.message());
document.getElementById("text").innerHTML = employee.message();
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job(firstName, lastName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Job.prototype.message = function () {
        return _super.prototype.message.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return Job;
}(Person));
var job = new Job("Barbara", "Schuch", "35", "Fullstack Webdeveloper", "100.000€", "Vienna");
console.log(job.message());
document.getElementById("text2").innerHTML = job.message();
