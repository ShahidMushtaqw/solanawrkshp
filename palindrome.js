
function isPallindrome(s) {
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    if (s[start++] != s[end--]) return false;
  }
  return true;
}
const s = process.argv[2];
if (s) console.log(isPallindrome(s));
else console.log("Enter string");