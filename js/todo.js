/* HTML 태그 변수 선언 */
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // 로컬스토리지에 저장될 변수명 선언

let toDos = []; // Array 생성


/* to-do JSON 문자열로 저장 */
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify(): javascript 값 또는 객체를 큰따옴표로 감싼 JSON 문자열로 변환
}


/* 클릭 이벤트시 to-do 삭제 */
function deleteToDo(event) {
    //console.log(event)
    //console.log(event.target) event target의 객체 value 출력
    //console.dir(event.target) event target의 객체 property 출력
    const li = event.target.parentElement; // event 실행 -> target(button)의 부모 요소 지정
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
}


/* to-do와 삭제 버튼 생성 */
function paintToDo(newTodo) {
    const li = document.createElement("li"); // input ul에 li 생성
    li.id = newTodo.id;
    const span = document.createElement("span"); // input ul에 span 생성
    span.innerText = newTodo.Text; // text node 삽입
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo); // button click시 function 실행
    li.appendChild(span); // appendChild: li(element node)에 span을 자식 노드로 추가
    li.appendChild(button); // li에 자식 노드로 button을 추가
    toDoList.appendChild(li); // toDoList에 li를 자식 노드로 추가
}


/* input form handler */
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input value를 새 변수에 담아두기
    toDoInput.value = ""; // input value 비우기
    const newTodoObj = {
        Text: newTodo,
        id: Date.now(),
    }; // array에 text가 아닌 object로 저장(중복값 구별을 위해 id 부여)
    toDos.push(newTodoObj); // toDos 변수에 newTodo value push
    paintToDo(newTodoObj); // function 실행
    saveToDos(); //function 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit); // submit시 function 실행


/* 로컬스토리지가 비어있지 않을 때 동작 수행 */
const savedToDos = localStorage.getItem(TODOS_KEY); // 로컬스토리지로 저장된 값 변수 선언
// console.log(savedToDos); JSON 문자열임을 확인
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse(): JSON 문자열을 array로 변환하여 javascript 객체로 반환
    // console.log(parsedToDos); js array임을 확인
    toDos = parsedToDos; // 비어있던 배열을 로컬스토리지 값으로 다시 채우기
    parsedToDos.forEach(paintToDo); // foreach(): 주어진 함수를 배열 요소 각각에 대해 실행, HTMLCollection.item(): 컬렉션 안의 특정 인덱스에 위치한 노드를 반환
}



function sexyFilter() {

}


