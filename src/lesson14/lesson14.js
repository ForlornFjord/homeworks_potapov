import './lesson14.scss';
import './accordion/accordion';

import { Accordion } from "./accordion/accordion";

const dataForAccordion = [
    {
        title: 'Some Accordion # ',
        text: 'Воооу, на аккордеоне'
    },
    {
        title: 'Dope Accordion # ',
        text: 'В подземном переходе...'
    },
    {
        title: 'Thicc Accordion # ',
        text: 'Мы исполняем...'
    }
];

const theAccordion = new Accordion(document.querySelector('#accordion1'), dataForAccordion);