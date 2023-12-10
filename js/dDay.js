const gotchaDay = document.querySelector(".ddate1");
const Christmas = document.querySelector(".ddate2");
const birthday = document.querySelector(".ddate3");
const movie = document.querySelector(".ddate4");

const getGotcha = function () {
  const christmasEve = new Date("2024-01-17");
  const today = new Date();

  const due = christmasEve.getTime() - today.getTime();

  const dueDay = String(Math.floor(due / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );

  gotchaDay.innerText = `D-${dueDay}`;
};

const image = new Image();
image.src = 'C:/Users/1/Downloads/CherrieCho.github.io-main/CherrieCho.github.io-main/images/christmas_background.jpg';

image.onload = function() {
  document.body.style.backgroundImage = `url("${image.src}")`;
};

image.onerror = function() {
  console.error('이미지 로드에 실패했습니다.');
};

const getChrist = function () {
  const christmasEve = new Date("2023-12-25");
  const today = new Date();

  const due = christmasEve.getTime() - today.getTime();
  const dueDay = String(Math.floor(due / (1000 * 60 * 60 * 24))).padStart(2, "0");

  Christmas.innerText = `D-${dueDay}`;

  if (today.getMonth() === 11 && today.getDate() === 25) {
    // 크리스마스 배경으로 변경
    document.body.style.backgroundImage = 'url("./images/christmas_background.jpg")';

    // 크리스마스 배경에 대한 추가적인 스타일이나 변경이 필요한 경우 여기에 추가
  }
};

const getBday = function () {
  const christmasEve = new Date("2024-12-0");
  const today = new Date();

  const due = christmasEve.getTime() - today.getTime();

  const dueDay = String(Math.floor(due / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );

  birthday.innerText = `D-${dueDay}`;
};

const getMovie = function(){
  const christmasEve = new Date("2023-12-01");
  const today = new Date();

  const due = christmasEve.getTime() - today.getTime();

  const dueDay = String(Math.floor(due / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );

  movie.innerText = `D-${dueDay}`;
}

getGotcha();
getChrist();
getBday();
getMovie();

