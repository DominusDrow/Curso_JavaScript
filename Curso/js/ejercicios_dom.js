
const $btnMenu = document.getElementById("menu"),
    $menuList = document.querySelector(".menu-list"),
    $secs = document.querySelectorAll("section"),
    $fracmento = document.createDocumentFragment();

$secs.forEach(e =>{
    const $li = document.createElement("li");
    $li.textContent = e.firstElementChild.textContent;
    $fracmento.appendChild($li);
})

$menuList.querySelector("ul").appendChild($fracmento);

$btnMenu.addEventListener("click", e => {
    if($menuList.style.visibility === "visible")
        $menuList.style.visibility = "hidden";
    else 
        $menuList.style.visibility = "visible";
})