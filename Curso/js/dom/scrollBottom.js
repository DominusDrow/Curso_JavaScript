
const d = document,
    w = window;

export function scrollTop(btn){

    const $btn = d.querySelector(btn);
    
    d.addEventListener("scroll", (e) => {
        let scroll = w.pageXOffset || d.documentElement.scrollTop;
        if(scroll>600)
            $btn.classList.remove("hidden");
        else
            $btn.classList.add("hidden");
    })

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            w.scrollTo({            //propiedad que indica  altura del documento
                behavior: "smooth",
                top:0,
                left:0
            });
        }
    })

}
