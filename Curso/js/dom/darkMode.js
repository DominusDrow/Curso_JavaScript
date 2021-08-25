
const d = document;

export default function darkMode(btn,clase){
    const $btn = d.querySelector(btn);

    d.addEventListener("click", e =>{
        
     

        if(e.target.matches(btn)){
            $btn.textContent = ($btn.textContent === "🌙")
            ? "☀️"
            : "🌙";

            d.body.classList.toggle(cl);
        }


    })
}