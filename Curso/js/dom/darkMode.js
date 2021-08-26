
const d = document;

export default function darkMode(btn,clase){
    const $btn = d.querySelector(btn),
        $elemDark = d.querySelectorAll("[data-dark]");  //hacer dinamica la asignacion

    let darktheme;

    d.addEventListener("click", e =>{
        
        if(e.target.matches(btn)){
            $btn.textContent = ($btn.textContent === "🌙")
            ? "☀️"
            : "🌙";

            $elemDark.forEach( el => el.classList.toggle(clase));
        }


    })

    
}