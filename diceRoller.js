class DiceRoll {
    constructor(times, sides) {
        this.times = times;
        this.sides = sides;
        this.rolls = [];
        this.rollsum = null;

    }

    dieRoll() {// use "this.sides" here
        return Math.floor(Math.random() * (this.sides)) + 1;
    }

    rollAll() { // use "this.times" and "this.dieRoll" here
        this.rollsum = 0;
        let rollValue = null;
        for (let i = 0; i < this.times; i ++) {
            rollValue = this.dieRoll()
            this.rolls.push(rollValue)
            this.rollsum = this.rollsum + rollValue
        }

    }

    get output() { // form the string using "this.rolls" and "this.total"
        this.diceOutputString = `Rolled a die with ${this.sides} sides ${this.times} times: ${this.rolls}; total ${this.rollsum}`;
        return this.diceOutputString
    }
}
