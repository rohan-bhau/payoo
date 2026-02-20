let couponUsed = false;
document.getElementById("bonus-btn").addEventListener("click", function () {
  //? 1- get the coupon number and match
  const couponNumber = getValueFromInput("coupon-number");
  // console.log(couponNumber)
  if (couponUsed) {
    alert(`You have already used the coupon code`);
    return;
  }
  if (
    couponNumber === "Arna Anthonia" ||
    couponNumber === "Arna corraya" ||
    couponNumber === "Arna Anthonia Corraya"
  ) {
    //? 2-1 true:: alert you got the bonus
    alert("You get a Bonus of 5000 tk");
    const balance = getBalance();
    const newBalance = balance + 5000;
    setBalance(newBalance);
    couponUsed = true;
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
                <h2 class=" text-neutral/70 font-bold">Bonus</h2>
                <p class="text-neutral/50 text-sm">${new Date()}</p>
            </div>
    `;
    //? 4- append the div in the history container
    history.appendChild(newHistory);
  } else {
    //? 2-2 false:: alert invalid coupon and return

    alert("Invalid Coupon");
    return;
  }
});
