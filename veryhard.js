class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`${this.name} loves swimming...but I'm scared of drowning!`)
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
    }

    acceptNewTask = () => {
        this.busy = true;
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
            console.log(`${this.name} now knows ${newLanguage}`)
        }
    }

    listLanguage() {
        return `${this.name} knows ${this.language}`;
    }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);
