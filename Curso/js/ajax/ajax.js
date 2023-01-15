
(() => {
    const XMLHttp = new XMLHttpRequest(),
        URL = 'https://jsonplaceholder.typicode.com/users',
        $XHR = document.querySelector(".xhr"),
        $fragment = document.createDocumentFragment();

    XMLHttp.addEventListener('readystatechange', (e) => {
        if (XMLHttp.readyState !== 4) return;

        if (XMLHttp.status >= 200 && XMLHttp.status < 300) {
            let json = JSON.parse(XMLHttp.responseText);
            json.forEach((el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $XHR.appendChild($fragment);
        } else {
            let message = XMLHttp.statusText || 'Ocurrió un error';
            $XHR.innerHTML = `Error ${XMLHttp.status}: ${message}`;
        }
    });

    XMLHttp.open('GET', URL);

    XMLHttp.send();
    
})();

(() => {
    const $fetch = document.querySelector(".fetch"),
        $fragment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            json.forEach((el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);
        })
        .catch((err) => {
            let message = err.statusText || 'Ocurrió un error';
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            console.log('Esto se ejecutará independientemente del fetch');
        });
})();

(() => {
    const $fetchAsync = document.querySelector(".fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users'),
                json = await res.json();

            if (!res.ok) throw { status: res.status, statusText: res.statusText };

            json.forEach((el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } catch (err) {
            let message = err.statusText || 'Ocurrió un error';
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            console.log('Esto se ejecutará independientemente del fetch');
        }
    }

    getData();
})();

(() => {
    const $axios = document.querySelector(".axios"),
        $fragment = document.createDocumentFragment();

    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            let json = res.data;
            json.forEach((el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment);
        })
        .catch((err) => {
            let message = err.response.statusText || 'Ocurrió un error';
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            console.log('Esto se ejecutará independientemente del axios');
        });
})();
