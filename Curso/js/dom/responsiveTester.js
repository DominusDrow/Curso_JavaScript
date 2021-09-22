
const d = document,
    w = window;

export default function responsiveTester (form,site,withV,high){
    const $form = d.querySelector(form),
        $site = d.getElementById(site),
        $with = d.getElementById(withV),
        $high = d.getElementById(high);

    let windowO;

    d.addEventListener("submit", e => {
        if(e.target.matches(form)){
           windowO =  w.open($site.value,"",`width=${$with.value},height=${$high.value}`);
        }
    })

    d.addEventListener("reset", e => {
        if(e.target.matches(form)){
            windowO.close();
        }
    })


}