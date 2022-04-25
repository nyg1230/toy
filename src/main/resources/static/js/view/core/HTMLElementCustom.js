import StyleUtil from "../../util/StyleUtil";

class HTMLElementCustom extends HTMLElement {
	#root;
	#eventList	= [];

	constructor(p) {
		super();
		this.param	= { ...p };
	}

	static get name() {
		return "custom-element";
	}

	get style() {
		return {};
	}

	get template() {
		return ``;
	}

	#init() {
		this.#root	= this.attachShadow({ mode: "open"});
	}

	#render() {
		const range	= document.createRange();
		const frag	= range.createContextualFragment(this.template);
		frag.insertBefore(StyleUtil.getStyleTag(this.style));
		this.#root.append(frag);
	}

	setEvent()
	addEvent(action, selector, callback) {
		const eventInfo	= {
			action		: action,
			selector	: selector,
			callback	: callback.bind(this)
		};

		this.#eventList.push(eventInfo);
	}

	removeEvent(action, selector, callback) {
		const elements	= this.#root.querySelectorAll(selector);

		elements.forEach((el) => {
			el.removeEventListener(action, callback);
		});
	}

	#mounted() {}

	connectedCallback() {
		this.#init();
		this.#render();
		this.#mounted();
	}

	disconnectedCallback() {
		this.destroy();
	}

	destroy() {
		this.#eventList.forEach((evt) => {
			const { action, selector, callback }	= { ...evt };
			this.removeEvent(action, selector, callback);
		});

		Object.keys(this.param).forEach((p) => {
			p	= null;
		});
	}
}

const define	= (elClass) => {
	customElements.define(elClass.name, elClass);
}

export{
	HTMLElementCustom,
	define
}