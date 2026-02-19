function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;

  console.log(value);
  return value;
}

//? get balance

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;

  console.log(Number(balance));
  return Number(balance);
}

//? set balance value

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}
