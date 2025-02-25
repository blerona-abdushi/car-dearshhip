document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("emailForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        if(!name || !email || !subject || !message){
            Toastify({
                text: "All fileds are requried",
                duration: 3000,
                backgroundColor: "linear-gradient(to right, #ff5f6D, #FFC371)",

            }).showToast();
            return;
        }

        if(!validateEmail(email)){
            Toastify({
                text: "Please enter a valid email address",
                duration: 3000,
                backgroundColor: "linear-gradient(to right, #ff5f6D, #FFC371)",

            }).showToast();
            return;
        }

        sendEmail({name, email, subject, message});
    })
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function sendEmail(data){
        setTimeout(()=>{
            Toastify({
                text: "Email has been sent",
                duration: 3000,
                backgroundColor: "linear-gradient(to right, #ff5f6D, #FFC371)",

            }).showToast();
            form.reset()
        }, 1000)
    }
})