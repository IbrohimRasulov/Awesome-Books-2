import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';

function printTime() {
  const currentDate = document.getElementById('currentDate');
  currentDate.innerHTML = `<div>${DateTime.now().toFormat('MMMM dd yyyy, hh:mm:ss')}</div>`;
}
setInterval(printTime, 1000);