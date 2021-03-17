export default function darkTheme($button){

    const $body = document.querySelector('body');

    $button.addEventListener('click', () => {

        $body.classList.toggle('dark');

    });

}