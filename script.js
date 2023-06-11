/*-----------------------------------------------
   Handle calculate button using event handler 
-----------------------------------------------*/
document.getElementById('calculate-btn').addEventListener('click', function () {
    // get income amount
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);

    // get food amount
    const foodInput = document.getElementById('food-input');
    const foodAmount = parseFloat(foodInput.value);

    // get rent amount
    const rentInput = document.getElementById('rent-input');
    const rentAmount = parseFloat(rentInput.value);

    // get cloth amount
    const clothInput = document.getElementById('cloth-input');
    const clothAmount = parseFloat(clothInput.value);

    // get and calculate total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const finalExpenses = foodAmount + rentAmount + clothAmount;


    // Show the output of total expenses in the website
    totalExpenses.innerText = finalExpenses.toFixed(2);


    // get and calculate balance
    const balance = document.getElementById('balance');
    const updatedBalance = incomeAmount - finalExpenses;


    // show the output of balance in the site
    balance.innerText = updatedBalance.toFixed(2);



    /*  // clear the input of income, food, rent, cloth field
     incomeInput.value = '';
     foodInput.value = '';
     rentInput.value = '';
     clothInput.value = ''; */

});


/*-------------------------------------------- 
    Handle save button using event handler
---------------------------------------------*/
document.getElementById('save-btn').addEventListener('click', function () {

    // get save amount 
    const saveInput = document.getElementById('save-input');
    const saveAmount = parseFloat(saveInput.value);


    // get saving amount
    const savingAmount = document.getElementById('saving-amount');


    // set the updated saving amount in the site

    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);


    const foodInput = document.getElementById('food-input');
    const foodAmount = parseFloat(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentAmount = parseFloat(rentInput.value);

    const clothInput = document.getElementById('cloth-input');
    const clothAmount = parseFloat(clothInput.value);

    const finalExpenses = foodAmount + rentAmount + clothAmount;


    const balance = document.getElementById('balance');
    const updatedBalance = incomeAmount - finalExpenses;


    // const updatedSavingAmount = (incomeAmount * saveAmount) / 100;
    const updatedSavingAmount = (saveAmount / 100) * updatedBalance;
    savingAmount.innerText = updatedSavingAmount;


    // get the remaining balance

    const remainingBalance = document.getElementById('remaining-balance');
    const updatedRemainingBalance = updatedBalance - updatedSavingAmount;


    // set the updated remaining balance in the site
    remainingBalance.innerText = updatedRemainingBalance;


    // clear the input of income, food, rent, cloth field
    incomeInput.value = '';
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';


    // clear the save input
    saveInput.value = '';

});