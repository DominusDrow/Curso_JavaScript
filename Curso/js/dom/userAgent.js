
const d = document,
    n = navigator,
    us = n.userAgent;

export default function detectDivices(div){
    const $div = d.getElementById(div),
        isMobile = {
            android: () => us.match(/android/i),
            ios: () => us.match(/iphone|ipad|ipod/i),
            window: () =>us.match(/windows phone/i),
            any: function () {
                return this.android() || this.ios() || this.window()
            }
        },
        isDesktop = {
            linux: () => us.match(/linux/i),
            mac: () => us.match(/mac os/i),
            windows: () => us.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome: () => us.match(/chrome/i),
            firefox: () => us.match(/firefox/i),
            safari: () => us.match(/safari/i),
            opera: () => us.match(/opera|opera min/i),
            ie: () => us.match(/msie|iemobile/i),
            edge: () => us.match(/edge/i),
            any: function (){
                return this.chrome() || this.firefox() || this.safari() || this.opera() || this.ie() || this.edge();
            }
        }

    $div.innerHTML = `
    <ul>
        <li>User Agent: <b>${us}</b></li>
        <li>Plataforma: <b>${
            isMobile.any() ? isMobile.any() : isDesktop.any()
        }</b></li>
       <li>Navegador: <b>${isBrowser.any()}</b></li> 
    </ul>   
    `;

    if(isBrowser.firefox())
        $div.innerHTML+=`<br><b>Estas en firefox</b>`;

    if(isDesktop.windows())
        $div.innerHTML+=`<br><b>Descarga nuestro sotfware par windows</b>`;
        
}
