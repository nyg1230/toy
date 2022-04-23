import Route from "../core/Route";

export default class test extends HTMLElement {
	static qqq() {
		Route.setRoute({
			path: "/test",
			cls	: test
		});
	}
}

customElements.define("test-test", test);