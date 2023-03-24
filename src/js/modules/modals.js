import calcScroll from "./calcScroll";

const modals = () => {
	

	const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
		
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll();
		
		
		
			
		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}	

				windows.forEach(item => {
					item.style.display = 'none'
				});

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden'
				document.body.style.marginRight = `${scroll}px`
			});
		});

	
		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {

				windows.forEach(item => {
					item.style.display = 'none'
				});
				
				modal.style.display = 'none';
				document.body.style.overflow = ''
				document.body.style.marginRight = `0px`
			}
			
		});


		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none'
			});

			modal.style.display = 'none';
			document.body.style.overflow = ''
			document.body.style.marginRight = `0px`
		});


	}

	function showModalByTime(selector, time) {
			
		setTimeout(() => {

			let display;

			document.querySelectorAll('[data-modal]').forEach(item => {
			
				if (getComputedStyle(item).display !== 'none') {
					display = 'block'
				}
				
			});

			if (!display) {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${calcScroll()}px`
			}

			
			
		}, time);
	}

	


	bindModal('.button-order.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-order.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	showModalByTime('.popup-consultation', 3000);

	
	
	
	
	

}



export default modals;