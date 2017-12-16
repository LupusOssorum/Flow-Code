


class EditorPane extends PaneBase {
	
	constructor() {
		super();
		
		this.el = div	(
				{	"classList"	: ["editorPane"]
				},
				""
			)
		
		this.blocks = [new BlockBase()];
		
		this.el.appendChild(this.blocks[0].render())
	}
	
	
	
	render() {
		return this.el;
	}
	
}