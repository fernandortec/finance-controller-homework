function phoneMasking() {
  let formatedPhone = document.getElementById('phoneNumber').value;

  if (formatedPhone[0] != '(' && formatedPhone[0] != undefined) {
    document.getElementById('phoneNumber').value = '(' + formatedPhone[0];
  };

  if (formatedPhone[3] != ")" && formatedPhone[3] != undefined){
    document.getElementById('phoneNumber').value = formatedPhone.slice(0,3) + ")"+formatedPhone[3]
  }

  if (formatedPhone[9] != "-" && formatedPhone[9] != undefined){
    document.getElementById('phoneNumber').value = formatedPhone.slice(0,9) + "-"+formatedPhone[9] 
  }


}
