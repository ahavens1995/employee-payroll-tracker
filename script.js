// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Create an array of all employees
const allEmployees = new Array();

// Collect employee data
const collectEmployees = function() {
  
  //Get Employee First Name
  var inputFirstName = prompt("Please enter Employee's first name");
  //Get Employee Last Name
  var inputLastName = prompt("Please enter Employee's last name");
  //Get Employee Salary
  var inputSalary = prompt("Please enter Employee's salary");

  //If the inputted salary
  if(isNaN(inputSalary)){
    inputSalary = 0;
  }
  else{
    inputSalary = Number(inputSalary)
  }

  //Create an Employee object with all the information
  let employees = {
    firstName: inputFirstName,
    lastName: inputLastName,
    salary: inputSalary
  }

  //Push employee object onto all arrays
  allEmployees.push(employees);

  //Confirm if the user wants to continue adding employees
  var conf = confirm("Do you want to continue to add more employees?")

  //Whie user wants to continue adding employees, gather user input for each employee
  while(conf){
    inputFirstName = prompt("Please enter Employee's first name");
    inputLastName = prompt("Please enter Employee's last name");
    inputSalary = prompt("Please enter Employee's salary");

    if(isNaN(inputSalary)){
      inputSalary = 0;
    }
    else{
      inputSalary = Number(inputSalary)
    }

    employees = {
      firstName: inputFirstName,
      lastName: inputLastName,
      salary: inputSalary
    }

    allEmployees.push(employees);

    conf = confirm("Do you want to continue to add more employees?");
  }

  //Return the array of all employees
  return allEmployees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  var avgSalary = 0;
  var totalSalary = 0;

  //Loop through all employee objects
  for(let i = 0; i < employeesArray.length; i++)
    {
      //Grab the current employees
      const currentEmployee = employeesArray[i];

      //Add employee salary to total salary
      totalSalary += Number(currentEmployee.salary);
    }

    //Calculate average salary by dividing total salary but number of employees
    avgSalary = totalSalary / employeesArray.length;
    console.log(avgSalary);
    
    console.log(`The average employee salaray between our ${employeesArray.length} employee(s) is ${avgSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  var randInt = Math.floor(Math.random() * employeesArray.length);
  const chosenEmployee = employeesArray[randInt];

  console.log(`Congratulations to ${chosenEmployee.firstName} ${chosenEmployee.lastName}, our random drawing winner`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
