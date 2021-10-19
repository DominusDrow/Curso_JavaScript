
const w = window,
    d = document,
    n = navigator;

export default function connection(){

    //hacemos una funcion definidad
    const isOnlie = () => {
        const $div = d.createElement("div");    //creamos un elemento dinamico
        
        if(n.onLine){
            $div.textContent = "Coneción restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }
        else{
            $div.textContent = "Coneción perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => d.body.removeChild($div),700);
    }

    w.addEventListener("online", () => isOnlie());      //la funcion se de ENVORLVER EN UNA FUNCION
    w.addEventListener("offline", () => isOnlie());     //para que pueda llamarse mas de una vez
}
