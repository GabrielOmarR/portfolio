let trabajos = [
    { local: 'base-apparel-coming-soon-master', difficulty: 'newbie', name: 'desktop-preview-1', alt: 'frontend Mentor base apparel coming soon master' },
    { local: 'faq-accordion-card-main', difficulty: 'newbie', name: 'desktop-preview-2', alt: 'frontend Mentor faq accordion card main' },
    { local: 'intro-component-with-signup-form-master', name: 'desktop-preview-3', difficulty: 'newbie', alt: 'frontend Mentor intro component with signup form master' },
    { local: 'single-price-grid-component-master', name: 'desktop-preview-4', difficulty: 'newbie', alt: 'frontend Mentor single price grid component master' },
    { local: 'clipboard-landing-page-master', name: 'desktop-preview-5', difficulty: 'junior', alt: 'frontend Mentor clipboard landing page master' },
    { local: 'social-proof-section-master', name: 'desktop-preview-6', difficulty: 'newbie', alt: 'frontend Mentor social proof section master' },
    { local: 'fylo-data-storage-component-master', name: 'desktop-preview-7', difficulty: 'junior', alt: 'frontend Mentor fylo data storage component master' },
    { local: 'huddle-landing-page-with-curved-sections-master', name: 'desktop-preview-8', difficulty: 'junior', alt: 'frontend Mentor huddle landing page with curved sections master' },
    { local: 'insure-landing-page-master', name: 'desktop-preview-9', difficulty: 'junior', alt: 'frontend Mentor insure landing page master' },
    { local: 'pricing-component-with-toggle-master', name: 'desktop-preview-10', difficulty: 'junior', alt: 'frontend Mentor pricing component with toggle master' },
    { local: 'social-media-dashboard-with-theme-switcher-master', name: 'desktop-preview-11', difficulty: 'junior', alt: 'frontend Mentor social media dashboard with theme switcher master' },
    { local: 'chat-app-css-illustration-master', name: 'desktop-preview-12', difficulty: 'intermediate', alt: 'frontend Mentor chat app css illustration master' },
    { local: 'easybank-landing-page-master', name: 'desktop-preview-13', difficulty: 'intermediate', alt: 'frontend Mentor easybank landing page master' },
    { local: 'room-homepage-master', name: 'desktop-preview-14', difficulty: 'intermediate', alt: 'frontend Mentor room homepage master' },
    { local: 'url-shortening-api-master', name: 'desktop-preview-15', difficulty: 'intermediate', alt: 'frontend Mentor url shortening api master' },
    { local: 'loopstudios-landing-page-main', name: 'desktop-preview-16', difficulty: 'junior', alt: 'frontend Mentor loopstudios landing page main' },
    { local: 'todo-app-main', name: 'desktop-preview-17', difficulty: 'intermediate', alt: 'frontend Mentor todo app main' },
];


function drawBox(el, box) {
    const $boxHabilidad = document.createElement('div');
    $boxHabilidad.classList.add('box-img');

    const $boxButtons = document.createElement('div');
    $boxButtons.classList.add('box-buttons');

    const $viewDemo = document.createElement('a');
    $viewDemo.href = `https://gabrielomarr.github.io/project-portfolio/${el.difficulty}/${el.local}`;
    $viewDemo.target = '_blank';
    $viewDemo.innerHTML = "View demo";
    $viewDemo.setAttribute('rel', 'nofollow noopener noreferrer');

    const $viewCode = document.createElement('a');
    $viewCode.href = `https://github.com/GabrielOmarR/project-portfolio/tree/main/${el.difficulty}/${el.local}`;
    $viewCode.target = '_blank';
    $viewCode.innerHTML = "View code";
    $viewCode.setAttribute('rel', 'nofollow noopener noreferrer');

    $boxButtons.appendChild($viewDemo);
    $boxButtons.appendChild($viewCode);

    const $img = document.createElement('img');
    $img.src = `assets/images/trabajos/${el.name}.jpg`;
    $img.alt = el.alt;

    $boxHabilidad.appendChild($img);
    $boxHabilidad.appendChild($boxButtons);
    box.appendChild($boxHabilidad);
}

function crearElementos(box, difficulty = '') {

    if (difficulty === 'advanced') {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.gridColumn = '1 / -1';
        p.textContent = 'Aun no hay trabajos subidos';
        box.appendChild(p);
    } else {
        trabajos.forEach((el) => {

            if (el.difficulty === difficulty) {
                drawBox(el, box);
            } else if (difficulty === 'all') {
                drawBox(el, box);
            }
        });
    }

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

            $button.forEach($disabled => {
                $disabled.firstElementChild.disabled = 'disabled';
            })

            classExist($button);
            $btn.classList.add('is-active');

            while ($box.firstElementChild) {
                $box.removeChild($box.firstElementChild);
            }

            const $responsiveTrabajos = $box;
            const className = e.target.classList[0];

            const $gif = document.createElement('img');
            $gif.src = "assets/images/loader.gif";
            $gif.classList.add('gif');

            $box.appendChild($gif);

            setTimeout(() => {

                while ($box.firstElementChild) {
                    $box.removeChild($box.firstElementChild);
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

                $button.forEach($enabled => {
                    $enabled.firstElementChild.removeAttribute('disabled');
                })

            }, 2000);



        });

    });

}