// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== "none") {

  }
}

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

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  This project is licensed under the ${data.license} license.

  ## Features

  ${data.features}

  ## Contact

  Any questions about this project, please contact me via [email](mailto:${data.email}) or visit my [GitHub](https://github.com/${data.github}) profile.

`;
};



module.exports = generateMarkdown;
