const getHours = () => {
	const clock = document.getElementsByClassName('clock')[0];
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const hour = hours < 10 ? `0${hours}` : hours;
	const minute = minutes < 10 ? `0${minutes}` : minutes;
	const second = seconds < 10 ? `0${seconds}` : seconds;
	clock.innerHTML = `${hour}:${minute}:${second}`;
}
  
setInterval(() => { getHours() }, 1000);

// Make the DIV element draggable:
dragElement(document.getElementById("whoWindow"));

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "Header")) { document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown; }
	else { elmnt.onmousedown = dragMouseDown; }

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}