// let full name = document.getElementById("full name"),
//     email address = document.getElementById("email address"),
//     create password = document.getElementById("create password");


// let errorMsg = document.getElementsByClassName("error"),
//     successIcon = document.getElementsByClassName("success-icon"),
//     failureIcon = document.getElementsByClassName("failure-icon");

let id = (id) => document.getElementById(id);
let classes = (classes) =>document.getElementsByClassName(classes);

let fullname = id("full name"),
    createpassword = id("createpassword"),
    emailaddress = id("emailaddress"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit",(e) =>{
    e.preventDefault(); //callback() trong js
    engine(fullname,0,"Fullname cannot be blank!");
    engine(emailaddress,1,"Email address cannot be blank!");
    engine(createpassword,2,"Password cannot be blank!");

});

let engine = (id,serial,message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border ="2px solid red";
        failureIcon[serial].style.opacity="1";
        successIcon[serial].style.opacity="0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border ="2px solid green";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }


}