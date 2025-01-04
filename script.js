const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let WINDOW_WIDTH = canvas.width;
let WINDOW_HEIGHT = canvas.height;


let x = 0;
let y = 0;



function animate() {
	window.requestAnimationFrame(animate);
	x++;
	


	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);


	ctx.fillStyle = 'red';
	ctx.fillRect(x, y, 100, 100);

}


animate()
