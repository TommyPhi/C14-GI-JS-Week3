class PII {
    #name;
    #SSN;
    constructor(name, ssn) {
        this.#name = name;
        this.#SSN = ssn;
    }

    getName() {
        return this.#name;
    }

    getSSN() {
        return this.#SSN;
    }
}

const patient1 = new PII("John Doe", '123-45-6789');

console.log(patient1.name);
console.log(patient1.SSN);

console.log(patient1.getName());
console.log(patient1.getSSN());