import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 2000);
    });
};
// for animation
async function welcome() {
    let rainbow = chalkAnimation.rainbow("------ Lets start Program ------");
    await sleep();
    rainbow.stop();
}
await welcome();
// for ask question
async function askQuestion() {
    let que = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.rgb(187, 243, 206)("please enter the pragraph you want to convert:")
        }
    ]);
    // words
    // convert a string into array
    const word_arr = que.str.split(" ");
    console.log(word_arr);
    //for words in array
    console.log(`words in a pragraph ${word_arr.length}`);
    // for chracters
    // this remove the empty spaces and ignore it
    const chra_spaces = que.str.replace(/ /g, "");
    console.log(chra_spaces);
    // for total chracters
    console.log(`chracters in the pragraph:${chra_spaces.length}`);
}
// await askQuestion()
// for restart the program
async function startAgain() {
    do {
        await askQuestion();
        var playAgain = await inquirer.prompt([
            {
                type: "input",
                name: "restat",
                message: chalk.rgb(187, 243, 206)("Do you want to srart the game again? press y or n"),
            }
        ]);
    } while (playAgain.restart == 'y' || playAgain.restart == 'n' || playAgain.restart === 'Y');
}
await startAgain();
