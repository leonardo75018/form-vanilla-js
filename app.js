const form = document.querySelector("form");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertSucess = document.getElementById("alertSuccess")
const alertName =  document.getElementById("alertName")
const  alertEmail =  document.getElementById("alertEmail")


const justLetter = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const emailValidator = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const errors = []

const showSuccessMessage = () =>{
    alertSucess.classList.remove("d-none")
    alertSucess.textContent = "Message envoyé"
}
const showErrorMessage = (errors) =>{
    errors.forEach(item =>{
        item.type.classList.remove("d-none");
        item.type.textContent = item.msg;
    })
}

form.addEventListener("submit", e =>{
    e.preventDefault();
    alertSucess.classList.add("d-none");

   if(!justLetter.test(userName.value) || !userName.value.trim() ){
    userName.classList.add("is-invalid");

       errors.push({
            type: alertName,
            msg : "Nom pas valide"
       })
   }else{
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
   }

   if(!emailValidator.test(userEmail.value) || !userEmail.value.trim() ){
    userEmail.classList.add("is-invalid");
        errors.push({
            type: alertEmail,
            msg : "Email  pas valide"
        })
   }else{
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
   }

   if(errors.length !== 0){
    showErrorMessage(errors)
     return
   }
   showSuccessMessage()

})



