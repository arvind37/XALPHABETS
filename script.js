const inputEle = document.querySelector('.input');
const backbtnEle = document.querySelector('.backbtn');
const beforeSearchEle = document.querySelector('.before-search');
const keyEle = document.querySelectorAll('.key');


keyEle.forEach((key) => {
  key.addEventListener('click', () => {
    inputEle.value += key.textContent;
  })
});

backbtnEle.addEventListener('click', () => {
  if(inputEle.value.length > 0) {
    inputEle.value = inputEle.value.slice(0, inputEle.value.length - 1);
  }
});
