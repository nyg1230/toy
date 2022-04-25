export default StyleUtil	= {
	getStyleText	: (p)	=> {
		const styleEntries	= Object.entries(p);

		const cssText	= styleEntries.map(([selector, css]) => {
			return `${selector} {
				${Object.entries(css).map(([prop, value]) => `${prop}:${value};`)}
			}`;
		});

		return cssText;
	},
	getStyleTag	: (p)	=> {
		const cssText	= StyleUtil.getStyleText(p);

		const styleTag	 = document.createElement("style");
		styleTag.innerHTML	= cssText;

		return styleTag;
	}
}