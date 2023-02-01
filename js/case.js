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
  
}


document.getElementById('case-btn-plus').addEventListener('click', ()=>{
  updateCaseQuantity( true );
})


// decrease button state 
document.getElementById('case-btn-minus').addEventListener('click', () =>{
  updateCaseQuantity( false );
  
})