// var figlet = require("figlet");
// var chalk = require("chalk")



const chalk = require("chalk")
const figlet = require("figlet")

// import chalk from 'chalk';
// import figlet from 'figlet';

// console.log(chalk.blue('Hello world!'));

figlet("Aur laundo", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.red(data));
});