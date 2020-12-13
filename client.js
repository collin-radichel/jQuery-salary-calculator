console.log('js loaded');


$(document).ready(handleReady);


employees = [];


function handleReady() {
    console.log('jQuery is loaded');

    renderToDom();

    //click listeners
    $('#addEmployee').on('click', handleSubmit);
    $('#table-body').on('click', "#deleteButton", handleDelete);
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
                <td> <button id = "deleteButton" class = "btn btn-danger" > Delete </button> </td>
            </tr>`);
        //put on DOM
        $('#table-body').append(employeeRow);
    }


    //call sumOfAnnualSalaries
    sumOfAnnualSalaries(employees);
    
    

}

function handleSubmit() {

    $('#salarySum').empty();

    console.log('clicked Submit');

    if (
        $('#firstNameIn').val() === "" ||
        $('#lastNameIn').val() === "" ||
        $('#idIn').val() === "" ||
        $('#jobTitleIn').val() === "" ||
        $('#annualSalaryIn').val() === ""

    ) {
        Swal.fire(
            `Please fill in all inputs<br>
             before you submit.`
        )
    } else {

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
    
}

//function to delete employee from the table
function handleDelete(){
    console.log('clicked Delete');

    //used jQuery selector .closest to target the closest table row to the delete button
    $(this).parent().parent().remove();


}


// function to get the sum of annual salaries

function sumOfAnnualSalaries(array){
console.log('inAnnualSalaries with:', array);

     let annualSalaryTotal = 0;
    array.forEach(employee => {
        annualSalaryTotal += parseFloat(employee.annualSalary);
    });

    // Divide annualSalaryTotal by 12 to get monthlySalaryTotal, then append to the DOM
    let monthlySalaryTotal = annualSalaryTotal / 12;
    $('#salarySum').append(`
            <p> Total Monthly Costs: ${monthlySalaryTotal.toFixed(2)}<p>
        `)

    // if monthly salary costs exceed 20000, turn the background red
    if (monthlySalaryTotal >= 20000) {
            $('#salarySum').addClass('totalTooHigh');
        }
}

//function to clear input fields after a user hits submit
function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}