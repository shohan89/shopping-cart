// let's make a function for increase and decrease the phone quantity
function updatePhoneQuantity (isIncrease){
  // get the input field
  const phoneInputField = document.getElementById('phone-input-field');
  const phoneInputStr = phoneInputField.value;
  const previousPhoneQuantity = parseInt(phoneInputStr);
  
  let newPhoneQuantity;
  if( isIncrease === true ){
    newPhoneQuantity = previousPhoneQuantity + 1;
  }
  else{
    newPhoneQuantity = previousPhoneQuantity - 1;
  }

  phoneInputField.value = newPhoneQuantity;
  return newPhoneQuantity;
}

//  writing a function for update total phone price
function updateTotalPhonePrice( newPhoneQuantity ){
  // get the phone price
  const totalPhonePrice = newPhoneQuantity * 1219;

  const phonePriceElement = document.getElementById('phone-price');
  phonePriceElement.innerText = totalPhonePrice;
} 

// get the phone plus button and add event listener
document.getElementById('phone-plus-btn').addEventListener('click', ()=>{
  const newPhoneQuantity = updatePhoneQuantity( true );

  updateTotalPhonePrice( newPhoneQuantity );
});

// get the phone minus button and add event listener
document.getElementById('phone-minus-btn').addEventListener('click', ()=>{
  const newPhoneQuantity = updatePhoneQuantity( false );

  updateTotalPhonePrice( newPhoneQuantity );
});