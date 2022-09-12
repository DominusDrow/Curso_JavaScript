
const d = document;

export default function expValitation(form){
    const $form = d.querySelector(form);

    const $name = $form.querySelector("input[name='name']");
    const $email = $form.querySelector("input[name='email']");
    const $affair = $form.querySelector("input[name='affair']");
    const $coments = $form.querySelector("input[name='coments']");

    //regular expresions to evalue
    let name = /^\w{3,20}$/i;
    let email = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
    let affair = /^\D{10,20}/i;
    let coments = /^\D{10,300}$/i;
    
    

    d.addEventListener("keyup", e => {
        if(e.target == $name){
            if(name.test($name.value))
                console.log("nombre valido");
        }
        if(e.target == $email){
            if(email.test($email.value))
                console.log("correo valido");
        }
        if(e.target == $affair){
            if(affair.test($affair.value))
                console.log("asunto valido");
        }
        if(e.target == $coments){
            if(coments.test($coments.value))
                console.log("comentario valido");
        }
    })

}
