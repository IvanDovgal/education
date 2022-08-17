
const calculateBMI = (weight, height) => {
	let bmi = 1;
	let description = 'Все хорошо';

	// твой код здесь, необходимо посчитать bmi(имт) и описание(description) для него(норма, дефицит, ожирение и тд)
	// думай о том что у тебя есть две переменные weight и height с весом и ростом соответственно

	return {
		bmi,
		description
	}
}


const handleChange = (event) => {
	event.preventDefault()
	const weight = parseInt(document.querySelector('#height').value);
	const height = parseInt(document.querySelector('#height'));
	const { bmi, description } = calculateBMI(weight, height)
	document.querySelector("#result-bmi").innerText = bmi;
	document.querySelector("#result-description").innerText = description;
	return false;
}

document.onreadystatechange = (s) => {
	if (document.readyState === 'complete') {
		console.log([...document.querySelectorAll('#height, #weight')])
		document.querySelector('#bmi-form').addEventListener('submit', handleChange)
	}
};
