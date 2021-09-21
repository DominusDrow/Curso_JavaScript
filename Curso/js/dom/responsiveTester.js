
const d = document,
    w = window;

export default function responsiveTester (form,site,w,h){
    const $form = d.querySelector(form),
        $site = d.getElementById(site),
        $with = d.getElementById(w),
        $high = d.getElementById(h);

    let window;

    d.addEventListener("submit", e => {
        if(e.target.matches(form)){
           window =  w.open($site.textContent);
           
        }
    })

    

}