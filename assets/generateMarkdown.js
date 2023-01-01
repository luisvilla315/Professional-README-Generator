// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');

// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch(license) {
    case data.license === 'G98':
      data.licenseBadge = 'G98'
      break;
    case data.license === 'AS2':
      data.licenseBadge = 'AS2'
      break;
    case data.license === 'RA2':
      data.licenseBadge = 'RA2'
      break;
  
    default: 
          '';
  }
  
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case data.license === 'G98':
      data.licenselink = 'G98'
      break;
    case data.license === 'AS2':
      data.licenselink = 'AS2'
      break;
    case data.license === 'RA2':
      data.licenselink = 'RA2'
      break;
  
    default: 
          '';
  }
  
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!data.license)
  { "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  ${data.title}

  ## License
  ${data.license}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Questions? Reach me at ${data.email}
`;
};


function writeFile (data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./Test.md", generateMarkdown(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "index.md created" });
    });
  });
};

// Export writeFile function to be used in index.js //
module.exports = {
  writeFile,
};