import estructure from './estructure.js';

export default function create($container){

    const country = ['Germany', 'United States of America', 'Brazil', 'Iceland', 'Afghanistan', 'Aland Islands', 'Albania', 'Algeria'];

    country.forEach(el => {
        const url = `https://restcountries.eu/rest/v2/name/${el}`;

        fetch(url)
            .then(data => data.json() )
            .then(res => {
                estructure($container, res[0]);
            });
    })

}