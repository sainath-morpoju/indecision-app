
function square(x) {
    return x*x;
};

//arrow functions are anonymous functions
//you have to assign them to a variable to access them
const squareArrow = (x) => {
    return x*x;
};

//another syntax if you have only one expression in the function
const squareArrow2 = (x) => x*x;

console.log(squareArrow2(9));


const fullName = "Sainath Morpoju";

// const getFirstName = (x) => {
//     return x.split(" ")[0];
// }

const getFirstName = (x) => x.split(" ")[0];

console.log(getFirstName(fullName));