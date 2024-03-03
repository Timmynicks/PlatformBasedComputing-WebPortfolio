const node = document.getElementById("savingsBalance");
console.log(node);

document.addEventListener('DOMContentLoaded', () => {
    const savingsButton = document.getElementById("deposit_savings");
    console.log(savingsButton);

    savingsButton.addEventListener('click', () => {
        var savings_node = document.querySelector('#savingsBalance');
        var savings_value = parseInt(savings_node.textContent, 10);
        savings_value += 100;
        savings_node.textContent = savings_value;
    });

    document.querySelector('#deposit_checking').addEventListener('click', () => {
        var checkings_node = document.querySelector('#checkingBalance');
        var checkings_value = parseInt(checkings_node.textContent, 10);
        checkings_value += 100;
        checkings_node.textContent = checkings_value;
    });

    document.querySelector('#empty_savings').addEventListener('click', () => {
        var savings_node = document.querySelector('#savingsBalance');
        var savings_value = parseInt(savings_node.textContent, 10);
        savings_value = 0;
        savings_node.textContent = savings_value;
        alert("Savings Cleared");
    });
});