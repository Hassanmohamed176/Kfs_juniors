function checkPassword() {
  const correct = "Kfsjrs2028";
  const entered = sessionStorage.getItem("site_pass") || prompt("أدخل كلمة المرور للدخول:");
  if (entered !== correct) {
    alert("كلمة المرور غير صحيحة.");
    window.location.reload();
  } else {
    sessionStorage.setItem("site_pass", correct);
  }
}