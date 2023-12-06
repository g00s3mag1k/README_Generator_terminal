// function that returns a license badge dynamically depending on the choice of license
function renderLicenseBadge(License) {
  if (License === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (License === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (License === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (License === 'Boost Software 1.0') {
    return '[![License: Boost Software 1.0](https://img.shields.io/badge/License-Boost%20Software%201.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (License === 'Eclipse 2.0') {
    return '[![License: EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }
  return '';
};

// function that returns the license link
function renderLicenseLink(License) {
  let licenseLink = '';
    if(License === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if(License === 'Apache 2.0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (License === 'GNU GPLv3') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ''
    }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ### ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Credits
  ${data.Credits}
  
  ## License
  This project is licensed under the ${data.License} license.
  
  ## Questions
  Any questions about this project, please contact me via E-mail: ${data.Email} or visit my GitHub:(https://github.com/${data.Github}) profile.
`;
};

module.exports = generateMarkdown;
