//First name start with Cap and has minimum 3 characters
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
});

//Validate email e.g.abc.xyz@bl.co.in
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp('^[a-z]*.[a-z]+@[a-z]+.[a-z]{2,3}(.[a-z]{2})*$');
    if(emailRegex.test(email.value)) 
        emailError.textContent("");
    else emailError.textContent = "Email is Incorrect";
});

//User need to follow pre-defined mobile format 
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function(){
    let telRegex = RegExp('^[\\d]{2}\\s[\\d]{10}$');
    if(telRegex.test(tel.value)) 
        telError.textContent = "";
    else telError.textContent = "tel is Incorrect";
});

//User need to follow pre-defined password rules.Rule1 - minimum 8 characters
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function(){
    let pwdRegex = RegExp('^[A-Za-z0-9@._-]{8,}$');
    if(pwdRegex.test(pwd.value)) 
        pwdError.textContent("");
    else pwdError.textContent = "password is Incorrect";
});

const salary = document.querySelector("#salary");
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function() {
    output.textContent = salary.value;
});