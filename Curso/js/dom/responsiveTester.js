
const d = document,
    w = window;

export default function responsiveTester (form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if(e.target === $form){
            e.preventDefault();     //para evitar que la pagina recargue y nos envie a la direccion del formulario
            tester =  w.open($form.url.value,"tester",`width=${$form.w.value},height=${$form.h.value}`);
        }  
    })

    d.addEventListener("reset", e => {
        if(e.target === $form)
            tester.close();
    })
}
