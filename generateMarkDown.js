const inquirer = require("inquirer")

function renderLicense(license) {
    inquirer.prompt([
    {   type: 'checkbox',
        message: 'Who is the project licensed by?',
        choices: ['The MIT License','Boost Software Licensce 1.0','Apachi 2.0 License'],
        name: "license"
    }
]).then(license =>{
    switch(license.license){
        case 'The MIT License':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case 'Boost Software Licesnce 1.0':
            return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        case 'Apachi 2.0 License':
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;

            default:
                return [];
                break;
    }}, 
    function renderLicense(license) {
        return`${renderLicense(license)}${renderLicense(license)}`
    },

    function generateMarkDown(data){
        return `#${data.title}

        ##Table of Contents
         * description
         * usage
         * license
         * installation
         * contributors
         * test
         
        ## Description
            ${data.description}
        ## Usage
        ${data.usage}

        ## License
        ${data.license}

        ## Installation
        ${data.installation}

        ## Contributors
        ${data.contributors}

        ## Test
        ${data.test}
        
        ## Questions
        ${data.name}:
        ${data.email}:
        ${data.github}:`
    }
)}
module.exports = generateMarkDown;
