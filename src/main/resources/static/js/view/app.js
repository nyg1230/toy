import Ajax from "../util/Ajax.js";
import JwtUtil from "../util/JwtUtil.js";
import Route from "./core/Route.js";

window.onload = () => {
    const ajax	= new Ajax();
    const body	= document.querySelector("body");
	ajax.get("api/test").then((res) => {console.log(res)});
	console.log(Route);
}