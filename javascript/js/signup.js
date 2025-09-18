function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const ssn = document.getElementById("rrn");
  const result = document.getElementById("result");

  const expIdText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expNameText = /^[가-힣]+$/;

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
    return false;
  }

  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }

  if (!/^\d{13}$/.test(rrn)) {
    result.textContent = "13자리 숫자를 정확히 입력하세요.";
    result.style.color = "red";
    return;
  }
  const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(rrn[i]) * weights[i];
  }

  let check = 11 - (sum % 11);
  if (check === 10) check = 0;
  else if (check === 11) check = 1;

  if (check === parseInt(rrn[12])) {
    result.textContent = "✅ 유효한 주민등록번호입니다.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ 유효하지 않은 주민등록번호입니다.";
    result.style.color = "red";
  }
  return true;
}
