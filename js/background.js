const img = {
  spring: "karigurashi002",
  summer: "ponyo050",
  autumn: "chihiro014",
  winter: "mononoke024"
};

const today = new Date();
let chosenImage = "";

// 크리스마스 확인
if (today.getMonth() === 11 && today.getDate() === 25) {
  chosenImage = "./images/christmas_background.jpg";
} else {
  // 계절에 따른 이미지 선택
  const month = today.getMonth();
  if (month >= 2 && month <= 4) {
    chosenImage = img.spring;
  } else if (month >= 5 && month <= 7) {
    chosenImage = img.summer;
  } else if (month >= 8 && month <= 10) {
    chosenImage = img.autumn;
  } else {
    chosenImage = img.winter;
  }
  chosenImage = `./images/${chosenImage}.jpg`;
}

// 이미지 태그 생성
const bgImage = document.createElement("img");
bgImage.src = chosenImage;

// 생성한 태그 html에 넣어주기
const body = document.body;
body.appendChild(bgImage);
