import estructure from './estructure.js';
import clearFlags from './clearFlags.js';

export default function create($container, $select){


    $select.addEventListener('change', () => {

        const url = `https://restcountries.eu/rest/v2/region/${$select.value}`;

        console.log($select.value);
        clearFlags($container);

        fetch(url)
            .then(data => data.json())
            .then(res => {

                for(let i = 0; i < res.length; i++){
                    estructure($container, res[i]);
                }

            });

    });


}