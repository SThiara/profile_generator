const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userProfile = "";

rl.question('What is your name? ', (answer) => {
  userProfile += `Username: ${answer}`;
  rl.question('Why are you still a fan of the Canucks? ', (answer) => {
    userProfile += `\nFan status: ${answer}`;
    rl.question('What do you think of passive perception? ', (answer) => {
      userProfile += `\nThoughts on passive perception: ${answer}`;
      rl.question('Who is your least liked person in the world? ', (answer) => {
        userProfile += `\nArch-nemesis: ${answer}`;
        rl.question('You see a cute cat as you\'re walking by, do you pet it? ', (answer) => {
          userProfile += `\nIs the user a good person: ${answer}`;
          console.log(`\n\n${userProfile}`);
          rl.close();
        });
      });
    });
  });
});