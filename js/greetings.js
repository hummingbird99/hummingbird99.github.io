/* HTML 태그 변수 선언 */
const loginForm = document.querySelector("#login-form"); // form 태그 변수 선언
const loginInput = document.querySelector("#login-form input"); // input 태그 변수 선언
const greeting = document.querySelector("#greeting"); // h1 태그 변수 선언


/* 변수 선언 */
const HIDDEN_CLASSNAME = "hidden"; // class 변수 선언
const USERNAME_KEY = "username"; // local storage key 변수 선언


/* 로컬 스토리지에 저장 */
function onLoginSubmit(event) { // 3.
    event.preventDefault(); // event.preventDefault: 이벤트의 기본 동작을 실행하지 않는다. = submit event의 새로고침을 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME); // class add = show the form
    const username = loginInput.value; // input 값을 변수로 선언
    localStorage.setItem(USERNAME_KEY, username); // 변수(value)와 key를 local storage에 저장
    paintGreetings(username); // input 값을 인자로 function 수행
}


/* 로컬 스토리지에서 키값 불러오기 */
function paintGreetings(username) { // 4.
    greeting.innerText = `Hello ${username}`; // h1 id에 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);// show the greetings
}


/* 폼 작성 조건문 */
const savedUsername = localStorage.getItem(USERNAME_KEY); // 1. local storage에서 value 불러오기

if(savedUsername === null) { // 2.
    loginForm.classList.remove(HIDDEN_CLASSNAME) // class remove = show the form
    loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트 발생 시 function 수행
} else { // 5.
    paintGreetings(savedUsername); // local storage의 value를 savedUsername 인자로 받고 function 수행
}