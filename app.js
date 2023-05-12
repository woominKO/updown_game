function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // 최댓값과 최솟값을 모두 포함하도록 수정
}

let randomNum = getRandomInt(1, 20);

function guessNumber() {
  let playerNum = prompt(
    'guess number! 컴퓨터가 고른 1-20까지중의 숫자중 하나를 맞추세요!'
  );
  playerNum = parseInt(playerNum);

  if (playerNum == randomNum) {
    alert('You got the right answer!');
  } else if (playerNum > randomNum) {
    alert('down');
    guessNumber(); // 다시 함수를 호출하여 사용자 입력 받음
  } else if (playerNum < randomNum) {
    alert('up');
    guessNumber(); // 다시 함수를 호출하여 사용자 입력 받음
  } else {
    alert('enter number');
    guessNumber(); // 다시 함수를 호출하여 사용자 입력 받음
  }
}

window.onload = guessNumber;
