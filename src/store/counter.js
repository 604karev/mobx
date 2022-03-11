import { makeAutoObservable } from "mobx";

class Counter {
    constructor() {
        makeAutoObservable(this)
    }

    count = 0;

    increment = () => this.count++

    decrement = () => this.count--

}
export default new Counter()