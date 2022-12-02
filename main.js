let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let fullname = id("fullname"),
  createpassword = id("createpassword"),
  email = id("email"),
  form = id("form"),
  phone = id("phone");

let errorMsg = classes("error");




let checkBlank = (id, serial, message) => {
  if(id.value.trim() ==="") {
    errorMsg[serial].innerHTML = message;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("listen");
  checkBlank(fullname, 0, "Full name can not be blank!");
  checkBlank(email, 1, "Email can not be blank!");
  checkBlank(phone, 2, "Phone can not be blank!");
  checkBlank(createpassword, 3, "Create password can not be blank!");
});