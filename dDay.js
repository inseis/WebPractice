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

const getChrist = function () {
  const christmasEve = new Date("2023-12-25");
  const today = new Date();

  const due = christmasEve.getTime() - today.getTime();

  const dueDay = String(Math.floor(due / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );

  Christmas.innerText = `D-${dueDay}`;
};

const getBday = function () {
  const christmasEve = new Date("2024-04-08");
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

