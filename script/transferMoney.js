document.getElementById("transfer-btn").addEventListener("click", function () {
  //?1  1- get the user number
  const tranasferNumber = getValueFromInput("transfer-number");
  if (tranasferNumber.length != 11) {
    alert("Enter a valid number");
  }
  // console.log(tranasferNumber)
  //? 2- get the transfer amount
  const transferAmount = getValueFromInput("transfer-amount");
  const newBalance = getBalance() - transferAmount;
  if (newBalance < 0) {
    alert("Insufficient funds");
    return;
  }
  // console.log(transferAmount)
  //? 3- get pin and verify
  const pin = getValueFromInput("transfer-pin");
  if (pin === "1234") {
    //? 3-1 true:: alert transfer successful

    alert(
      `Transfer Money Successful to ${tranasferNumber} transfer amount ${transferAmount} at ${new Date()}`,
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
                <img src="assets/opt-3.png" alt="" class="mx-auto">
            </div>
            <div>
                <h2 class=" text-neutral/70 font-bold">Transfer Money</h2>
                <p class="text-neutral/50 text-sm"> ${transferAmount} taka transfer successfull to ${tranasferNumber}, at ${new Date()} </p>
            </div>
        </div>
    `;
    //? 4- append the div in the history container
    history.appendChild(newHistory);
  } else {
    //? 3-2 false:: alert invalid pin and return

    alert("Invalid Pin");
    return;
  }
});
