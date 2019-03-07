
class Person1{
    constructor(name = 'Anonymous'){
     //   this.name = name || 'Anonymous';
     this.name = name;
    }

    getGreeting(){
        // return 'Hi! I am ' + this.name + '!';
        return `Hi, I am ${this.name}!`;
    }
} 

// const me = new Person1('Sainath');
// console.log(me);
// console.log(me.getGreeting());

// const other = new Person1();
// console.log(other);

class Person{
    constructor(name = 'Anonymous',age = 0){
     this.name = name;
     this.age = age;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old!`;
    }
} 
// const p1 = new Person('Sai',27);
// console.log(p1.getDescription());


class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        // return this.major;
        return !!this.major;
    }
    //overriding method
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` And their major is ${this.major}`;
        }
        return description;
    }
}
// const p1 = new Student();
// console.log(p1.hasMajor());
// console.log(p1.getDescription());

// const me = new Student('Sai',27,'Computer Science');
// console.log(me.hasMajor());
// console.log(me.getDescription());

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getDescription(){
        let greeting = super.getDescription();
        if(this.homeLocation){
            greeting += ` And lives in ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me1=new Traveller('Sai', 27,'Florida');
console.log(me1.getDescription());

const me2=new Traveller(undefined, undefined,'Nowhere');
console.log(me2.getDescription());
