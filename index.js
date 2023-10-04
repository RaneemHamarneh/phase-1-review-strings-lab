// Write your code in this file!

// const currentUser = 'Grace Hopper';

// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;
// const myString = 'template literal';

// const myNumber = 10;

// const myBoolean = false;

// `Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

// Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;

'Edsger Dijkstra'.length;

'Edsger Dijkstra'[15];

'Edsger Dijkstra'[14];

'Edsger Dijkstra'.slice(0, 3);

const currentUser = 'Grace Hopper';
currentUser.slice(0, 1);
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;