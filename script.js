const inputEle = document.querySelector('.input');
const checkbtnEle = document.querySelector('.checkbtn');
const resultEle = document.querySelector('.result');


checkbtnEle.addEventListener('click', () => {
  const value = inputEle.value;
  console.log(value);
  if(value % 2 === 0) {
    console.log('even');
    resultEle.innerHTML = `The number ${value} is even!`;
  } else {
    console.log('odd');
    resultEle.innerHTML = `Oops, ${value} is odd!`;
  }
});

