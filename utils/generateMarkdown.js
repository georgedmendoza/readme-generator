// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if(license==="Apache"){
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    if(license==="Eclipse"){
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    if(license==="IBM"){
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    if(license==='MIT'){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if(license==='none'){
      return ''
    }


};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="Apache"){
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license==="Eclipse"){
    return `[!Eclipse](https://opensource.org/licenses/EPL-1.0)`
  }
  if(license==="IBM"){
    return `[IBM](https://opensource.org/licenses/IPL-1.0)`
  }
  if(license==='MIT'){
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  if(license==='none'){
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license === 'none') {
    return ''
  } else{
    return `- [License](#license)`
  }
}

function renderLicenseTitle(license){
  if(license === 'none') {
    return ''
  } else{
    return `## License`
  }
}
// ${new Date().getFullYear()

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {   
  

  return `# ${data.name}   
  ## Description 
  ${data.description}

  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseSection(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseTitle(data.license)}
  - ${renderLicenseLink(data.license)} - click to view lincense information
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  - GitHub: [${data.githubUser}](https://github.com/${data.githubUser})
  - Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
