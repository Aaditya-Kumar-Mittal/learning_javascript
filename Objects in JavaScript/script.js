let username = 'Anurag'

const user = {
  firstName: 'Adarsh',
  lastName: 'Singh',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

// user.moileNumber = "95656565656";

// console.log(user);

// Object.seal(user)
Object.freeze(user)

user.moileNumber = "95656565656";

console.log(user);

// uncomment the lines above freeze to see the changes


console.log('isGraduate' in user);