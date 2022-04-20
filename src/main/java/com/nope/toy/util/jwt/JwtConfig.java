package com.nope.toy.util.jwt;

import io.jsonwebtoken.SignatureAlgorithm;

public enum JwtConfig {
    KEY("key", "jwtkey"),
    SUBJECT("subject", "user"),
    TYPE("type", "jwt"),
    ALGORITHM("algorithm", SignatureAlgorithm.HS256),
    ALGORITHM_NAME("algorithmName", "HS256"),
    EXPIRE_TIME("expireTime", 1000 * 60L * 30L),
    ENCODING("encoding", "UTF-8"),
    REQEUST_NAME("requestName", "X-TOKEN"),
    ;
    
    private final String key;
    private final Object value;

    JwtConfig(String key, Object value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return this.key;
    }

    public Object getValue() {
        return this.value;
    }
}
