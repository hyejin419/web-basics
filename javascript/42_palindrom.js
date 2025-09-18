//회문(ex. 기러기, 역삼역, 토마토)을 재귀함수를 통해 체크하는 프로그램 만들기
/*
function isPalindrome(str) {
  // 문자열 길이가 0 또는 1이면 회문
  if (str.length <= 1) {
    //더 이상 비교할 문자가 없을 때, 회문O
    return true;
  }

  // 앞뒤 문자가 다르면 회문이 아님
  if (str[0] !== str[str.length - 1]) {
    // 첫 글자와 마지막 글자가 다르면 회문X
    return false;
  }

  // 앞뒤 문자를 제외한 나머지를 다시 검사(재귀 호출)
  return isPalindrome(str.slice(1, -1));
}

// 테스트
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("토마토")); // true
*/

function isPalindrome(str, left = 0, right = null) {
  if (right === null) {
    // 처음 실행될 때, right를 문자열의 끝 인덱스로 설정
    //처음실행했다면
    right = str.length - 1;
  }
  if (left >= right) return true; // 중앙까지 도달했다는 뜻 (회문)
  if (str[left] !== str[right]) return false; // 한쌍이라도 다르면 회문X

  return isPalindrome(str, left + 1, right - 1); // 앞뒤 문자를 제외한 나머지를 다시 검사(재귀 호출)
}
console.log(isPalindrome("토마토"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("0123210"));
