let ans = 0;
s = "0+1-1+0+1";
c=0
// st=""
for (let i = 0; i < s.length-1; i++) {
  if(s[i]==s[i+1]){
    // st+="-"
    c = c + (Number(s[i]) - Number(s[i+1]));
  }
  else{
    // st+='+'
    c  = c+ (Number(s[i])+ Number(s[i+1]));
  }
}
console.log(c);

// for (let i = 0; i < s.length - 1; i++) {
//   if (s[i] == s[i + 1]) {
//     st += "-";
//   } else {
//     st += "+";
//   }
// }