// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  [
    {
      name: 'Apache',
      url: 'https://opensource.org/licenses/Apache-2.0',
      badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    },
    {
      name: 'Eclipse',
      url: 'https://opensource.org/licenses/EPL-1.0',
      badge: 'https://img.shields.io/badge/License-EPL%201.0-red.svg'
    },
    {
      name: 'IBM',
      url: 'https://opensource.org/licenses/IPL-1.0',
      badge: 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'
    },
    {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
    },
    {
      name: 'Mozilla',
      url: 'https://opensource.org/licenses/MPL-2.0',
      badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
    }
  ]

  if(!license){
    return ''
  }
  // else if{
  //     console.log(license.length)
  // }
 //console.log(license[0])
  else if(license==='Apache'){
    console.log(license)
  }

  //this is being called before i get the promise

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  const licenseBadge = '(https://img.shields.io/badge/License-MIT-yellow.svg)';
  const name = 'MIT'

  return `# ${data.name}   
  ## Description 
  ${data.description}

  [![License:${name}]${licenseBadge}]

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  - GitHub: [${data.githubUser}](https://github.com/${data.githubUser})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
