// background.js 파일
const img = ["chihiro014", "chihiro043", "karigurashi002", "karigurashi028", "mononoke024", "ponyo050", "chihiro015"];

const chosenImage = img[Math.floor(Math.random() * img.length)];

// js에서 이미지 태그 생성하기
const bgImage = document.createElement("img");

// 크리스마스 날짜 확인
const today = new Date();
if (today.getMonth() === 11 && today.getDate() === 25) {
  // 크리스마스인 경우 크리스마스 이미지 사용
  bgImage.src = "./images/christmas_background.jpg";
} else {
  // 그 외의 경우 랜덤 이미지 사용
  bgImage.src = `./images/${chosenImage}.jpg`;
}

// 생성한 태그 html에 넣어주기
const body = document.body;
body.appendChild(bgImage);
