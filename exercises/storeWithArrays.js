let process = require('process');

/*
  To get started:

  1. Remove the lines involving the removeThisToStart variable, so that the
     program doesn't exit early.
  2. Implement userCanAffordSofa
*/

/**
 * Creates and returns a new user (as an array).
 */
function newUser(firstName, lastName, budget, email) {
  let user = [];

  user[0] = firstName;
  user[1] = lastName;
  user[2] = budget;
  user[3] = email;

  return user;
}

/**
 * Creates and returns a new sofa (as an array).
 */
function newSofa(name, price) {
  let sofa = [];

  sofa[0] = name;
  sofa[1] = price;

  return sofa;
}

/**
 * Returns `true` if the given user can afford to buy the given sofa
 * and `false` otherwise.
 */

let allUsers = [
  newUser('Alyssa', 'Morris', 1800.00, 'AlMorris@davidson.edu'),
  newUser('Mindy', 'Weaver', 200.00, 'MindWeaver420@yahoo.com'),
  newUser('Louis', 'Washington', 850.00, 'LWash829@hotmail.omc'),
  newUser('Kevin', 'Isaacs', 80.00, 'KI@gmail.com'),
];

let sofa = [
  newSofa('Nice Sofa', 800.00),
  newSofa('Leather Sofa', 1000.00),
  newSofa('Free Sofa', 0.00)
];

function userCanAffordSofa(user, sofa) {
  // This is your job. :)
  for(let i = 0; i < sofa.length; i++){
    return user[2] >= sofa[i][1];
  }
}

for (let user of allUsers) {
  console.log('--------------------');
  console.log();

  console.log(`Hi, ${user[0]}.`);
  console.log(`Checking whether you can afford a ${sofa[0]}, please hold on....`);
  console.log();
  console.log(user[2])
  if (userCanAffordSofa(user, sofa)) {
    console.log('Congratulations!');
    console.log(`A ${sofa[0]} costs ${sofa[1]}, which is within your budget of ${user[2]}!`);
    console.log( `We will be emialing you at ${user[3]}`)
  } else {
    console.log(`Sorry, ${user[0]}, but you can't afford a ${sofa[0]}.`);
    console.log(`Your budget is ${user[2]}, but a ${sofa[0]} costs ${sofa[1]}.`);
  }

  console.log();
}

console.log('--------------------');
