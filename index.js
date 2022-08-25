var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollection);

// input setup
var input = {
	mouseX:{
		start: 300, 
		end: window.innerWidth - 300, 
		current: 0,
	},
	mouseY:{
		start: 0, 
		end: window.innerHeight,
		current: 0,
	}
};

input.mouseX.range = input.mouseX.end-input.mouseX.start;
input.mouseY.range = input.mouseY.end-input.mouseY.start;

// output setup
var output = {
	x: {
		start: -100, 
		end: 100, 
		current: 0
	}, 
	y: {
		start: -100, 
		end: 100, 
		current: 0
	}
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

const handleMouseMove = (event)=>{
	// mouse x input
	input.mouseX.current = event.clientX;
	input.mouseX.fraction = (input.mouseX.current-input.mouseX.start)/input.mouseX.range;
	
	if (input.mouseX.fraction>1){
		input.mouseX.fraction = 1;
	}
	if (input.mouseX.fraction<0){
		input.mouseX.fraction = 0;
	}

	// mouse y input
	input.mouseY.current = event.clientY;
	input.mouseY.fraction = (input.mouseY.current-input.mouseY.start)/input.mouseY.range;

	// output x
	output.x.current = output.x.end - (input.mouseX.fraction*output.x.range);

	// output y
	output.y.current = output.y.start + (input.mouseY.fraction*output.y.range);

	// apply output to html
	pupilsArray.forEach((pupil, i)=>{
		// pupil.style.transform = 'translateX('+(-1)*output.x.current+'px)';
		// pupil.style.transform = 'translateY('+(-1)*output.y.current+'px)';
		pupil.style.transform = 'translate('+output.x.current+'px,'+output.y.current+'px)';
	});

	// console.log(output.x.current);
}

const handleResize = (event) =>{
	input.mouseX.end = window.innerWidth;
	input.mouseX.range = input.mouseX.end-input.mouseX.start;

	input.mouseY.end = window.innerHeight;
	input.mouseY.range = input.mouseY.end-input.mouseY.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);