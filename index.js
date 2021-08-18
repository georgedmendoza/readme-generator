// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { writeFile } = require('../portfolio-generator/utils/generate-site');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [

        // {
        //     type: 'input' ,
        //     name: 'githubUser',
        //     message: 'What is your github username? (Required)',
        //     validate: githubUserInput =>{
        //        if(githubUserInput){
        //            return true;
        //        } else{
        //            console.log('Please enter your github usename');
        //            return false;
        //        }
        //    }
        // },
        // {
        //     type: 'input' ,
        //     name: 'email',
        //     message: 'What your email? (Required)',
        //     validate: emailInput =>{
        //        if(emailInput){
        //            return true;
        //        } else{
        //            console.log('Please enter your email');
        //            return false;
        //        }
        //    }
        // },
        // {
        //    type: 'input' ,
        //    name: 'name',
        //    message: 'What is the name of your project? (Required)',
        //    validate: nameInput =>{
        //        if(nameInput){
        //            return true;
        //        } else{
        //            console.log('Please enter the project title');
        //            return false;
        //        }
        //    }
        // },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: 'Please provide a description for this application. (Required)',
        //     validate: descriptionInput => {
        //         if(descriptionInput) {
        //             return true;
        //         } else{
        //             console.log('Please provide a description for this application.');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'installation',
        //     message: 'Provide description on how to install your project. (Required)',
        //     validate: installationInput => {
        //         if(installationInput){
        //             return true;
        //         } else{
        //             console.log('Provide description on how to install your project');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: 'How is this application used? (Required)',
        //     validate: usageInput => {
        //         if(usageInput){
        //             return true;
        //         } else{
        //             console.log('How is this application used?');
        //             return false;
        //         }
        //     }
        // },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license to your readme?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses does this application use/include? (Check all that apply)',
            choices: ['Apache','Eclipse','IBM','MIT','Mozilla'],
            when: ({confirmLicense}) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // {
        //     type: 'input',
        //     name: 'contributing',
        //     message: 'Who else contributed to develop this project? (Required)',
        //     validate: contributionInput => {
        //         if(contributionInput){
        //             return true;
        //         } else{
        //             console.log('Who else contributed to develop this project?');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'tests',
        //     message: 'How can this application be tested? (Not sure what to do here)',
        //     validate: testInput => {
        //         if(testInput){
        //             return true;
        //         } else{
        //             console.log('How can this application be tested? (Not sure what to do here');
        //             return false;
        //         }
        //     }
        // }
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if(err){
            // handle error
            return console.error(err)
        }
        // console.log(data);
        // console.log('File created!')
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        // displays all data
        //console.log(data);
        writeToFile('README.md',generateMarkdown(data))
    })
}

// // Function call to initialize app
 init();