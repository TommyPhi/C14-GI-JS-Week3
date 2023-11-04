class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`${this.name} loves swimming...but is scared of drowning!`)
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    constructor(name, job, age, language) {
        super(name, job, age)
        this.language = language;
        this.busy = true;
    }

    completeTask = () => {
        this.busy = false;
        console.log(`${this.name} has completed a task!`);
    }

    acceptNewTask = () => {
        this.busy = true;
        console.log(`${this.name} has accepted a task.`);
    }

    offerNewTask() {
        if(this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        }
        else {
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }

    learnLanguage(newLanguage) {
        if(this.language.includes(newLanguage)) {
            console.log(`${this.name} already knows this language!`)
        } else {
            this.language.push(newLanguage)
            console.log(`${this.name} has learned ${newLanguage}!`)
        }
    }

    listLanguage() {
        return `${this.name} knows ${this.language}`;
    }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);

// person1.exercise();
// person1.fetchJob();

// c1.exercise();
// c1.fetchJob();
// c1.offerNewTask();
// c1.completeTask();
// c1.offerNewTask();
// c1.acceptNewTask();
// c1.offerNewTask();
// console.log(c1.listLanguage());
// c1.learnLanguage("JavaScript"); 
// console.log(c1.listLanguage());

// c2.exercise();
// c2.fetchJob();
// c2.offerNewTask();
// c2.completeTask();
// c2.offerNewTask();
// c2.acceptNewTask();
// c2.offerNewTask();
// console.log(c2.listLanguage());
// c2.learnLanguage("Python"); 
// console.log(c2.listLanguage());

// c3.exercise();
// c3.fetchJob();
// c3.offerNewTask();
// c3.completeTask();
// c3.offerNewTask();
// c3.acceptNewTask();
// c3.offerNewTask();
// console.log(c3.listLanguage());
// c3.learnLanguage("C++"); 
// console.log(c3.listLanguage());