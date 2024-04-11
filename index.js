// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Please type your title:'
    },
    {
        name: 'description',
        message: 'Write a short description:'
    },
    {
        name: 'usage',
        message: 'Write how to use the App:'
    },
    {
        name: 'credits',
        message: 'Write any credits to your work:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license',
        choices: ['MIT', 'ISC', 
            {
            name: 'Eclipse Public License 1.0',
            value: 'EPL_1.0'
            },
            'No License'
        ],
        default: ['MIT']
    },
    {
        name: 'tests',
        message: 'Write any tests you perform:'
    },
    {
        name: 'github',
        message: 'Enter your Github usermane:'
    },
    {
        name: 'email',
        message: 'Write your email for contact purposes:'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('Your README has been created.')
    })
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then((answers)=>{
            const markdown = generateMarkdown(answers)
        
            writeToFile('README.md', markdown)
        })
        .catch((err)=>{
            console.log(err)
        })
}

// Function call to initialize app
init()