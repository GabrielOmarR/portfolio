function noScroll(){

    window.scrollTo(0,0);

}


export default function modal(country){

    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    const $main = document.querySelector('.main');

    window.scrollTo(0, 0);

    const $show = document.createElement('div');
    $show.classList.add('show');
    $show.classList.add('active');

    fetch(url)
        .then(data => data.json() )
        .then(res => {

            const $back = document.createElement('div');
            $back.classList.add('back');

            const $i = document.createElement('i');
            $i.classList.add('fas');
            $i.classList.add('fa-long-arrow-alt-left');

            $back.appendChild($i);

            const $p = document.createElement('p');
            $p.textContent = 'Back';

            $back.appendChild($p);

            $back.addEventListener('click', () => {
                $main.removeChild($show);
                window.removeEventListener('scroll', noScroll);
            });

            $show.appendChild($back);

            const $flagShow = document.createElement('div');
            $flagShow.classList.add('flag-show');

            const $flagShowImg = document.createElement('div');
            $flagShowImg.classList.add('flag-show-img');

            const $img = document.createElement('img');
            $img.src = res[0].flag;
            $img.alt = res[0].name;

            $flagShowImg.appendChild($img);
            $flagShow.appendChild($flagShowImg);
            $show.appendChild($flagShow);


            const $flagShowInfo = document.createElement('div');
            $flagShowInfo.classList.add('flag-show-info');

            const $title = document.createElement('h2');
            $title.textContent = res[0].name;


            const $showInfo = document.createElement('div');
            $showInfo.classList.add('show-info');
            $showInfo.innerHTML = `<ul>
                            <li><span>Native Name:</span> ${res[0].nativeName}</li>
                            <li><span>Population:</span> ${res[0].population}</li>
                            <li><span>Region:</span> ${res[0].region}</li>
                            <li><span>Sub Region:</span> ${res[0].subregion}</li>
                            <li><span>Capital:</span> ${res[0].capital}</li>
                        </ul>

                        <ul>
                            <li><span>Top Level Domain:</span> ${res[0].topLevelDomain}</li>
                            <li><span>Currencies:</span> ${res[0].currencies[0].code}</li>
                            <li><span>Languages:</span> ${res[0].languages[0].name}</li>
                        </ul>

                        <ul class="ulWidth">
                            <li class="border">
                                <span>Border Countries:</span>
                                <p class="marked">${res[0].borders[0]}</p>
                                <p class="marked">${res[0].borders[1]}</p>
                                <p class="marked">${res[0].borders[2]}</p>
                            </li>
                        </ul>`;

            $flagShowInfo.appendChild($title);
            $flagShowInfo.appendChild($showInfo);
            $flagShow.appendChild($flagShowInfo);

            $main.appendChild($show);
            window.addEventListener('scroll', noScroll);

        })

    }
