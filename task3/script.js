
const calculateArrowCoordinates = ({ hour, minute, second, width, height }) => {
	let minuteX1 = width/2;
	let minuteY1 = height/2;
	let minuteX2 = 120;
	let minuteY2 = 175;
	let hourX1 = width/2;
	let hourY1 = height/2;
	let hourX2 = 180;
	let hourY2 = 180;
	let secondX1 = width/2;
	let secondY1 = height/2;
	let secondX2 = 350;
	let secondY2 = 423;

	// hour, minute, second -- думай о них как о переменных с часами, минутами и секундами
	// необходимо заполнить переменные выше с координатами линий, соответствующих стрелке аналаговых часов
	// width и height содержат размеры областей часов
	// длинну стрелок предусмотреть самостоятельно
	return {
		minuteCoordinates: {
			x1: minuteX1, y1: minuteY1,
			x2: minuteX2, y2: minuteY2
		},
		hourCoordinates: {
			x1: hourX1, y1: hourY1,
			x2: hourX2, y2: hourY2
		},
		secondCoordinates: {
			x1: secondX1, y1: secondY1,
			x2: secondX2, y2: secondY2
		}
	}
}

const drawLine = (context, { x1, y1, x2, y2 }) => {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.closePath();
	context.stroke();
}


const handleTick = (canvas, context) => {
	const { height, width } = canvas.getBoundingClientRect()
	context.clearRect(0, 0, width, height);
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	const arrowCoordinates = calculateArrowCoordinates({hour, minute, second, width, height});
	drawLine(context, arrowCoordinates.hourCoordinates);
	drawLine(context, arrowCoordinates.minuteCoordinates);
	drawLine(context, arrowCoordinates.secondCoordinates);
}

document.onreadystatechange = (s) => {
	if (document.readyState === 'complete') {
		const canvas = document.querySelector('#clock');
		const context = canvas.getContext('2d')
		const frameCallback = () => {
			handleTick(canvas, context)
			window.requestAnimationFrame(frameCallback)
		}
		window.requestAnimationFrame(frameCallback)
	}
};
