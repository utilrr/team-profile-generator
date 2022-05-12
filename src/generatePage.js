//list of variables
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const employees = [];

//function to generate manager data based on user input
function generateManagerData(employees) {
  let managers = employees.filter(
    (employee) => employee.getRole() === "Manager"
  );
  let managerData = "";
  for (let index = 0; index < managers.length; index++) {
    managerData += `
<div class="card">
  <div class="card-content">
    <div class="title has-text-link-dark has-background-primary">
      <p>${managers[index].getName()}</p>
      <p>${managers[index].getRole()}</p>
    </div>
    <p class="subtitle">ID: ${managers[index].getId()}</p>
    <p class="subtitle">Office Number: ${managers[index].getOfficeNumber()}</p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
      <a href="mailto: " target="_blank"> ${managers[index].getEmail()}</a>
      </span>
    </p>
  </footer>
</div>
`;
  }
  return managerData;
}

//function to generate engineer data based on user input
function generateEngineerData(employees) {
  let engineers = employees.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  let engineerData = "";
  for (let index = 0; index < engineers.length; index++) {
    engineerData += `
          <div class="card">
  <div class="card-content">
    <div class="title has-text-link-dark has-background-primary">
      <p>${engineers[index].getName()}</p>
      <p>${engineers[index].getRole()}</p>
    </div>  
    <p class="subtitle">ID: ${engineers[index].getId()}
    </p>
    <p class="subtitle">
    <span>GitHub: 
    <a href="https://github.com/${engineers[
      index
    ].getGitHub()}" target="_blank"> ${engineers[index].getGitHub()}</a>
    </span>
  </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
      <a href="mailto: " target="_blank"> ${engineers[index].getEmail()}</a>
      </span>
    </p>
  </footer>
</div>
    `;
  }
  return engineerData;
}

//function to generate intern data based on user input
function generateInternData(employees) {
  let interns = employees.filter((employee) => employee.getRole() === "Intern");
  let internData = "";
  for (let index = 0; index < interns.length; index++) {
    internData += `
    <div class="card">
  <div class="card-content">
    <div class="title has-text-link-dark has-background-primary">
      <p>${interns[index].getName()}</p>
      <p>${interns[index].getRole()}</p>
    </div>
    <p class="subtitle">ID: ${interns[index].getId()}
    </p>
    <p class="subtitle">School: ${interns[index].getSchool()}
  </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
      <a href="mailto: " target="_blank"> ${interns[index].getEmail()}</a>
      </span>
    </p>
  </footer>
</div>
    `;
  }
  return internData;
}

//function to create the html page
function generatePage(answers) {
  console.log(answers);
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  <link rel="stylesheet" href="./dist/style.css">
        <title>Document</title>
    </head>
    <body "is-family-primary">
    <header class="hero is-primary">
        <div class="hero-body">
          <p class="hero is-size-2 has-text-centered">
            The Team
          </p>
        </div>
    </header>
        <div id="container">
            <div class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
                 ${generateManagerData(answers)} 
                 ${generateEngineerData(answers)} 
                 ${generateInternData(answers)} 
            </div>
        </div>
    </body>
    </html>
    ;`;
}

//including the generatePage function
module.exports = generatePage;
