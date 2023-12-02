// TODO: Include packages needed for this application
const fs = require('fs'); 

const inquirer = require('inquirer');

const generateReadMe = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input

const generateQuestions = [
    {
        type: 'input',
        name: 'Title',
        message: ''
    },
    {
        type: 'input',
        name: 'Description',
        message: ''
    },
    {
        type: 'input',
        name: 'Installation',
        message: ''
    },
    {
        type: 'input',
        name: 'Usage',
        message: ''
    },
    {
        type: 'input',
        name: 'Credits',
        message: ''
    },
    {
        type: 'input',
        name: 'License',
        message: ''
    },
    {
        type: 'input',
        name: 'Features',
        message: ''
    },
    {
        type: 'input',
        name: 'Username',
        message: ''
    },
    {
        type: 'input',
        name: 'E-mail',
        message: ''
    },
    {
        type: 'input',
        name: 'GitHub',
        message: ''
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app

function init() {}

// Function call to initialize app

init();
