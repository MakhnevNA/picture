import calcScroll from "./calcScroll";

const modals = () => {
	
	let btnPressed;

	const bindModal = (triggerSelector, modalSelector, closeSelector, destroy = false) => {
		
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll(),
			present = document.querySelector('.fixed-gift'),
			pageUp = document.querySelector('.pageup');
		
		
		
			
		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}	

				if (destroy) {
					item.remove();
				}

				btnPressed = true;

				windows.forEach(item => {
					item.style.display = 'none';
					item.classList.add('animated', 'fadeIn');
				});

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden'
				document.body.style.marginRight = `${scroll}px`
				present.style.marginRight = `${scroll}px`
				pageUp.style.marginRight = `${scroll}px`
			});
		});

	
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {

				windows.forEach(item => {
					item.style.display = 'none'
				});
				
				modal.style.display = 'none';
				document.body.style.overflow = ''
				document.body.style.marginRight = `0px`
				present.style.marginRight = `0px`
				pageUp.style.marginRight = `0px`
			}
			
		});


		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none'
			});

			modal.style.display = 'none';
			document.body.style.overflow = ''
			document.body.style.marginRight = `0px`
			present.style.marginRight = `0px`
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
				let scroll = calcScroll();
				document.body.style.marginRight = `${scroll}px`
			}

			
			
		}, time);
	}


	function openByScroll(selector) {

		window.addEventListener('scroll', () => {
			
			if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >=
				document.documentElement.scrollHeight - 1)) {
				
				document.querySelector(selector).click();
			}
		});
		
	}

	

	


	bindModal('.button-order.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-order.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
	openByScroll('.fixed-gift');
	// showModalByTime('.popup-consultation', 3000);

	
	
	
	
	

}



export default modals;