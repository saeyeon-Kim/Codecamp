function submit() {
  const myemail = document.getElementById("email").value;
  // console.log(myemail);

  const split_email = myemail.split("@");
  // console.log(split_email);

  const id = split_email[0];
  const mail = split_email[1];

  const new_email = id.slice(0, id.length - 4);
  // console.log(new_email);
  const star = "****";
  const alert_email = new_email + star + "@" + mail;
  // console.log(alert_email);
  alert("회원가입을 축하합니다. 가입하신 이메일은" + alert_email + "입니다.");
}
