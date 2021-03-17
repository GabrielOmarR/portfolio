import estructure from './estructure.js';
import clearFlags from './clearFlags.js';
import modal from './modal.js';

export default function search($container, $input){

    $input.addEventListener('change', () => {

        const url = `https://restcountries.eu/rest/v2/name/${$input.value}`;

        fetch(url)
            .then(data => data.json() )
            .then(res => {
                clearFlags($container);
                estructure($container, res[0]);

                $input.value = "";
            });

    });

}