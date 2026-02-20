document.getElementById("add-money-btn").addEventListener("click", function () {
  //? 1- get the bank account

  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select Bank") {
    alert("Select a bank first");
    return;
  }

  //? 2- get the bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Enter a valid account number");
    return;
  }

  //? 3- get amount

  const amount = getValueFromInput("add-money-amount");

  const newBalance = getBalance() + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin === "1234") {
    alert(`Add Money Successfull from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);

    //? 1- get the  history container
    const history = document.getElementById("history-container")
    //? 2- create a new div
    const newHistory = document.createElement("div")
    //? 3- create a innerHTML in the new div
    newHistory.innerHTML = `
    <div class="bg-base-100 py-5 rounded-md pl-4">
        Add Money Successfull from ${bankAccount}, acc-no ${accno} at ${new Date() }
        </div>
    `
    //? 4- append the div in the history container
    history.appendChild(newHistory);
  } else {
    alert("Invalid Pin Number");
    return;
  }
});
