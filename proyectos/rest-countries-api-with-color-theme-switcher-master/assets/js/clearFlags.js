export default function clearFlags($container){

    while ($container.firstElementChild) {
        $container.removeChild($container.firstElementChild);
    }

}