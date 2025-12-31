const inputEle = document.querySelector('.input');
const checkbtnEle = document.querySelector('.checkbtn');
const resultEle = document.querySelector('.result');

checkbtnEle.addEventListener('click', () => {
  const value = inputEle.value;
  const num = Number(value);

  if (value.trim() === '' || isNaN(num)) {
    resultEle.innerHTML = 'Not a valid number!';
    return;
  }

  if (num % 2 === 0) {
    resultEle.innerHTML = `The number ${num} is even!`;
  } else {
    resultEle.innerHTML = `Oops, ${num} is odd!`;
  }
});


