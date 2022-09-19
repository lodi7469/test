"use strict";

const email = document.querySelector("#email"),
      id = document.querySelector("#id"),
      password = document.querySelector("#password"),
      passwordConfim = document.querySelector("#PasswordConfim"),
      registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", register);

function register(){
  if (!email.value) return alert("이메일을 입력해주세요");
  if (!id.value) return alert("아이디를 입력해주세요");
  if (!password.value) return alert("비밀번호를 입력해주세요");
  if (!passwordConfim.value) return alert("비밀번로 확인을 입력해주세요");
  if (password.value !== passwordConfim.value) return alert("비밀번호가 일치하지 않습니다");
  

  const req = {
    email : email.value,
    id : id.value,
    password : password.value,
  };


  fetch("/register", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.success) {
      location.href = "/login";
    }else {
      alert(res.msg);
    }
  }).catch((err) => {
    console.error("회원가입중 에러 발생");
  });
 };