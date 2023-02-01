const caseBtnPlus = document.getElementById('case-btn-plus');
caseBtnPlus.addEventListener('click', ()=>{
  const caseInputField = document.getElementById('case-input-field');
  const caseInputStr = caseInputField.value;
  const previousCaseQuantity = parseInt(caseInputStr);
  const newCaseQuantity = previousCaseQuantity + 1;

  caseInputField.value = newCaseQuantity;
})


// decrease button state 
const caseBtnMinus = document.getElementById('case-btn-minus');
caseBtnMinus.addEventListener('click', () =>{
  const caseInputField = document.getElementById('case-input-field');
  const caseInputFieldStr = caseInputField.value;
  const previousCaseQuantity = parseInt(caseInputFieldStr);

  const newCaseQuantity = previousCaseQuantity - 1;
  caseInputField.value = newCaseQuantity;
  
})