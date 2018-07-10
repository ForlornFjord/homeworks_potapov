import './accordion.scss';

const ACCORDION_CLASS_NAME = 'accordion';
const ACCORDION_OPTIONS_CLASS_NAME = `${ACCORDION_CLASS_NAME}__options`;
const ACCORDION_OPTION_CLASS_NAME = `${ACCORDION_CLASS_NAME}__option`;
const ACCORDION_CONTROL_CLASS_NAME = `${ACCORDION_CLASS_NAME}__control`;
const ACCORDION_TEXT_CLASS_NAME = `${ACCORDION_CLASS_NAME}__text`;
const ACCORDION_EXPAND_CLASS_NAME = `${ACCORDION_CLASS_NAME}_expand`;

export class Accordion {
    constructor(target, options) {
        this.target = target;
        this.options = options;
        this.render();
        this.renderList();
    }

    render() {
        this.list = document.createElement('ul');

        this.list.classList.add(ACCORDION_OPTIONS_CLASS_NAME);
        this.target.classList.add(ACCORDION_CLASS_NAME);

        this.target.appendChild(this.list);
    }
    renderList() {
        this.options.forEach((option, index) => {
            console.log(option);

            const li = document.createElement('li');
            const button = document.createElement('button');
            const div = document.createElement('div');
            const p = document.createElement('p');

            li.classList.add(ACCORDION_OPTION_CLASS_NAME);
            button.classList.add(ACCORDION_CONTROL_CLASS_NAME);
            div.classList.add(ACCORDION_TEXT_CLASS_NAME);

            let trueIndex = index + 1;
            button.textContent = option.title + trueIndex;
            p.textContent = option.text;

            this.list.appendChild(li);
            li.appendChild(button);
            li.appendChild(div);
            div.appendChild(p);


            button.addEventListener('click', function() {
                this.classList.toggle(ACCORDION_EXPAND_CLASS_NAME);

                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        });
    }
}