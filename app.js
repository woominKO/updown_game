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
  let playerNum = prompt(
    'guess number! 컴퓨터가 고른 1-20까지중의 숫자중 하나를 맞추세요!'
  );
  playerNum = parseInt(playerNum);
  if (playerNum == randomNum) {
    alert('you are  right!');
    break;
  } else if (playerNum > randomNum) {
    alert('down');
  } else if (playerNum < randomNum) {
    alert('up');
  } else {
    alert('enter number');
  }
}
