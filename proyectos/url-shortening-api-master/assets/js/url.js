function copied(){

    let $copyTrue = document.querySelectorAll('.copy');
    $copyTrue.forEach(el => {
        if(el.classList.contains('copied')){
            el.classList.remove('copied');
            el.classList.add('copy');
            el.textContent = 'Copy';
        }
    })
}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

export default function url(){

    const API = 'https://api.shrtco.de/v2/shorten?url=';
    const $btn = document.getElementById('btn');
    const $link = document.querySelector('.link');
    const $boxLinks = document.querySelector('.box-output-link');
    const $error = document.querySelector('.error');
    $btn.addEventListener('click', (e) => {

        if($link.value === ''){
            console.log('Ingresa Algo!!!');
            $error.style.visibility = 'visible';
            $link.style.border = '2px solid var(--red)';
        }else{
            $link.style.border = 'none';
            $error.style.visibility = 'hidden';
            const $loader = document.createElement('div');
            $loader.classList.add('loader');
            const $gif = document.createElement('img');
            $gif.src = 'images/loader.gif';
            $loader.appendChild($gif);
            $boxLinks.appendChild($loader);

            let URL = API + $link.value;

            fetch(URL)
            .then(data => data.json())
            .then(res => {

                let $links = document.createElement('div');
                $links.classList.add('links');

                let $original = document.createElement('p');
                $original.classList.add('original');
                $original.textContent = res.result.original_link;

                let $rel = document.createElement('p');
                $rel.classList.add('rel');
                $rel.textContent = res.result.short_link;

                let $copy = document.createElement('a');
                $copy.href = '#';
                $copy.classList.add('btn');
                $copy.classList.add('copy');
                $copy.textContent = 'Copy';

                $copy.addEventListener('click',(e) => {
                    e.preventDefault();
                    copied();
                    $copy.classList.add('copied');
                    $copy.textContent = 'Copied!';

                    copyToClipboard($rel.textContent);

                })

                $links.appendChild($original);
                $links.appendChild($rel);
                $links.appendChild($copy);

                $boxLinks.appendChild($links);
                $boxLinks.removeChild($loader);
            })
            .catch((e) => {
                alert('URL INVALIDA');
                $boxLinks.removeChild($loader);
            })

        }

        e.preventDefault();

    });


}