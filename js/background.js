/* 이미지 파일 배열 생성 */
const images = ["hummingbird-0.jpg", "hummingbird-1.jpg", "hummingbird-2.jpg"];

/* 호출할 이미지 파일의 랜덤 숫자 생성 */
const chosenImage = images[Math.floor(Math.random() * images.length)];

/* createElement(element node): HTML 태그의 DOM 객체를 생성 */
const bgImage = document.createElement("img");

/* It's same thing <img src="img/hummingbird-?.jpg" /> on HTML */
bgImage.src = `img/${chosenImage}`;

/* appendChild(node object): DOM 객체를 DOM 트리에 삽입 */
document.body.appendChild(bgImage);