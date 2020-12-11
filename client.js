console.log('js loaded');


$(document).ready(handleReady);


employees = [];


function handleReady() {
    console.log('jQuery is loaded');

    renderToDom();

    //click listeners
    $('#addEmployee').on('click', handleSubmit);

}

function renderToDom() {
    $('#table-body').empty();

    //loop over employees array and append to tbody
    for (let employee of employees) {


        //make an employee row in the tbody

        let employeeRow = $(`
            <tr class="employeeRow">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
            </tr>`);
        $('#table-body').append(employeeRow);
    }

    //put on DOM

}

function handleSubmit() {
    console.log('clicked Submit');

    let newEmployee = {

        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),

    }

    //check if I got the right values
    console.log(newEmployee);
    employees.push(newEmployee);

    renderToDom();
    clearInputs();

}


function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}