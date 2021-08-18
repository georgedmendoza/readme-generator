// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  

  
console.log(data);

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Description 
  ${data.description}

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
  ${data.license}
  
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
