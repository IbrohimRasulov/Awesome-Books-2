function printTime() {
  const currentDate = document.getElementById('currentDate');
  // eslint-disable-next-line no-undef
  currentDate.innerHTML = `<div>${luxon.DateTime.now().toFormat('MMMM dd yyyy, hh:mm:ss')}</div>`;
}
setInterval(printTime, 1000);