const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

const getClock = function(){
  const today = new Date(); 
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  
  clock.innerText = `${hours}: ${minutes}: ${seconds}`;
}

const getDate = function(){
  const today = new Date(); 
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  date.innerText = `${year}년 ${month}월 ${day}일`
}

getClock();   
getDate();
setInterval(getClock, 1000);
