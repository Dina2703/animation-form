function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Check for validation
            if(input.type === "text" && validateUser(input)) {
                nextlSlide(parent, nextForm);
            } else if(input.type === "email" && validateEmail(input)){
                nextlSlide(parent, nextForm);
            } else if(input.type === 'password' && validateUser(input)){
                nextlSlide(parent, nextForm);;
            } else{
                parent.style.animation = "shake 0.5s ease";
            }
            //rid of animation
            parent.addEventListener("animationend", () => {
                parent.style.animation = '';
            })
        });
    });
}

function validateUser(user) {
    if(user.value.length < 6) {
        console.log("not enough characters");
        error('rgb(87, 189, 130)');
    } else {
        error('rgb(189, 87, 87)');
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error('rgb(87, 189, 130)');
        return true;
    } else {
        error('rgb(189, 87, 87)');
        console.log("the email address is invalide");
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}

function nextlSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

animatedForm();