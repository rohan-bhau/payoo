document.getElementById("cashout-btn").addEventListener("click", function () {
  //? 1. get the agent number & validate

  const agentNumber = getValueFromInput("agent-number");

  if(agentNumber.length !=11){
    alert("Enter a valid number")
    return
  }
  //   //? 2. get the amount number , validate , convert to number

  const cashoutAmount = getValueFromInput("cashout-amount");

  //? 3. get the current amount , validate , convert to number

  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);

  //? 4. calculate the new balance

  const newBalance = Number(balance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Insufficient Fund");
    return;
  }

  //   //? 5. get the pin and verify
  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    //? 5.1 true :: show an alert > set balance

    alert("CashOut successfull");
    console.log(newBalance);
    balanceElement.innerText = newBalance;
  } else {
    //? 5.2 false :: show an alert > return
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   //? 1. get the agent number & validate

//   const agentNumberInput = document.getElementById("agent-number");
//   const agentNumber = agentNumberInput.value;
//   console.log(agentNumber);
//   if(agentNumber.length !=11){
//     alert("Enter a valid number")
//     return
//   }

//   //? 2. get the amount number , validate , convert to number

//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);
//   //? 3. get the current amount , validate , convert to number

//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);
//   //? 4. calculate the new balance

//   const newBalance = Number(balance) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Insufficient Fund");
//     return;
//   }
//   //? 5. get the pin and verify
//   const pinInput = document.getElementById('cashout-pin')
//   const pin = pinInput.value;
//   if(pin === "1234"){
//       //? 5.1 true :: show an alert > set balance

//       alert("CashOut successfull")
//       console.log(newBalance);
//       balanceElement.innerText = newBalance;
//   }else{
//       //? 5.2 false :: show an alert > return
//     alert("Invalid Pin")
//     return
//   }
// });
