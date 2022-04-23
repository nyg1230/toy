export default class Ajax {
	static #host;

    constructor() {
        if (!fetch) return;
    }

    static get host() {
        if (!Ajax.#host) Ajax.#host = "/";
        return Ajax.#host;
    }

    static set host(host) {
        Ajax.#host = host;
    }

    get #allowMethod() {
        return {
            GET     : "GET",
            POST    : "POST",
            PUT     : "PUT",
            DELETE  : "DELETE"
        };
    }

    get #defaultHeader() {
        const headers = {
            "Content-Type": "application/json",
            "X-TOKEN": ""
        };

        return headers;
    }

    async get(path, body, headers = {}) {
        return this.#request(path, body, headers, this.#allowMethod.GET);
    }

    async post(path, body, headers = {}) {
        return this.#request(path, body, headers, this.#allowMethod.POST);
    }

    async PUT(path, body, headers = {}) {
        return this.#request(path, body, headers, this.#allowMethod.PUT);
    }

    async delete(path, body, headers = {}) {
        return this.#request(path, body, headers, this.#allowMethod.DELETE);
    }

    async #request(path, body = {}, headers = {}, method) {
        let url         = `${Ajax.host}${path}`;
        const options   = {
            method: method,
            headers: {
                ...this.#defaultHeader,
                ...headers
            }
        }

        if (method.toUpperCase() === this.#allowMethod.GET) {
            const queryString = `?${Object.keys(body).map((k) => `${k}=${body[k]}`).join("&")}`;
            url += queryString;
        } else if (Object.keys(this.#allowMethod).includes(method.toUpperCase())) {
            options.body = JSON.stringify(body);
        }

        const res       = await fetch(url, options);
        const result    = res.ok ? await res.json() : Error(res.status);

        return result;
    }
}