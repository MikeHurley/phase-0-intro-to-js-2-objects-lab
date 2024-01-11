// Write your solution in this file
const employee = {
    name: "Sam",
    streetAddress: "12 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value
    return updatedEmployee
}
updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}
let newEmployee = deleteFromEmployeeByKey(employee, "name");


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

let newEmployees = destructivelyDeleteFromEmployeeByKey(employee, 'name');
