import '../styles/lighter.scss';

export function lighter(lighterElement) {
    const lights = lighterElement.querySelectorAll('.street-lighter__light');

    function switchOff() {
        for (let i = 0; i < lights.length; i++) {
            lights[i].classList.remove('street-lighter__light_active');
        }
    }
    function switchOn(element) {
        element.classList.add('street-lighter__light_active');
    }

    function clickHandler(element) {
        switchOff();
        switchOn(element);
    }

    for (let i = 0; i < lights.length; i++) {
        lights[i].addEventListener('click', function () {
            clickHandler(lights[i])
        })
    }
}
