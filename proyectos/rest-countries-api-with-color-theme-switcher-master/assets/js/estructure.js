import modal from "./modal.js";

export default function estructure($container, res){

    const $divInfo = document.createElement('div');
    $divInfo.classList.add('box-info');

    $divInfo.addEventListener('click', (e) => {
        let country = res.name;
        modal(country);
    })

    const $divFlag = document.createElement('div');
    $divFlag.classList.add('flag');

    const $img = document.createElement('img');
    $img.alt = `Bandera de ${res.name}`;
    $img.src = res.flag;

    $divFlag.appendChild($img);
    $divInfo.appendChild($divFlag);

    const $info = document.createElement('div');
    $info.classList.add('info');

    const $flag = document.createElement('h2');
    $flag.innerHTML = res.name;

    $info.appendChild($flag);

    const $infoDetail = document.createElement('div');
    $infoDetail.classList.add('info-detail');

    const $population = document.createElement('p'),
          $region = document.createElement('p'),
          $capital = document.createElement('p');

    $population.innerHTML = `<span>Population: </span>${res.population}`;
    $region.innerHTML = `<span>Region: </span>${res.region}`;
    $capital.innerHTML = `<span>Capital: </span>${res.capital}`;

    $infoDetail.appendChild($population);
    $infoDetail.appendChild($region);
    $infoDetail.appendChild($capital);
    $info.appendChild($infoDetail);

    $divInfo.appendChild($info);
    $container.appendChild($divInfo);
    
}