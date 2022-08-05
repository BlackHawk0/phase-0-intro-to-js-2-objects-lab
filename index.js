// returns an employee with the original key value pairs and the new key value pair
// it does not modify the original employee, but rather returns a clone with the new data
const employee = {name :'Sam', streetAddress : "L11 Broadway"};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmp = {...employee, [key]: value};
    return newEmp;
}

// updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// deletes `key` from a clone of employee and returns the new employee (it is non-destructive
function deleteFromEmployeeByKey(employee, key) {
    const newEmp = {... employee};
    delete newEmp[key];
    return newEmp;
}

// returns employee without the deleted key/value pair
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}