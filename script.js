const outputText = document.querySelector('.output-text');
const backbtnEle = document.querySelector('.backbtn');
const keyEle = document.querySelectorAll('.key');

keyEle.forEach((key) => {
  key.addEventListener('click', () => {
    const value = key.textContent.trim();
    if (value.length === 1) {
      outputText.textContent += value;
    }
  });
});

backbtnEle.addEventListener('click', () => {
  outputText.textContent =
    outputText.textContent.slice(0, -1);
});
