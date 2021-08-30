
const d = document;

export default function darkMode(btn,clase){
    const $btn = d.querySelector(btn),
        $elemDark = d.querySelectorAll("[data-dark]");  //hacer dinamica la asignacion

    let darktheme = localStorage.getItem("darkMode") || "🌙";
    if(darktheme === "☀️"){
        $btn.textContent = darktheme;
        $elemDark.forEach( el => el.classList.add(clase));
    }

    d.addEventListener("click", e =>{
        
        if(e.target.matches(btn)){
            $btn.textContent = ($btn.textContent === "🌙")
            ? "☀️"
            : "🌙";

            $elemDark.forEach( el => el.classList.toggle(clase));
            localStorage.setItem("darkMode",$btn.textContent);
        }
    }) 
}



