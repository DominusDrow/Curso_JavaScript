
const d = document,
    w = window;

export function upPage (btn){

    const $btn = d.querySelector(btn);

    if(w.scrollY>300)
        $btn.classList.add("btn-on");
    else
    $btn.classList.remove("btn-on");

}