// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string

function getLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'Boost Software 1.0') {
    return '![License: Boost Software 1.0](https://www.boost.org/LICENSE_1_0.txt%29)'
  }
  if (license === 'Eclipse 2.0') {
    return '![License: EPL 2.0](https://opensource.org/licenses/EPL-1.0%29)'
  }
  return '';
}

getLicenseBadge(license);


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  ${data.table}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  This project is licensed under the ${data.license} license.

  ## Questions

  Any questions about this project, please contact me via [email](mailto:${data.email}) or visit my [GitHub](https://github.com/${data.github}) profile.

`;
};



module.exports = generateMarkdown;
