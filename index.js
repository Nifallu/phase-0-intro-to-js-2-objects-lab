// Write your solution in this file!
const employee = {
    name: "Jane Doe",
    streetAddress: "234 Lost Ave"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployee = {...employee};
    updateEmployee[key] = value;
    return updateEmployee;
}
// this function should take in three arguments: 
// an employee Object, a key and a value. 
// This function should not mutate the employee; 
// it should return a new Object that has an updated value for the key passed in.
// Hint: use the spread operator!

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
// this function should work the same as updateEmployeeWithKeyAndValue() 
// but it should mutate the employee Object passed in.

function deleteFromEmployeeByKey(employee, key){
    const updateEmployee = {...employee};
    delete updateEmployee[key];
    return updateEmployee;
}
// this function should take in a employee Object and a key. 
// It should delete the property with that key from the employee Object. 
// This should not mutate the original employee Object; 
// it should return a new Object that doesn't include the identified key-value pair. 
// Hint: use the spread operator!

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
// this function should work the same as deleteFromEmployeeByKey()
// but it should mutate the employee Object.
