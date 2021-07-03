
export default function hamburgerMenu(panelBtn,panel,menuLink){
    const d = document;

    d.addEventListener("click", e => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){     //todo lo que este dentro de panelBtn
            d.querySelector(panel).classList.toggle("panel-is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("panel-is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
           
        
    })
}