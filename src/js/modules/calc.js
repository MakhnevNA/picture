function calc(size, material, options, promocode, result, state) {
	
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);

	
	let sum = 0;

	const calcFunc = () => {
		sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));


		if (sizeBlock.value == '' || materialBlock.value == '') {
			resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
		} else if (promocodeBlock.value === 'IWANTPOPART') {
			sum = Math.round(sum * 0.7);
			resultBlock.textContent = sum
			state.price = sum;
			console.log(state);
		} else {
			resultBlock.textContent = sum;
			state.price = sum;
			console.log(state);
		}
		
	};

	sizeBlock.addEventListener('change', () => {
		
		state['size'] = sizeBlock.value;
		calcFunc();
		console.log(state);
	});
	materialBlock.addEventListener('change', () => {
		
		state['material'] = materialBlock.value;
		calcFunc();
	});
	optionsBlock.addEventListener('change', () => {
		
		state['options'] = optionsBlock.value;
		calcFunc();
	});
	promocodeBlock.addEventListener('input', ()=> {
		calcFunc();
		console.log(state);
		
		
	});
	
	
	

}


export default calc;