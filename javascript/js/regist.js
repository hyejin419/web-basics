window.onload = function () {
  //html의 코드를 다 읽었다면!
  const ssn1 = document.getElementById("ssn1");
  ssn1.addEventListener("keyup", () => {
    //keyup이 이뤄지면 익명함수 실행
    if (ssn1.value.length >= 6) {
      document.getElementById("ssn2").focus();
    }
  });

  const ssn = document.querySelectorAll(".ssn");
  ssn.forEach((s) => {
    //s:주민등록번호
    s.addEventListener("input", () => {
      document.getElementById("ssncheck").value = "n";
    });
  });
};

function checkssn() {
  const ssn1 = document.getElementById("ssn1");
  const ssn2 = document.getElementById("ssn2");
  const ssn = ssn1.value + ssn2.value;

  const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let result = 0;

  for (let i = 0; i < weights.length; i++) {
    result += parseInt(ssn[i] * weights[i]);
  }

  result = (11 - (result % 11)) % 10;

  if (result == parseInt(ssn[12])) {
    alert("유효한 주민등록번호입니다.");
    document.getElementById("ssncheck").value = "y"; //ssncheck를 y로 바꿔줘!
  } else {
    alert("유효하지 않은 주민등록번호입니다.");
  }
}

function sendit() {
  const userid = document.getElementById("userid"); //객체불러오기
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");
  const email = document.getElementById("email");
  const ssncheck = document.getElementById("ssncheck");

  const expIdText = /^[A-Za-z0-9]{4,20}$/; //범위만들기(userid가 이 범위에 맞는지 확인)
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/; //*: 하나 이상
  const expNameText = /^[가-힣]+$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z-0-9\-]+\.[A-Za-z]+$/;

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }

  if (!expIdText.test(userid.value)) {
    alert("아이디는 4자 이상 20자 이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }

  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자 이상 20자 이하의 영문자, 숫자, 특수문자를 한 자 이상 꼭 포함해야 합니다."
    );
    userpw.focus();
    return false;
  }

  if (userpw.value != userpw_re.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }

  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }

  if (!expHpText.test(hp.value)) {
    alert("휴대폰번호 형식이 일치하지 않습니다.\n-하이픈을 꼭 입력하세요");
    hp.focus();
    return false;
  }

  if (!expEmailText.test(email.value)) {
    alert("이메일 형식이 일치하지 않습니다");
    email.focus();
    return false;
  }

  if (ssncheck.value == "n") {
    alert("주민등록번호 검증확인 버튼을 눌러주세요");
    return false;
  }

  return true;
}
