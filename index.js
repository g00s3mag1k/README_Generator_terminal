// TODO: Include packages needed for this application
const fs = require('fs'); 

const inquirer = require('inquirer');

const generateReadMe = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input

const generateQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name of your Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Brief Description of your Project; '
    },
    {
        type: 'list',
        name: 'table',
        message: ['Description', 'Installation', 'Usage', 'Credits', 'License', 'Questions']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain installation instructions if any: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'List the languages you used in your project; '
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any; '
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license if applicable: ',
        choices: ['Apache 2.0', 'MIT', 'Boost Software 1.0', 'Eclipse 2.0', 'GNU GPLv3', 'None'],
    },
    {
        type: 'input',
        name: 'e-mail',
        message: 'Provide an e-mail address: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?'
    },
]
.then((data) => {
    const readmeContent = generateMarkdown(data);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.error(err) : console.log('README file has been created!')
    );
})
.catch((error) => console.error(error));

// TODO: Create a function to write README file
/*
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log("README file has been created!");
    });
}*/

// TODO: Create a function to initialize app

function init() {
    inquirer
    .prompt(generateQuestions())
    .then(function(data) {
      console.log(data);
      var fileContent = generateMarkdown(data);
      readmeContent(fileContent);
    });
}

// Function call to initialize app

init();
generateReadMe();
