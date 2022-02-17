// custom function 


document.getElementById('calculate-btn').addEventListener('click', function(){

    const totalIncomeInput = document.getElementById('total-income');
    const totalIncome = parseInt(totalIncomeInput.value);
   
    const foodInput = document.getElementById('food-input');
    const foodInputField = parseInt(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentInputField = parseInt(rentInput.value);

    const clothesInput = document.getElementById('clothes-input');
    const clothesInputField = parseInt(clothesInput.value);

    const totalInput = foodInputField + rentInputField + clothesInputField;

    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalInput;

    const balanceTotal = document.getElementById('balance');
    balanceTotal.innerText = totalIncome - totalInput;
    if(totalExpense.innerText > totalIncome){
        alert('do not enough balance.!!');
    }
    
});

// savings button 
    const totalIncomeInput = document.getElementById('total-income');
    const totalIncome = parseInt(totalIncomeInput.value);

    const foodInput = document.getElementById('food-input');
    const foodInputField = parseInt(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentInputField = parseInt(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputField = parseInt(clothesInput.value);
    const totalInput = foodInputField + rentInputField + clothesInputField;

document.getElementById('savings-btn').addEventListener('click', function(){
    const totalIncomeInput = document.getElementById('total-income');
    const totalIncome = parseInt(totalIncomeInput.value);

    const savingsInput = document.getElementById('savings-input');
    const savingsPercent = parseInt(savingsInput.value);
    const totalSavings = parseInt(totalIncome) / 100;
    const finalSavings = totalSavings * savingsPercent;

    const savingsAmountInput = document.getElementById('savings-amount');
    const savingsAmount = parseInt(finalSavings)
    savingsAmountInput.innerText = savingsAmount;

    const balanceTotal = document.getElementById('balance');
    const balanceInner = parseFloat(balanceTotal.innerText);
    

    const remainingBalance = document.getElementById('final-balance');
    const reminingTotal =  balanceInner - finalSavings;
    remainingBalance.innerText = reminingTotal;

    
})