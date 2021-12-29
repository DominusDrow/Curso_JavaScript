
const d = document;

export default function searchFilter(searchVar,card){
        const $search = d.getElementById(searchVar),
        $card = d.querySelectorAll(card);

    d.addEventListener("keyup", e => {
        if(e.target === $search){
            let exp = new RegExp(`${$search.value}`,"ig");
            for(let i of $card){
                if(exp.test(i.querySelector("figcaption").textContent))
                    i.classList.remove("noneCard");                    
                else 
                    i.classList.add("noneCard");                    
            }
        }
    })

}

//otra manera de hacerlo 
export function searchFilter2(searchVar, selector){
    d.addEventListener("keyup", e => {
        if(e.target.matches(searchVar))
            d.querySelectorAll(selector).forEach(el => 
                el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.remove("noneCard")
                    : el.classList.add("noneCard")
            )
    })
}
