(() =>{
	const form_id='1'; // Replace 1 with your form id
	const input_id='1'; // Replace 1 with your input id
	const descriptions=[
		"Description example for first checkbox",
		"Description example for second checkbox",
	];
	const __append = function (elem, html) {
		elem.insertAdjacentHTML('beforeend', html);
	}
	const __get = function (selectorName,from = document) {
		const fineElements = from.querySelectorAll(selectorName);
		if(fineElements.length > 1){
			return fineElements;
		}
		return fineElements[0];
	}
	const mainElement = __get(`#input_${form_id}_${input_id}`);
descriptions.map((text,index) =>{
		__append(__get('.gchoice',mainElement)[index],`<p>${text}</p>`);
	})
})()
