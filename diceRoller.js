class DiceRoll {
    constructor(times, sides) {
        this.times = times;
        this.sides = sides;
        this.rolls = [];
        this.rollsum = null;

    }

    get dieRoll() {// use "this.sides" here
        return Math.floor(Math.random() * (this.sides)) + 1;
    }

    get rollAll() { // use "this.times" and "this.dieRoll" here
        for (let i = 0; i < this.times; i ++) {
            this.rolls.push(this.dieRoll())
        }

    }

    get total() { // Add them up and return the total
    this.rollsum = 0;
        for (let i = 0; i < this.times; i++) {
            this.rollsum = this.rollsum + this.dieRoll()
        }
    }

    get output() { // form the string using "this.rolls" and "this.total"
        this.diceOutputString = `Rolled a die with ${this.sides} sides ${this.times} times: ${this.rolls}; total ${this.rollsum}`
    }
}
