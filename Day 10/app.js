function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
  let score = 0;
  
  function fillTheBox(a, id) {
    let cardContainer = document.createElement("div");
    let fs = document.createElement("div");
    let bs = document.createElement("div");
    bs.innerText = "" + a;
    cardContainer.classList.add("card");
    cardContainer.setAttribute("id", "" + id);
    fs.classList.add("front-card");
    bs.classList.add("back-card");
    cardContainer.appendChild(fs);
    cardContainer.appendChild(bs);
    return cardContainer;
  }
  
  cardBox = document.querySelector(".cards");
  
  shuffle(numbers);
  
  let cnt = 0;
  
  while (cnt < 20) {
    cardBox.appendChild(fillTheBox(numbers[cnt], cnt));
    cnt++;
  }
  
  const cards = document.querySelectorAll(".card");
  // console.log(cards);
  
  cards.forEach((c) => {
    c.addEventListener("click", displayCard);
  });
  
  function displayCard() {
    console.log(this);
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    cardOpen(this);
  }
  
  var openedCards = [];
  
  function cardOpen(thiss) {
    openedCards.push(thiss);
    let len = openedCards.length;
    if (len == 2) {
      if (openedCards[0].innerText === openedCards[1].innerText) {
        score++;
        matched();
      } else {
        unmatched();
      }
    }
  }
  
  var matchedCard = [];
  
  function matched() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("open");
    openedCards[1].classList.remove("open");
    matchedCard.push(...openedCards);
    openedCards = [];
    const points = document.querySelector(".score");
    points.style.color = "red";
    points.innerText = `Score: ${score}`;
    if (score == 10) {
      setTimeout(() => {
        alert("Congrats! You have completed the challenge");
        location.reload();
      }, 1000);
    }
  }
  
  function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(() => {
      openedCards[0].classList.remove("show", "open", "unmatched");
      openedCards[1].classList.remove("show", "open", "unmatched");
      enable();
      openedCards = [];
    }, 1100);
  }
  
  function disable() {
    Array.prototype.filter.call(cards, function (card) {
      card.classList.add("disabled");
    });
  }
  
  function enable() {
    Array.prototype.filter.call(cards, function (card) {
      card.classList.remove("disabled");
      matchedCard.forEach((c) => {
        c.classList.add("disabled");
      });
    });
  }