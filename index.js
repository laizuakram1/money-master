
document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalIncomeInput = document.getElementById('total-income');
    const totalIncome = totalIncomeInput.value;

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
})