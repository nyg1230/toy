export default class Route {
	static #router	= {};
	#$target;
	

	constructor($target) {
		this.#$target	= $target;
	}

	static get #sep() {
		return "/";
	}

	static get #clsKey() {
		return "cls";
	}

	static get rr() {
		return Route.#router;
	}

	get rrr() {
		return Route.#router;
	}

	static setRoute(param) {
		const { path, cls }	= { ...param };
		
		let cur	= Route.#router;
		path.split(Route.#sep).forEach((p) => {
			if (!cur[p]) cur[p]	= {};
			else cur	= cur[p];
		});

		cur[Route.#clsKey]	= cls;
	}


}