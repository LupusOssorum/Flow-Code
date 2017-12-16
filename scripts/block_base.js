




class BlockBase {
	constructor() {
		this.el = div	(
				{	"classList"	:	[	"block"	]},
				"Hi"
			)
		this.drag = new Drag(this.el);
	}
	
	render() {
		return this.el;
	}
}








