// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'No License' || ''){
    return ''
  }
  return `![GitHub license](https://img.shields.io/badge/License-${license}-${badgeColor(license)}.svg)`
}

function badgeColor(license){
  if(license == 'MIT'){
    return 'yellow'
  } else if (license == 'ISC'){
    return 'blue'
  } else if (license == 'EPL_1.0') {  
    return 'red'
  } else {return ''}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'No License' || ''){
    return ''
  }
  return `[Link to License](https://opensource.org/license/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'MIT'){
    return 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  } else if (license == 'ISC'){
    return 'A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.'
  } else if (license == 'EPL_1.0'){
    return 'This commercially-friendly copyleft license provides the ability to commercially license binaries; a modern royalty-free patent license grant; and the ability for linked works to use other licenses, including commercial ones.'
  } else {return ''}
}

// Render License name based off the input
function licenseName(license){
  if(license == 'MIT'){
    return 'MIT'
  } else if (license == 'ISC'){
    return 'ISC'
  } else if (license == 'EPL_1.0') {  
    return 'Eclipse Public License 1.0'
  } else {return 'No License'}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  ${'[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)'}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Usage 
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  #### ${licenseName(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  You can also check out the LICENSE in the repo.

  ## How to Contribute
  Check out the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions check out my [Github](https://github.com/${data.github}) or send me an email at ${data.email}.
`;
}

module.exports = generateMarkdown;