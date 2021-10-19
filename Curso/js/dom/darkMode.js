
const d = document,
    ls = localStorage;

export default function darkMode(btn,clase){
    const $btn = d.querySelector(btn),
        $elemDark = d.querySelectorAll("[data-dark]");  //hacer dinamica la asignacion

    let moon =  "🌙",
        sun = "☀️",
        theme = ls.getItem("Mode") || moon;

    if(theme === sun){
        $btn.textContent = theme;
        $elemDark.forEach( el => el.classList.add(clase));
    }

    d.addEventListener("click", e =>{
        
        if(e.target.matches(btn)){
            $btn.textContent = ($btn.textContent === moon)
            ? sun
            : moon;

            $elemDark.forEach( el => el.classList.toggle(clase));
            ls.setItem("Mode",$btn.textContent);
        }
    }) 
}



