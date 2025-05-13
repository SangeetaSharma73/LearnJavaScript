// 4. **Reverse a given string without using built-in reverse methods**
//     - **Sample Input:** `"hello world"`
//     - **Expected Output:** `"dlrow olleh"`

st = "hello world";
ans = "";
for (let i = st.length - 1; i >= 0; i--) {
  ans += st[i];
}
console.log(ans);
