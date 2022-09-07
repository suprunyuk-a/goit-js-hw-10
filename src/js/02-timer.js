import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

document.querySelector('[data-start]').setAttribute('disabled', '');
let timerId;
let timeEnd;
let timeStart;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      document.querySelector('[data-start]').setAttribute('disabled', '');
      alert('Please choose a date in the future');
      //Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      timeStart = selectedDates[0];
      document.querySelector('[data-start]').removeAttribute('disabled');
    }
  },
};

document.querySelector('[data-start]').addEventListener('click', event => {
  timeEnd = timeStart - new Date();
  timerId = setInterval(() => {
    timeEnd = timeEnd - 1000;
    const timer = convertMs(timeEnd);
    timeEnd < 1000 ? clearInterval(timerId) : true;
    document.querySelector('[data-days]').innerHTML = timer.days;
    document.querySelector('[data-hours]').innerHTML = timer.hours;
    document.querySelector('[data-minutes]').innerHTML = timer.minutes;
    document.querySelector('[data-seconds').innerHTML = timer.seconds;
  }, 1000);
});

function addLeadingZero(value) {
  return value.padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(String(Math.floor(ms / day)));
  const hours = addLeadingZero(String(Math.floor((ms % day) / hour)));
  const minutes = addLeadingZero(
    String(Math.floor(((ms % day) % hour) / minute))
  );
  const seconds = addLeadingZero(
    String(Math.floor((((ms % day) % hour) % minute) / second))
  );

  return { days, hours, minutes, seconds };
}

flatpickr(document.querySelector('input[type="text"]'), options);
