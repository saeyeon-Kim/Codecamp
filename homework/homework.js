// 인증하기 버튼 눌렀을때 인증번호랑 3분 타이머 작동 함수
let set_time;

function requestauth() {
  clearInterval(set_time);
  const random_num = Math.floor(Math.random() * 1000000);
  console.log(random_num);

  const auth_num = String(random_num).padStart(6, "0");
  document.getElementById("auth").innerText = `${auth_num}`;

  let time = 179;
  const timer = document.getElementById("time");
  set_time = setInterval(function () {
    if (time >= 0) {
      const min = String(Math.floor(time / 60)).padStart(2, "0");
      const sec = String(time % 60).padStart(2, "0");
      timer.innerHTML = `
    <div>${min}:${sec}</div>
    `;
      time -= 1;
    } else {
      document.getElementById("auth_change").style.cssText = "background-color:#c7c7c7; color:#ffffff";
      document.getElementById("auth_change").disabled = true;
    }
    document.getElementById("auth_change").disabled = false;
    document.getElementById("auth_change").style.cssText = "background-color:#491449; color:#ffffff";
  }, 1000);
}

// 인증하기 누르면 인증완료로 변경 함수
function change_text() {
  document.getElementById("auth_change").innerText = "인증 완료";
  document.getElementById("auth_change").style.cssText = "background-color:#c7c7c7; color:#ffffff";
  clearInterval(set_time);
  document.getElementById("time").innerText = "";
  document.getElementById("auth_change").disabled = true;
}

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const date = String(today.getDate()).padStart(2, "0");

const day_result = `${year}-${month}-${date}`;

// 가입버튼
function access() {
  // 가입버튼 누르면 축하 알럿
  alert("회원가입을 축하합니다.\n(가입일시:" + day_result + ")");

  // 가입버튼 누르면 수강생 목록 생성
  const member_name = document.getElementById("name-input").value;

  document.getElementById("member").innerHTML = `
  <div id="memberlist" onclick="member_info()">
  <img src="./img/프로필 이미지 (export 하세요).png">
  <div id="member-name">${member_name}</div>
  </div>
  `;
  document.getElementById("memberlist").style.cssText =
    "width:350px;display:flex; align-items:center; gap:10px; justify-content:start; ";
  document.getElementById("member-name").style.cssText = "font-size:20px; color:#ffffff";
  document.getElementById("members").style.cssText = "height:auto";
  document.getElementById("access-btn").style.cssText = "display:none;";
}

// 수강생목록 클릭시 수강생정보 알럿
function member_info() {
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const pw = document.getElementById("pw-input").value;
  const num = document.getElementById("num-input").value;
  const intro = document.getElementById("intro-input").value;
  alert(
    `이름:${name}\n이메일:${email}\n비밀번호:${pw}\n전화번호:${num}\n동의여부:Y\n자기소개:${intro}\n(가입일시 : ${day_result})`
  );
}
