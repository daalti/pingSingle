const submitBtn = document.querySelector(".notified");
const mail = document.querySelector(".form-text-mail");
const errorTextMail = document.querySelector(".error-text-mail");

var errorMail = 0;

// Click state
submitBtn.addEventListener("click", () => {

    if (!mail.value){
        if (errorMail == 0){
            mail.classList.toggle("error");
            errorTextMail.classList.toggle("opacity");
            //mail.setAttribute('placeholder', 'example@email/com');
            errorMail = 1;
        }
    }
    else if (errorMail == 1){
        mail.classList.toggle("error");
        errorTextMail.classList.toggle("opacity");
        mail.setAttribute('placeholder', 'Your email address...');
        errorMail = 0;
    } 
});