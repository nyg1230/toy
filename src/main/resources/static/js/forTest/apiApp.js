import Ajax from "../util/Ajax.js";

const apiBaseUrl	= "api/";

const testList	= [
	{
		title	: "title",
		id		: "id",
		path	: "test",
		body	: {},
		header	: {}
	}
];

const template	= (p) => {
	return `<div>
				<span>${p.title}</span>
				<input type="button" value="test" id="${p.id}">
			</div>`;
}

const addListener	= (tmpl, p) => {
	const ajax	= new Ajax();
	
	const $target	= tmpl.querySelector(`#${p.id}`);
	$target.addEventListener("click", (e) => {
		const type	= p.type ? p.type : "get";
		const path	= `${apiBaseUrl}${p.path}`
		ajax[type.toLowerCase()](path, p.body, p.header).then((res) => {
			console.log(res);
		});
	});
}

function apiTestTemplate(list) {
	const freq		= document.createDocumentFragment();
	const range	= document.createRange();

	list.forEach((l) => {
		const tmpl	= range.createContextualFragment(template(l));
		addListener(tmpl, l);
		freq.append(tmpl);
	});

	return freq;
}

window.onload	= () => {
	const $target	= document.querySelector("#main");
	$target.appendChild(apiTestTemplate(testList));
}