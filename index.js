const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");
const messageElement = document.querySelector(".message");

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(Number(amountToBeReturned / availableNotes[i]));
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].textContent = numberOfNotes;
    }
}

function myFunction(event) {
    event.preventDefault();
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const cashGiven = parseFloat(document.getElementById("cash-given").value);

    if (billAmount <= 0) {
        messageElement.textContent = "Bill amount cannot be less than or equal to zero";
        for (let i = 0; i < noOfNotes.length; i++) {
            noOfNotes[i].textContent = "";
        }
        return;
    } else {
        calcChange(billAmount, cashGiven);
    }
}

function calcChange(billAmount, cashGiven) {
    if (cashGiven > billAmount) {
        const amountToBeReturned = cashGiven - billAmount;
        calculateChange(amountToBeReturned);
        messageElement.textContent = ""; // Clear previous message
    } else {
        for (let i = 0; i < noOfNotes.length; i++) {
            noOfNotes[i].textContent = "";
        }
        messageElement.textContent = "Or bhaiii aa gaya swaad?";
    }
}


