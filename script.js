const inputEle = document.querySelector('.input');
const backbtnEle = document.querySelector('.backbtn');
const beforeSearchEle = document.querySelector('.before-search');
const keyEle = document.querySelectorAll('.key');


keyEle.forEach((key) => {
  key.addEventListener('click', () => {
    const value = key.textContent.trim();
    if (value.length === 1) {
      inputEle.value += value;
    }
  });
});

backbtnEle.addEventListener('click', () => {
  inputEle.value = inputEle.value.slice(0, -1);
});