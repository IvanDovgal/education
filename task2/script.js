
const calculateFibonacci = (number) => {
	// числа фибонначи это последовательность чисел в которой каждое следующее число равно сумме двух предыдущих
	// 1, 1, 2, 3, 5 ...
	// тебе необходимо по номеру числа в последовательности получить его значение используя циклы
	// думай о number как о предустоновленной переменной с номером числа из последовательности
	return 1;
}


const handleSubmit = (event) => {
	event.preventDefault()
	const number = parseInt(document.querySelector('#fibonacci-number').value);
	const fibonacciValue = calculateFibonacci(number)
	document.querySelector("#fibonacci-value").innerText = fibonacciValue;
	return false;
}

document.onreadystatechange = (s) => {
	if (document.readyState === 'complete') {
		document.querySelector('#bmi-form').addEventListener('submit', handleSubmit)
	}
};
