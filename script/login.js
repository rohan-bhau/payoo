
document.getElementById('login-btn').addEventListener('click', function(){
    //?1. get the mobile number input
    const mobileNumberInput = document.getElementById('input-number');
    const mobileNumber = mobileNumberInput.value;
    console.log(mobileNumber)

    //?2. get the pin number input
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin)

    //?3 match mobile number and pin number
    if(mobileNumber=="01234567890" && pin=="1234"){
        //?3-1 true , alert login successful

        alert("Login Successful")

        window.location.assign("home.html")

    }else{
        //? false alert login failed and return
        alert("Login Failed");
        return;
    }

})