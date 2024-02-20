// Fun Profile Generator - Challenge:

/*
  Ask the following questions and return a paragraph summary of their answers:

    - What's your name? Nicknames are also acceptable :)
    - What's an activity you like doing?
    - What do you listen to while doing that?
    - Which meal is your favourite (eg: dinner, brunch, etc.)
    - What's your favourite thing to eat for that meal?
    - Which sport is your absolute favourite?
    - What is your superpower? In a few words, tell us what you are amazing at!
*/

const readline = require('readline');

// Creating an instance of the readline module, configuring it with standard input and output streams
const rl = readline.createInterface({
  input: process.stdin, // Setting input stream to the standard input
  output: process.stdout // Setting output stream to the standard output
});

// Asking the first question to the user through the readline interface
rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {

  // Asking the second question after the first one is answered
  rl.question('What\'s an activity you like doing? ', (activity) => {

    // Asking the third question after the second is answered
    rl.question('What do you listen to while doing that? ', (music) => {

      // Asking the fourth question after the third one is answered
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
    
        // Asking the fifth question after the fourth one is answered
        rl.question('What\'s your favourite thing to eat for that meal? ', (favourite) => {

          // Asking the sixth question after the fifth is answered
          rl.question('Which sport is your absolute favourite? ', (sport) => {

            // Asking the seventh question after the sixth is answered
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {

              // Logging the user's response
              console.log(`My name is, ${name}. I enjoy ${activity}, during this I like to listen to ${music}. My favourite meal is ${meal}, for ${meal} my favourite is ${favourite}. When I am not eating my favourite meal, I like to play ${sport}. My superpower is ${superpower}`);

              // Closing the readline interface after both questions are answered
              rl.close();
            });
          });
        });
      });
    });
  });
});