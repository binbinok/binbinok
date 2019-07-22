
let minute = 1;
let second = 15;
const payTime = setInterval(() => {
  let setTime = t => String(t).padStart(2, '0');
  second -= 1;
  this.timer = `${setTime(minute)}分${setTime(second)}秒`;
  if (minute === 0 && second === 0) {
    clearInterval(payTime);
  }

  if (second === 0) {
    second = 59;
    minute -= 1;
  }
}, 1000);