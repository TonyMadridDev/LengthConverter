const lengthForm = document.getElementById('length-form');
const enteredAmount = document.getElementById('amount');
const convertFrom = document.getElementById('from');
const convertTo = document.getElementById('to');
const resetBtn = document.getElementById('btn-reset');
const selectElement = document.querySelectorAll('select');
const cogWheel = document.getElementById('middle');
const results = document.getElementById('results');

// Calculate 
function calculateLength(e) {
  const amount = Number(enteredAmount.value);

  if (validateLengthConverter(amount) != true) {

    results.innerHTML = '';

    const fromUnit = convertFrom.value;
    const toUnit = convertTo.value;

    const result = convertLength(amount, fromUnit, toUnit);


    cogWheel.style.display = 'flex';

    setTimeout(() => {
      cogWheel.style.display = 'none';
      displayResults(result, toUnit);
    }, 1000);
  
  }
  e.preventDefault();
  
}

// Convert function 
function convertLength(amount, fromUnit, toUnit) {

  let inMillimeter = 0;
  let makeThisMillimeter = 0;
  let result;

  switch(fromUnit) {
    case "millimeter":
      makeThisMillimeter = 1;
      break;
    case "centimeter":
      makeThisMillimeter = 10;
      break;
    case "meter":
      makeThisMillimeter = 1000;
      break;
    case "kilometer":
      makeThisMillimeter = 1000000;
      break;
    case "foot":
      makeThisMillimeter = 304.8;
      break;
    case "inch":
      makeThisMillimeter = 25.4;
      break;
    case "mile":
      makeThisMillimeter = 1609344;
      break;
    case "yard":
      makeThisMillimeter = 914.4;
      break;
  }
  
    inMillimeter = makeThisMillimeter * amount;

  //Convert milimeter value to the targeted unit
  switch(toUnit) {
    case "millimeter":
      result = inMillimeter;
      break;
    case "centimeter":
      result = inMillimeter / 10;
      break;
    case "meter":
      result = inMillimeter / 1000;
      break;
    case "kilometer":
      result = inMillimeter / 1000000;
      break;
    case "foot":
      result = inMillimeter / 304.8;
      break;
    case "inch":
      result = inMillimeter / 25.4;
      break;
    case "mile":
      result = inMillimeter / 1609344;
      break;
    case "yard":
      result = inMillimeter / 914.4;
      break;
  }
  return result;
}

// Validate input value 
function validateLengthConverter(amount) {
  if (amount <= 0) {
    alert('Please Enter Amount')
    return true;

  } else {
    return false;
  }
}

// Display Results
function displayResults(result, toUnit) {

  results.innerHTML = `${result} ${toUnit}`
}

// Clear Results

function clearResults() {
    enteredAmount.value = "";
    results.innerHTML = "";  
}


// Event Listeners
lengthForm.addEventListener('submit', calculateLength);
resetBtn.addEventListener('click', clearResults);
