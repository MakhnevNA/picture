import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";

import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";

document.addEventListener('DOMContentLoaded', () => {
	
	'use strict'

	let calcForm = {};

	modals();
	sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	forms(calcForm);

	showMoreStyles('.button-styles', '#styles .row');
	calc('#size', '#material', '#options', '.promocode', '.calc-price', calcForm);
	filter();
	pictureSize('.sizes-block');
	accordion('.accordion-heading');

});