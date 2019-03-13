


export const isAdult = (age) => {
    if(age>=18){
        return true;
    }
    return false;
};

const canDrink = (age) => age>=21;
export {canDrink};