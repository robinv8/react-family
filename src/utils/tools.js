export function getQueryString(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const indexNum = 1;
  if (window.location.href.indexOf('?') > 0 && window.location.href.indexOf(name) > 0) {
    const r = window.location.href.split('?')[indexNum].match(reg);
    if (r) return unescape(r[2]);
    return null;
  }
  return '';
}

export function splitTime(ms) {
  let time = {};
  let hours = Math.floor(ms / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  time = { hours, minutes, seconds };

  return time;
}

export function formatTime(ms, type) {
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  let time = '';

  if (days < 10) {
    days = `0${days}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (days > 0) {
    time = `${days}天${hours}时${minutes}分`;
  } else if (type) {
    time = `${hours}:${minutes}:${seconds}`;
  } else {
    time = `${hours}时${minutes}分`;
  }
  return time;
}

// 检查版本号
export function versionToNum(a) {
  const b = a.toString();
  const c = b.split('.');
  const num_place = ['', '0', '00', '000', '0000'];
  const r = num_place.reverse();
  for (let i = 0; i < c.length; i++) {
    const len = c[i].length;
    c[i] = r[len] + c[i];
  }
  const res = c.join('');
  return res;
}
