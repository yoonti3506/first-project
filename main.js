//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 -> down!
//랜덤번호가 > 유저번호 -> up!
//Reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다
//클릭할때 전 숫자가 알아서 사라지게

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let Resetbutton = document.getElementById("reset-button");
let chances = 5;
let gameover = false;
let chancearea = document.getElementById("chance-area");
let history=[]


playButton.addEventListener("click", play);
Resetbutton.addEventListener("click", reset);
userInput.addEventListener("focus", del);

//("focus",function(){userInput.value="";})
//익명의 펑션으로 간단하게도 가능

function del(){
        userInput.value = "";}

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100 사이의 숫자를 입력해주셈";
    return;
  }
  if(history.includes(userValue)){
      resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력하셈"
      return;
    }
 
  chances--;
  chancearea.textContent = `남은기회:${chances}번`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "up!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!!";
  } else if ((userValue = computerNum)) {
    resultArea.textContent = "정답입니다";
    gameover=true
  }

  history.push(userValue)
  console.log(history)
  if (chances < 1) {
    gameover = true;
  }
  if (gameover == true) {
    playButton.disabled = true;
  }
}

function reset() {
  //user input 창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();
  resultArea.textContent = "결과값이 여기 나옵니다.";
}

pickRandomNum();
