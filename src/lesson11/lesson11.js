import './lesson11.scss';
import './components/select/select.js'

import { Bulb } from "./components/bulb/bulb";
import { Garland } from "./components/garland/garland";
import { Select } from './components/select/select';

const bulb = new Bulb(document.querySelector('#bulb1'));
const garland = new Garland(document.querySelector('#garland1'));
const countries = ['USA', 'UKRAINE', 'MONTENEGRO', 'MADAGASCAR'];
const countriesList = new Select(document.querySelector('#countriesList'), countries);