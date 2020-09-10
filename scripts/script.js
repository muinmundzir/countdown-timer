const dayEl = document.querySelector("#d-sec");
const hourEl = document.querySelector("#h-sec");
const minuteEl = document.querySelector("#m-sec");
const secondEl = document.querySelector("#s-sec");

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const modal = document.querySelector("#modal");

// FORM
const descEl = document.querySelector("#desc");
const dateEl = document.querySelector("#date");
const count = document.querySelector("#count");

open.addEventListener("click", () => {
  modal.classList.add("active");
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});

count.addEventListener("click", () => {
  const desc = document.querySelector("#countDesc");
  desc.innerHTML = descEl.value;
  const date = dateEl.value;
  if (dateEl.value !== "") {
    countTime();
    setInterval(countTime, 1000);
  }

  modal.classList.remove("active");
});

const countTime = () => {
  const targetDayDate = formatDate(dateEl.value);
  const currentDate = new Date();

  const totalSeconds = (targetDayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  console.log(seconds);

  dayEl.innerHTML = formatTime(days);
  hourEl.innerHTML = formatTime(hours);
  minuteEl.innerHTML = formatTime(minutes);
  secondEl.innerHTML = formatTime(seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : `${time}`;
};

const formatDate = (date) => {
  const d = date.split(/\D/);
  return new Date(d[0], --d[1], d[2]);
};
