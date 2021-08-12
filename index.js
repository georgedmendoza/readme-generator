// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
           type: 'input' ,
           name: 'name',
           message: 'What is the name of your project? (Required)',
           validate: nameInput =>{
               if(nameInput){
                   return true;
               } else{
                   console.log('Please enter the project title');
                   return false;
               }
           }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Provide description on how to install your project. (Required)',
            validate: installationInput => {
                if(installationInput){
                    return true;
                } else{
                    console.log('Provide description on how to install your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How is this application used? (Required)',
            validate: usageInput => {
                if(usageInput){
                    return true;
                } else{
                    console.log('How is this application used?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Who else contributed to develop this project? (Required)',
            validate: contributionInput => {
                if(contributionInput){
                    return true;
                } else{
                    console.log('Who else contributed to develop this project?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'How can this application be tested? (Not sure what to do here)',
            validate: testInput => {
                if(testInput){
                    return true;
                } else{
                    console.log('How can this application be tested? (Not sure what to do here');
                    return false;
                }
            }
        }
    ])
};

questions().then( answers => console.log(answers));



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
