const hands = document.querySelectorAll(".hand");
const handPlayer = document.querySelector(".hand-player");
const handComputer = document.querySelector(".hand-computer");
const result = document.querySelector(".result-text");

hands.forEach((hand) => {
  hand.addEventListener("click", () => {
    handPlayer.textContent = hand.textContent;
    handComputer.textContent = computerChoice();

    if (handPlayer.textContent === handComputer.textContent) {
      result.textContent = "Draw 😅";
      result.style.color = "yellow";
    } else if (
      handPlayer.textContent === "✊" &&
      handComputer.textContent === "✌️"
    ) {
      result.textContent = "You Win 🎉";
      result.style.color = "green";
    } else if (
      handPlayer.textContent === "🖐️" &&
      handComputer.textContent === "✊"
    ) {
      result.textContent = "You Win 🎉";
      result.style.color = "green";
    } else if (
      handPlayer.textContent === "✌️" &&
      handComputer.textContent === "🖐️"
    ) {
      result.textContent = "You Win 🎉";
      result.style.color = "green";
    } else {
      result.textContent = "You Lose 😔";
      result.style.color = "red";
    }
  });
});

const computerChoice = () => {
  const choices = ["✊", "🖐️", "✌️"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};
