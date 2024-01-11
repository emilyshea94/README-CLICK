// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `* [License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](https://opensource.org/licenses/${license}) License - see the [LICENSE](LICENSE) file for details.`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](https://opensource.org/licenses/${license}) License - see the [LICENSE](LICENSE) file for details.`;
  }
  return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title} ${licenseBadge}


  ## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${licenseLink}
* [Contributing](#contributing)
* [Issues](#issues)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Issues
${data.issues}
`;

}

  

module.exports = generateMarkdown;

