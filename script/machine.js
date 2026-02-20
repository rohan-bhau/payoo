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

//? id> hide all > show id

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");
  const transferMoney = document.getElementById("transfer-money");
  const bonus = document.getElementById("get-bonus")

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");
  transferMoney.classList.add("hidden");
  bonus.classList.add("hidden")

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
