const { expect } = require("chai");
const mylib = require("../src/mylib");

describe("mylib arithmetic functions", function () {

    before(function () {
        console.log("Starting mylib tests...");
    });

    after(function () {
        console.log("Finished mylib tests.");
    });

    describe("add()", function () {
        it("should add two numbers", function () {
            expect(mylib.add(2, 3)).to.equal(5);
        });
    });

    describe("subtract()", function () {
        it("should subtract two numbers", function () {
            expect(mylib.subtract(10, 4)).to.equal(6);
        });
    });

    describe("multiply()", function () {
        it("should multiply two numbers", function () {
            expect(mylib.multiply(4, 5)).to.equal(20);
        });
    });

    describe("divide()", function () {
        it("should divide two numbers", function () {
            expect(mylib.divide(20, 5)).to.equal(4);
        });

        it("should throw an error when dividing by zero", function () {
            expect(() => mylib.divide(10, 0))
                .to.throw("Cannot divide by zero");
        });
    });
});
