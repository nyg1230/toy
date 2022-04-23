export default class JwtUtil {
    static get #tokenKey() {
        return "X-TOKEN";
    }

    get #token() {
        return localStorage.getItem(JwtUtil.#tokenKey);
    }

    set #token(token) {
        localStorage.setItem(JwtUtil.#tokenKey, token);
    }

    getToken() {
        return this.#token;
    }

    setToken(token) {
        this.#token = token;
    }

    validCheck() {
        let isValid = false;

        return isValid;
    }

    tokenExtend() {
        if (!this.validCheck()) {
            console.error("유효하지 않은 토큰입니다.");
            return;
        }

        // this.tokenRemove()
    }

    tokenRemove() {
        localStorage.removeItem(JwtUtil.#tokenKey);
    }
}