import Signin from "../sign/Signin.js";

export default class Route {
	#$target;
	#currentPath	= {
		pathName	: "",
		path		: []
	};
	#removeFirst;
	
	constructor($target) {
		this.init();
		this.#$target	= $target;

		window.addEventListener("popstate", this.render.bind(this));
		window.addEventListener("pushState", this.render.bind(this));
	}

	init() {
		const _wr = function(type) {
			const org	= history[type];
			console.log(org);
			return function() {
				const rv	= org.apply(this, arguments);
				const e		= new Event(type);
				e.arguments	= arguments;
				window.dispatchEvent(e);
				return rv;
			}
		};
		
		history.pushState		= _wr("pushState");
		history.replaceState	= _wr("replaceState");

		this.#removeFirst	= "/";
		const test = new Signin();
		this.#currentPath.path.push(test);
	}

	initPath() {}

	get #sep() {
		return "/";
	}

	render(e) {
		const reg	= new RegExp(`^${this.#removeFirst}`);
		const path	= location.pathname.replace(reg, "");
		console.log(path);

		this.#currentPath.pathName	= path;
		const pathList	= path.split(this.#sep);

		const tmpRoute	= routes;

		const test = this.#currentPath.path[0];
		console.log(test instanceof Signin);
		for(let idx = 0; idx < pathList.length; idx++) {
			const name	= pathList[idx];
			const r		= tmpRoute[name].view;
			const idxPath	= this.#currentPath.path[idx]

			if(!r) break;
			else if (!idxPath) {
				console.log("test");
			} else if (!(idxPath instanceof r)) {
				console.log(typeof r);
				console.log("!!!")
			}
		}
	}
}

/**
 * view는 해당 각 path에 해당하는 class
 * 각 키는 중첩 형식임
 * ex)
 * 	main: {
 * 		list: { view: List },
 * 		view: Main
 * 	}
 * 	--> /main/list ~ Main dom 하위에 List dom 이 존재하게 됨
 */
const routes	= {
	"signin"	: {
		view	: Signin
	}
}