// making a function where we can get text element value by id
function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalStr = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt( currentPhoneTotalStr );
  return currentPhoneTotal;
}

// making a function to set the value
function setTextElementValuebyId( elementId, value ) {
  const currentSubTotalElement = document.getElementById(elementId);
  currentSubTotalElement.innerText = value;
}

// making a function where we can calculate total subtotal
function calculateSubTotal(){

  const currentPhoneTotal = getTextElementValueById( 'phone-price' );
  const currentCaseTotal = getTextElementValueById( 'case-price' );

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValuebyId( 'sub-total', currentSubTotal );

  // tax calculation
  const taxAmountStr = ( currentSubTotal * 0.1 ).toFixed( 2 );
  const taxAmount = parseFloat( taxAmountStr );
  setTextElementValuebyId( 'tax-amount', taxAmount );

  // final amount
  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValuebyId( 'total-amount', finalAmount );
  
}