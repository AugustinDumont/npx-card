#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: 2,
  margin: 2,
  borderStyle: "double",
  borderColor: "magenta"
};

// Text + chalk definitions
const data = {
  name: chalk.white("Augustin Dumont /"),
  handle: chalk.magenta.bold("GUS"),
  work: chalk.cyanBright("Junior Web developer at BeCode Liège"),
  github: chalk.cyanBright("https://github.com/AugustinDumont"),
  web: chalk.cyanBright("https://augustindumont.be"),
  npx: chalk.cyanBright("npx GusSamTruite"),
  labelWork: chalk.gray.bold("      Work:"),
  labelGitHub: chalk.gray.bold("    GitHub:"),
  labelWeb: chalk.gray.bold("       Web:"),
  labelCard: chalk.gray.bold("      Card:")
};

// how to display label and informations together
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webbing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// how to display design, spaces and informations output boxen
const output =
  heading +
  newline +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  webbing +
  newline +
  newline +
  carding;

console.log(chalk.magenta(boxen(output, options)));
