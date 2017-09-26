var mousedown = false;
document.body.addEventListener('mousedown', function(e){
	mousedown = true;
}


document.body.addEventListener('mousemove', function(e) {
	console.log(e.clientx);
	console.log(e.clienty);
});

document.body.addEventListener('mouseup', function(e){
	mousedown = false;
}