document.getElementById("pay-bill-btn").addEventListener("click", function () {
  //? 1- select a bank first and get the bank
  const bankAccount = getValueFromInput("pay-bill-bank");
  if (bankAccount == "Select Bank") {
    alert("Select a Bank first");
    return;
  }
  //? 2- get the account number
  const accountNumber = getValueFromInput("biller-number");
  // console.log(accountNumber)
  if (accountNumber.length != 11) {
    alert("Enter a valid account number");
    return;
  }
  //? 3- get the amount
  const amount = getValueFromInput("payable-amount");
  const newBalance = getBalance() - amount;
  if (newBalance < 0) {
    alert("Insufficient funds");
    return;
  }
  //? 4 get the pin and verify
  const pin = getValueFromInput("pay-bill-pin");
  if (pin === "1234") {
    //? 4-1 - > true :: alert pay bill successfull
    alert(
      `Pay bill ${amount} taka successfull to ${accountNumber}, at ${new Date()}`,
    );
    setBalance(newBalance);
    //? 1- get the  history container
    const history = document.getElementById("history-container");
    //? 2- create a new div
    const newHistory = document.createElement("div");
    //? 3- create a innerHTML in the new div
    newHistory.innerHTML = `
            <div class="bg-base-100 py-5 rounded-md pl-4 flex items-center gap-3">
            <div class="bg-base-200 w-[46px] h-[46px] rounded-full justify-center content-center">
                <img src="assets/opt-5.png" alt="" class="mx-auto">
            </div>
            <div>
                <h2 class=" text-neutral/70 font-bold">Pay Bill</h2>
                <p class="text-neutral/50 text-sm">Pay Bill ${amount} taka successfull to ${accountNumber}, at ${new Date()} </p>
            </div>
        </div>
    `;
    //? 4- append the div in the history container
    history.appendChild(newHistory);
  } else {
    //? 4-2 -> false :: alert invalid pin

    alert("Invalid Pin");
    return;
  }
});
