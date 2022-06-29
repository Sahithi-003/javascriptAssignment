const printName = (name) => {
    return `Hi` + name;
}

console.log(printName);

var name = 'Jon';
var bill = 1000;

console.log( `Hi ${name}, please pay: ${bill}`);


const display = ({name1, bill}) => console.log(`${name1} ${bill}`);

const person = {
name1: 'Noam Chomsky',
age: 92
};

display(person);

