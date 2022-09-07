import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const first_delay = document.querySelector('[name="delay"]').valueAsNumber;
  const step = document.querySelector('[name="step"]').valueAsNumber;
  const amount = document.querySelector('[name="amount"]').valueAsNumber;

  for (let i = 0; i < amount; i++) {
    let delay = first_delay + i * step;
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        //console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay} ms`
        );
      })
      .catch(({ position, delay }) => {
        //console.log(`❌ Rejected promise ${position} in ${delay} ms`);
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay} ms`
        );
      });
  }
});
