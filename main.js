const cardForm = document.getElementById('card-form');
cardForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const cardNumber1 = document.getElementById('cardInput1');
    const cardNumber2 = document.getElementById('cardInput2');
    const cardNumber3 = document.getElementById('cardInput3');
    const cardNumber4 = document.getElementById('cardInput4');

    // Get input values.
    const cardNumberValue1 = cardNumber1.value;
    const cardNumberValue2 = cardNumber2.value;
    const cardNumberValue3 = cardNumber3.value;
    const cardNumberValue4 = cardNumber4.value;
    
    // Makes array of numbers out of array of 4 inputs.
    const cardNumberStringFormat = `${cardNumberValue1}${cardNumberValue2}${cardNumberValue3}${cardNumberValue4}`.split('');
    const cardNumberFull = cardNumberStringFormat.map(
        (digitString) => {
            return parseInt(digitString);
        }
    );
    const isValid =  validateCred(cardNumberFull);
        // Make all inputs green color if is valid.
        cardNumber1.classList.toggle('input-success', isValid);
        cardNumber2.classList.toggle('input-success', isValid);
        cardNumber3.classList.toggle('input-success', isValid);
        cardNumber4.classList.toggle('input-success', isValid);
        // Make all inputs red color if is invalid.
        cardNumber1.classList.toggle('input-error', !isValid);
        cardNumber2.classList.toggle('input-error', !isValid);
        cardNumber3.classList.toggle('input-error', !isValid);
        cardNumber4.classList.toggle('input-error', !isValid);
};


function validateCred(digits) {
    let sumOdd = 0;
    let sumEven = 0;
    
    for (let digitIndex = (digits.length - 1); digitIndex >= 0; digitIndex--) {
      const currentDigit = digits[digitIndex];
      const isOdd = digitIndex % 2 === 1;
      if (isOdd) {
         sumOdd += currentDigit;
      } else {
          let multipliedDigits = 2 * currentDigit;
          if (multipliedDigits > 9) {
            multipliedDigits = Math.floor(multipliedDigits / 10) + (multipliedDigits % 10);    
          }
          sumEven += multipliedDigits;
      } 
    }
    const totalSum = sumOdd + sumEven;
    const validResult = totalSum % 10 === 0;
    return validResult;
  }
 

  