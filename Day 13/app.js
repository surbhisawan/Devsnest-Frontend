const quotes = document.getElementById("quotes");
const newQ = document.getElementById("newQ");
let realData = "";
let quotesData = "";

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 10);
  quotesData = realData[rnum];
  quotes.innerText = `${quotesData.text}`;
};
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    // console.log(realData);
    getNewQuotes();
  } catch (error) {}
};

newQ.addEventListener("click", getNewQuotes);
getQuotes();