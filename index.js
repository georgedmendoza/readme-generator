// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { writeFile } = require('../portfolio-generator/utils/generate-site');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [

    
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
            name: 'description',
            message: 'Please provide a description for this application. (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else{
                    console.log('Please provide a description for this application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
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
            name: 'usage',
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
            name: 'license',
            message: 'What licenses does this application use/include?',
        },
        {
            type: 'input',
            name: 'contributing',
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
            name: 'tests',
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
    
];

//questions().then( answers => console.log(answers));
//questions().then( data => console.log(data));


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
        console.log(data);
        writeToFile('README.md',generateMarkdown(data))
    })
}

// // Function call to initialize app
 init();
