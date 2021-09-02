class GuessingGame {
    constructor() {
        //this.mid = Math.floor((this.min + this.max)/2);
        // this.min = min;
        // this.max = max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        //this.mid = Math.floor((this.min + this.max)/2);
        this.mid = Math.ceil((this.min + this.max)/2);
        return this.mid;
    }

    lower() {
        this.max = this.guess();
        //this.setRange(this.min, this.max);
    }

    greater() {
        this.min = this.guess();
        //this.setRange(this.min, this.max);
    }
}

module.exports = GuessingGame;
