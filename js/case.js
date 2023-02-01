function updateCaseQuantity ( isIncrease ) {
  const caseInputField = document.getElementById('case-input-field');
  const caseInputStr = caseInputField.value;
  const previousCaseQuantity = parseInt(caseInputStr);

  let newCaseQuantity;

  if ( isIncrease === true ) {
    newCaseQuantity = previousCaseQuantity + 1;
  }
  else {
    newCaseQuantity = previousCaseQuantity - 1;
  }

  caseInputField.value = newCaseQuantity;

  return newCaseQuantity;
}


document.getElementById('case-btn-plus').addEventListener('click', ()=>{

  const newCaseQuantity = updateCaseQuantity( true );
  const caseTotalPrice = newCaseQuantity * 59;

  const casePriceElement = document.getElementById('case-price');
  casePriceElement.innerText = caseTotalPrice;

})


// decrease button state 
document.getElementById('case-btn-minus').addEventListener('click', () =>{

  const newCaseQuantity = updateCaseQuantity( false );
  const caseTotalPrice = newCaseQuantity * 59;

  const casePriceElement = document.getElementById('case-price');
  casePriceElement.innerText = caseTotalPrice;

})