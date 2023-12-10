const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

const paintGreetings = function(name){
  greeting.innerText = `${name}님, 오늘도 화이팅!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const handleSubmit = function(event){
  event.preventDefault(); 
  const userName = loginInput.value;            

  localStorage.setItem('userName', userName);

  loginForm.classList.add(HIDDEN_CLASSNAME);    

  paintGreetings(userName);
}


const savedUserName = localStorage.getItem('userName');

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleSubmit);
}else{
  paintGreetings(savedUserName);
}