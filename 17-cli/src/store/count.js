class Count {
    constructor() {
        this.state = {
            count: 0
        }
    }

    incrementer() {
        this.state.count++;
    }
}

let counter = new Count();
console.log("Count : " + counter.state.count);
export default counter;