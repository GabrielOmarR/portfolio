function Touch($list) {

    $list.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });

}

export default function scroll($list) {

    window.addEventListener('scroll', () => {

        Touch($list)

        if (window.scrollY === 0 || window.scrollY < 695) {
            $list[0].classList.add('active');
        } else if (window.scrollY === 695 || window.scrollY < 1277) {
            $list[1].classList.add('active');
        } else if (window.scrollY === 1277 || window.scrollY < 1644) {
            $list[2].classList.add('active');
        } else if (window.scrollY === 1644 || window.scrollY < 2267) {
            $list[3].classList.add('active');
        } else if (window.scrollY >= 2267) {
            $list[4].classList.add('active');
        }



    });

}