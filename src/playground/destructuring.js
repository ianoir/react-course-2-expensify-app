// Object Destructuring

// const person = {
//     name: 'Ian',
//     age: 35,
//     location: {
//         city: 'Montrose',
//         temp: 20
//     }
// };

// const name = person.name;
// const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;

//console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
    //console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

//console.log(publisherName);

// Array Destructuring

const address = ['1 MacNab Avenue', 'Montrose', 'Angus', 'DD10 9FF'];

const [, city, county = 'Scotland'] = address;

console.log(`You are in ${county}.`);

const item = ['Coffee (iced)', '£2.00', '£2.50', '£2.75'];
const [itemName, , itemPrice] = item;

console.log(`A medium ${itemName} costs ${itemPrice}.`);