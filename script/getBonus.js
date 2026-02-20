document.getElementById("bonus-btn").addEventListener("click", function(){
    //? 1- get the coupon number and match
    const couponNumber = getValueFromInput("coupon-number")
    // console.log(couponNumber)
    if((couponNumber === "Arna Anthonia") || (couponNumber ==="Arna corraya") || (couponNumber ==="Arna Anthonia Corraya")){
        //? 2-1 true:: alert you got the bonus 
        alert("You get a Bonus of 5000 tk")
        const balance = getBalance()
        const newBalance = balance + 5000;
        setBalance(newBalance)
    }else{
        //? 2-2 false:: alert invalid coupon and return

        alert("Invalid Coupon")
        return
    }
})