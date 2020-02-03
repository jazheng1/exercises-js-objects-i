let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {
};

user['firstName'] = process.argv[2];
user['lastName'] = process.argv[3];
user['currentLocation'] = process.argv[4];
user['favoriteSongs'] = ['One Song', 'Another Great Song', 'Last Great Song'];
user['age'] = 108;
user['favoriteMovies'] = ['Toy Story 4', 'The Lion King']
user['favoriteFood'] = process.argv[5];

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
}

console.log('Looks like you have great taste in music. Your favorite songs:');
console.log(printFavorites(user['favoriteSongs']))

console.log('Wow those are some great movies')
console.log(printFavorites(user['favoriteMovies']))

console.log(`I see, you like ${user['favoriteFood']}`)
if(user['favoirteFood'] === 'Waffles'){
  console.log('Over Pancakes!?!?')
}else {
  console.log('good choice!')
}

function printFavorites(array){
  let favThing = [];
  for(let i = 0; i < array.length; i += 1){
    let favName = array[i];
    favThing.push(favName)
  }
  for(let i = 0; i < favThing.length; i += 1){
    let favPosition = i + 1;
    console.log(favPosition + '. ' + favThing[i])
  }
}
