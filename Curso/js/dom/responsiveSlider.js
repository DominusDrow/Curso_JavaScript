const d = document;

export default function slider(selector,prev,next){
    const $slides = d.querySelectorAll(selector);
    let i = 0;

    d.addEventListener("click", e => {
        if(e.target.matches(prev)){
            e.preventDefault();
            $slides[i--].classList.remove("active");

            if(i < 0) i = $slides.length - 1;
            $slides[i].classList.add("active");
        }

        if(e.target.matches(next)){
            e.preventDefault();
            $slides[i++].classList.remove("active");

            if(i > ($slides.length - 1)) i = 0;
            $slides[i].classList.add("active");
        }
    })

}
