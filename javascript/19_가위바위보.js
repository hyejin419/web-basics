let hand = ["가위", "바위", "보"];
let handIndex = Math.floor(Math.random() * hand.length);
let handbox = hand[handIndex];
console.log("컴퓨터: ", handbox);

const user = "가위";
console.log(`사용자: ${user}`);

if (hand == "가위") {
  if (user == "바위") console.log("승");
  if (user == "보") console.log("패");
  if (user == "가위") console.log("무");
} else if (hand == "바위") {
  if (user == "보") console.log("승");
  if (user == "가위") console.log("패");
  if (user == "바위") console.log("무");
} else {
  if (user == "가위") console.log("승");
  if (user == "바위") console.log("패");
  if (user == "보") console.log("무");
}
