let trabajos = [
    { local: 'base-apparel-coming-soon-master/', difficulty: 'newbie', name: 'desktop-preview-1', alt: 'frontend Mentor base apparel coming soon master' },
    { local: 'faq-accordion-card-main/', difficulty: 'newbie', name: 'desktop-preview-2', alt: 'frontend Mentor faq accordion card main' },
    { local: 'intro-component-with-signup-form-master/', name: 'desktop-preview-3', difficulty: 'newbie', alt: 'frontend Mentor intro component with signup form master' },
    { local: 'single-price-grid-component-master/', name: 'desktop-preview-4', difficulty: 'newbie', alt: 'frontend Mentor single price grid component master' },
    { local: 'clipboard-landing-page-master/', name: 'desktop-preview-5', difficulty: 'junior', alt: 'frontend Mentor clipboard landing page master' },
    { local: 'social-proof-section-master/', name: 'desktop-preview-6', difficulty: 'newbie', alt: 'frontend Mentor social proof section master' },
    { local: 'fylo-data-storage-component-master/', name: 'desktop-preview-7', difficulty: 'junior', alt: 'frontend Mentor fylo data storage component master' },
    { local: 'huddle-landing-page-with-curved-sections-master/', name: 'desktop-preview-8', difficulty: 'junior', alt: 'frontend Mentor huddle landing page with curved sections master' },
    { local: 'insure-landing-page-master/', name: 'desktop-preview-9', difficulty: 'junior', alt: 'frontend Mentor insure landing page master' },
    { local: 'pricing-component-with-toggle-master/', name: 'desktop-preview-10', difficulty: 'junior', alt: 'frontend Mentor pricing component with toggle master' },
    { local: 'social-media-dashboard-with-theme-switcher-master/', name: 'desktop-preview-11', difficulty: 'junior', alt: 'frontend Mentor social media dashboard with theme switcher master' },
    { local: 'chat-app-css-illustration-master/', name: 'desktop-preview-12', difficulty: 'intermediate', alt: 'afrontend Mentor chat app css illustration master' }
];


function drawBox(el, box) {
    const $boxHabilidad = document.createElement('div');
    $boxHabilidad.classList.add('box-img');

    const $locationHref = document.createElement('a');
    $locationHref.href = `./proyectos/${el.local}index.html`;
    $locationHref.target = '_blank';

    const $img = document.createElement('img');
    $img.src = `assets/images/trabajos/${el.name}.jpg`;
    $img.alt = el.alt;

    $locationHref.appendChild($img);
    $boxHabilidad.appendChild($locationHref);
    box.appendChild($boxHabilidad);
}

function crearElementos(box, difficulty = '') {

    if(difficulty === 'advanced'){
        const $text = document.createElement('p');
        $text.classList.add('fail-work');
        $text.innerHTML = "No hay trabajos aun";
        box.appendChild($text);
    }

    trabajos.forEach((el, i) => {

        if (el.difficulty === difficulty) {
            drawBox(el, box);
        } else if (difficulty === 'all') {
            drawBox(el, box);
        }
    });

}


export function createGallery($box) {

    const $responsiveTrabajos = $box;

    trabajos.forEach((el, i) => {

        if (i <= 3) {
            drawBox(el, $responsiveTrabajos);
        }

    });
    crearElementos($responsiveTrabajos);

    return $responsiveTrabajos;

}

function classExist($button) {
    $button.forEach($btn => {

        if ($btn.classList.contains('is-active')) {
            $btn.classList.remove('is-active');
        }

    })
}


export function filter($button, $box) {

    $button.forEach($btn => {

        $btn.addEventListener('click', (e) => {

            classExist($button);
            $btn.classList.add('is-active');

            while ($box.firstElementChild) {
                $box.removeChild($box.firstChild);
            }

            const $responsiveTrabajos = $box;
            const className = e.target.classList[0];

            const $gif = document.createElement('img');
            $gif.src = "assets/images/loader.gif";
            $gif.classList.add('gif');

            $box.appendChild($gif);

            setTimeout(() => {

                while ($box.firstElementChild) {
                    $box.removeChild($box.firstChild);
                }

                switch (className) {

                    case 'newbie': crearElementos($responsiveTrabajos, 'newbie');
                        break;
                    case 'junior': crearElementos($responsiveTrabajos, 'junior');
                        break;
                    case 'intermediate': crearElementos($responsiveTrabajos, 'intermediate');
                        break;
                    case 'advanced': crearElementos($responsiveTrabajos, 'advanced');
                        break;
                    default: crearElementos($responsiveTrabajos, 'all');
                        break;
                }

                $box.removeChild($gif);

            }, 2000);



        });

    });

}