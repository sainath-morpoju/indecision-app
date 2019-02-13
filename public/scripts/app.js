'use strict';

// arguments object - no longer bound with arrow function

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

var addArrow = function addArrow(a, b) {
    // console.log(arguments);
    return a + b;
};

// console.log(add(55,1,1001));

//this keyword - no longer bound

// const user = {
//     name: 'Sainath',
//     cities: ['Philadelphia','New York','Dublin'],
//     printPlacesLived: function(){
//         console.log(this.name);
//         console.log(this.cities);

//         // this.cities.forEach(function(city){
//         //     console.log(this.name+' has lived in '+city);
//         // })//it will give error as this is not accessuble in this anonymous function
//     }
// }

var user2 = {
    name: 'Sainath',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // printPlacesLived: () => {
    //     this.cities.forEach((city) => {
    //         console.log(this.name+' has lived in '+city);
    //     })
    // }
    // printPlacesLived: function()  {
    //     this.cities.forEach((city) => {
    //         console.log(this.name+' has lived in '+city);
    //     })
    // }
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    } // this is new syntax

};

// user2.printPlacesLived();

var user3 = {
    name: 'Sainath',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // printPlacesLived()  {
    //     const cityMessages = this.cities.map((city) => {
    //         return this.name+' has lived in '+city;
    //     });
    //     return cityMessages;
    // }//map returns another array
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        return this.cities.map(function (city) {
            return _this2.name + ' has lived in ' + city;
        });
    } //map returns another array

};

// console.log(user3.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    // multiply() {
    //     return this.numbers.map((number) => {
    //         return this.multiplyBy*number;
    //     })
    // }
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (number) {
            return _this3.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
