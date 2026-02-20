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
    const history = document.getElementById("history-container");
    //? 2- create a new div
    const newHistory = document.createElement("div");
    //? 3- create a innerHTML in the new div
    newHistory.innerHTML = `
            <div class="bg-base-100 py-5 rounded-md pl-4 flex items-center gap-3">
            <div class="bg-base-200 w-[46px] h-[46px] rounded-full justify-center content-center">
                <img src="assets/opt-1.png" alt="" class="mx-auto">
            </div>
            <div>
                <h2 class=" text-neutral/70 font-bold">Add Money</h2>
                <p class="text-neutral/50 text-sm">Add money ${amount} taka successfull from ${bankAccount}, at ${new Date()} </p>
            </div>
        </div>
    `;
    //? 4- append the div in the history container
    history.appendChild(newHistory);
  } else {
    alert("Invalid Pin Number");
    return;
  }
});
