//1-20끼지 숫자 중에 추측게임
//사용자의 입력값에 따라up down right 출력

// console.log(playerNum);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

let randomNum = getRandomInt(1, 20);

while (true) {
  let playerNum = prompt('guess number!');
  playerNum = parseInt(playerNum);
  if (playerNum == randomNum) {
    alert('you are  right!');
    break;
  } else if (playerNum > randomNum) {
    alert('down');
  } else {
    alert('up');
  }
}
