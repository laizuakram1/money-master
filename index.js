
document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodInput = document.getElementById('food-input');
    const foodInputField = parseInt(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentInputField = parseInt(rentInput.value);

    const clothesInput = document.getElementById('clothes-input');
    const clothesInputField = parseInt(clothesInput.value);
    const totalInput = foodInputField + rentInputField + clothesInputField;

    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalInput;
})