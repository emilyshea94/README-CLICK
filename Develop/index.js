// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
      },
      {
        type: 'input',
        name: 'issues',
        message: 'How can users report issues?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  console.log(`README.md successfully generated as ${fileName}`);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        console.log('Answer the following prompts to generate your README.\n');
    
    
        const userResponses = await inquirer.prompt(questions);
    
        
        const markdownContent = generateMarkdown(userResponses);
    
        writeToFile('README.md', markdownContent);
      } catch (error) {
        console.error('Error generating README:', error);
      }
}

// Function call to initialize app
init();




