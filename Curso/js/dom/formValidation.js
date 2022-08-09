
const d = document;

export default function expValitation(form){
    const $form = d.querySelector(form);

    const $name = $form.querySelector("input[name='name']");
    const $email = $form.querySelector("input[name='email']");
    const $affair = $form.querySelector("input[name='affair']");
    const $coments = $form.querySelector("input[name='coments']");

    //regular expresions to evalue
    let name = /^[a-z]{10}/;
    let email = /[a-z | 0-1]{30}@[a-z]{15}.[a-z]{10}/;
    
    

    d.addEventListener("keyup", e => {
        if(e.target == $name){
            //if(name.test($name.value))
                console.log(name.test($name.value));
        }
        if(e.target == $email){
            if(email.test($email.value))
                console.log("correo no valido");
        }
    })

}
