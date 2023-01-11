/* 변수 선언 */
const clock = document.querySelector("h2#clock"); // h2 id 변수 선언

function getClock() {
    /* 시계 변수 선언 */ // 재사용할 수 있는 객체 코드 생성(생성자 함수 이용)
    const date = new Date(); // 생성자 함수(Constructor Function)는 반드시 new 연산자를 붙여서 실행, 첫 글자는 대문자로 작성
    const hours = String(date.getHours()).padStart(2, "0"); //getHours method로 로컬 타임 return, padStart method로 String length 지정 및 padding
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; // innerText: 사용자에게 보여지는 텍스트를 불러와 변경
}

/* 시계 불러오기 */
getClock() // clock 즉시 호출
setInterval(getClock, 1000); // setInterval(method): 1초 간격으로 function 수행
   