function getLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else
  if (license === 'Apache 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else
  if (license === 'GNU GPLv3') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else
  if (license === 'Boost Software 1.0') {
    badge = '[![License: Boost Software 1.0](https://www.boost.org/LICENSE_1_0.txt)](https://www.boost.org/LICENSE_1_0.txt)';
  } else
  if (license === 'Eclipse 2.0') {
    badge = '[![License: EPL 2.0](https://opensource.org/licenses/EPL-1.0)](https://opensource.org/licenses/EPL-1.0)';
  } else {
    badge = '';
  }
  return badge;
};

// TODO: Create a function that returns the license link

// TODO: Create a function that returns the license section of README

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

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
  ${getLicenseBadge(data.License)}
  This project is licensed under the ${data.License} license.
  
  ## Questions
  Any questions about this project, please contact me via E-mail:${data.Email} or visit my GitHub:(https://github.com/${data.Github}) profile.
`;
};

module.exports = generateMarkdown;
