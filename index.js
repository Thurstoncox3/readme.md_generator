const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require(`./generateMarkDown`);

const questions = [
  {
    type: 'input',
    message: 'What is your Name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your GitHub?',
    name: 'gitHub',
  },
  {
    type: 'input',
    message: 'How about your Email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Title of Project',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What will the README contain?',
    name: 'table of contents',
  },
  {
    type: 'input',
    message: 'What is the functionality of the project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'How does a User use your project?',
    name: 'usage',
  },
  {
    type: 'checkbox',
    message: 'Who is the project licensed by?',
    choices: ['The MIT License', 'Boost Software Licensce 1.0', 'Apachi 2.0 License'],
    name: "license"
  },
  {
    type: 'input',
    message: 'How does the User install your project?',
    name: "installation"
  },
  {
    type: 'input',
    message: 'Any other contributors?',
    name: "contributors"
  },
  {
    type: 'input',
    message: 'Any test you would like to add in the future?',
    name: "test"
  },
];


const writeToFile = () => {
  inquirer
    .prompt(questions)
    .then((data) => {
      fs.writeFile('OUTPUT_README.md', generateMarkDown(data), (err) =>
        err ? console.log(err) : console.log('All Done!')
      );
    });

};

writeToFile()



