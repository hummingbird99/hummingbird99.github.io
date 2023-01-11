/* HTML text node 생성 */
const quotes = [
    {
        quote: "One must live the way one thinks or end up thinking the way one has lived.",
        korean: "생각하는 대로 살아야 한다. 그러지 않으면 머지 않아 사는 대로 생각하게 될 것이다.",
    },
    {
        quote: "La vie est pleine de petits bonheurs.",
        korean: "인생은 작은 행복으로 가득 차 있다.",
    },
    {
        quote: "Remember that happiness is a way of travel - not a destination.",
        korean: "행복은 여정이지, 목적지가 아니라는 점을 기억하라."
    },
    {
        quote: "The busy bee has no time for sorrow.",
        korean: "바쁜 벌은 슬퍼할 시간이 없다.",
    },
    {
        quote: "Wer die Zukunft fürchtet, verdirbt sich die Gegenwart.",
        korean: "미래를 두려워하는 자는 자신의 현재를 망친다."
    },
    {
        quote: "Chaque réussite commence avec la volonté d'essayer.",
        korean: "모든 성공은 시도에서 나온다.",
    },
    {
        quote: "Seize the day!",
        korean: "현재를 즐겨라!",
    },
    {
        quote: "Insanity: doing the same thing over and over again and expecting different results.",
        korean: "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기증세다.",
    },
    {
        quote: "Don't take your youth and time for granted.",
        korean: "젊음과 시간을 당연하게 여기지 마라.",
    },
    {
        quote: "All love that has not friendship for its base, is like a mansion built upon sand.",
        korean: "우정이 바탕이 되지 않는 모든 사랑은 모래 위에 지은 집과 같다."
    }
];

/* CSS pseudo element 변수 선언 */
const quote = document.querySelector("#quote span:first-child");
const korean = document.querySelector("#quote span:last-child");

/* floor, ceil, round = Properties of Math */
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

/* DOM 접근 메소드를 사용하여 text node 보내기 */
quote.innerText = todaysQuote.quote;
korean.innerText = todaysQuote.korean;