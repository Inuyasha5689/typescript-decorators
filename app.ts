/**
 * Created by dasco on 3/9/2017.
 */
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log("HI!");
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(false)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@printable
class Plant {
    name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();