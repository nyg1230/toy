import Ajax from "../util/Ajax.js";
import JwtUtil from "../util/JwtUtil.js";
import Route from "./core/Route.js";
import Signin from "./sign/Signin.js";

window.onload = () => {
    const ajax	= new Ajax();
    const body	= document.querySelector("body");
	const test	= false;

	const route	= new Route(body);
	if (!test) {
	}
}