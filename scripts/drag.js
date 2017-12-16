
class Drag {
	constructor(el, pos=[0,0]) {
		this.el	= el;
		this.active	= false;
		this.pos	= pos;
		
		this.moveTo(pos);
		
		this.el	.addEventListener("mousedown",	this.mouseDown	.bind(this));
		document.body	.addEventListener("mousemove",	this.mouseMove	.bind(this));
		document.body	.addEventListener("mouseup",	this.mouseUp	.bind(this));
	}
	
	
	moveTo(pos) {
		this.pos = pos;
		this.el.style.left	= this.pos[0]+"px";
		this.el.style.top	= this.pos[1]+"px";
	}
	moveBy(by) {
		this.moveTo([this.pos[0]+by[0], this.pos[1]+by[1]]);
	}
	
	mouseDown(e) {
		this.active = true;
		console.log(e.movementX);
		e.preventDefault();
		return false;
	}
	mouseMove(e) {
		if (this.active) {
			this.moveBy([e.movementX, e.movementY])	;
			
			e.preventDefault();
			return false;
		}
	}
	mouseUp(e) {
		if (this.active) {
			this.active	= false;
			console.log(e.movementX);
			e.preventDefault();
			return false;
		}
	}
}