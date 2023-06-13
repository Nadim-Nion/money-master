function inputField(inputID) {
    const itemInput = document.getElementById(inputID);
    const itemAmount = parseFloat(itemInput.value);

    return itemAmount;
}

function updatedTotalExpenses() {
    const foodAmount = inputField('food-input');
    const rentAmount = inputField('rent-input');
    const clothAmount = inputField('cloth-input');

    const totalExpenses = document.getElementById('total-expenses');
    const finalExpenses = foodAmount + rentAmount + clothAmount;

    totalExpenses.innerText = finalExpenses.toFixed(2);

    return finalExpenses;
}

function updatedBalance() {
    const incomeAmount = inputField('income-input');
    const balance = document.getElementById('balance');

    const finalExpenses = updatedTotalExpenses();

    const updatedBalance = incomeAmount - finalExpenses;
    balance.innerText = updatedBalance.toFixed(2);

    return updatedBalance;
}

function savedAmount() {
    const saveInput = document.getElementById('save-input');
    const saveAmount = parseFloat(saveInput.value);

    return saveAmount;

}

function clearInputField() {
    const saveInput = document.getElementById('save-input');
    const incomeInput = document.getElementById('income-input');
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothInput = document.getElementById('cloth-input');

    // clear the input of income, food, rent, cloth field
    incomeInput.value = '';
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';


    // clear the input of save field
    saveInput.value = '';

}


/*-----------------------------------------------
   Handle calculate button using event handler 
-----------------------------------------------*/
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = inputField('income-input');
    const foodAmount = inputField('food-input');
    const rentAmount = inputField('rent-input');
    const clothAmount = inputField('cloth-input');

    if (incomeAmount > 0 && foodAmount > 0 && rentAmount > 0 && clothAmount > 0) {
        updatedTotalExpenses();
        updatedBalance();
    }

    else {
        alert("Please enter a valid input in the income or food or rent or cloth field");
        return;
    }



    const incomeAmountTotal = inputField('income-input');
    const finalExpensesTotal = updatedTotalExpenses();
    if (incomeAmountTotal > finalExpensesTotal && incomeAmount > 0 && foodAmount > 0 && rentAmount > 0 && clothAmount > 0) {
        updatedTotalExpenses();
        updatedBalance();
    }
    else {
        alert("Total expenses can't be greater than the Income");
    }

});



/*-------------------------------------------- 
    Handle save button using event handler
---------------------------------------------*/
document.getElementById('save-btn').addEventListener('click', function () {
    /*  const saveInput = document.getElementById('save-input');
     const saveAmount = parseFloat(saveInput.value); */
    const saveAmount = savedAmount();
    const savingAmount = document.getElementById('saving-amount');

    const incomeAmount = inputField('income-input');
    const finalExpenses = updatedTotalExpenses();
    const updatedBalanceAmount = updatedBalance();

    const updatedSavingAmount = (saveAmount / 100) * updatedBalanceAmount;
    if (updatedBalanceAmount > updatedSavingAmount) {
        savingAmount.innerText = updatedSavingAmount.toFixed(2);

        const remainingBalance = document.getElementById('remaining-balance');
        const updatedRemainingBalance = updatedBalanceAmount - updatedSavingAmount;
        remainingBalance.innerText = updatedRemainingBalance.toFixed(2);
    }

    else {
        alert("You don't have enough balance for saving");
    }



    clearInputField();
});