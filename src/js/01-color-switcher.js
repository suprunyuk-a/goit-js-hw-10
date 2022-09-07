function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elemStart = document.querySelector('[data-start]');
const elemStop = document.querySelector('[data-stop]');
let timerId;

elemStart.addEventListener('click', event => {
  timerId = setInterval(() => {
    elemStart.setAttribute('disabled', '');
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:' + getRandomHexColor());
  }, 1000);
});

elemStop.addEventListener('click', event => {
  clearInterval(timerId);
  elemStart.removeAttribute('disabled');
});
