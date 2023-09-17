const portfolioContainers = document.querySelectorAll(".project");
const contactFormContainer = document.querySelector(".contact-form");
const buttonSubmit = document.querySelector(".send-message-button");

//Form:
const formName = document.getElementById("form-name");
const errorName = document.getElementById("error-name");
const formEmail = document.getElementById("form-email");
const errorEmail = document.getElementById("error-email");
const formMessage = document.getElementById("form-message");
const errorMessage = document.getElementById("error-message");
const errorIcon = document.querySelector(".error-icon");

// validation:
const verifyName= function(){
    if(formName.value === ""){
        errorName.textContent = "Name Require";
        errorName.classList.add("error");
        buttonSubmit.disabled = true;
        return false;
    } else {
        errorName.textContent = "";
        errorName.classList.remove("error");
        buttonSubmit.disabled = false;
    }
    return true;
}

//Email Validation:
const verifyEmail = function(){
    let email = formEmail.value
    if(!email.includes('@')) {
        errorIcon.classList.remove("hide-error-icon");
        errorEmail.textContent = "Enter Email here";
        errorEmail.classList.add("error");

        buttonSubmit.disabled = true;
        return false;
    } else {
        errorEmail.textContent = "";
        errorIcon.classList.add("hide-error-icon");
        errorEmail.classList.remove("error");
        buttonSubmit.disabled = false;
    }
    return true;
    }


//Message :
const verifyMessage = function(){
    if(formMessage.value === ""){
        errorMessage.textContent = "Message Require";
        errorMessage.classList.add("error");
        buttonSubmit.disabled = true;
        return false;
    } else {
        errorMessage.textContent = "";
        errorMessage.classList.remove("error");
        buttonSubmit.disabled = false;
    }
    return true;
}

//Event listeners for form:
formName.addEventListener("change", function(event){
    verifyName();
})
formEmail.addEventListener("change", function(event){
    verifyEmail();
})
formMessage.addEventListener("change", function(event){
    verifyMessage();
})
//Submit button:
buttonSubmit.addEventListener("click", function(event){
    event.preventDefault();
    verifyName();
    verifyEmail();
    verifyMessage();

    if(verifyName() && verifyEmail() && verifyMessage() === true) {
        
        formName.value = "";
        formEmail.value = "";
        formMessage.value = "";
        alert("Thank you, your message has been sent!");
    }
    
    const formDetails = {
        Name: formName.value,
        Email: formEmail.value,
        Message: formMessage.value
    }
   
    console.log(formDetails);
})

portfolioContainers.forEach(container => {
    const projectLinks = container.querySelector(".project-links");
    const imgContainer = container.querySelector(".img-container");

    container.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1440) {
            projectLinks.classList.remove('project-links-hide');
            imgContainer.style.opacity = "0.25";
        }
    });

    container.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1440) {
            projectLinks.classList.add('project-links-hide');
            imgContainer.style.opacity = "1";
        }
    });
});
