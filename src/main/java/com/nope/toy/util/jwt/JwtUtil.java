package com.nope.toy.util.jwt;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {

    public static String getToken(Map<String, Object> payload) {
        JwtBuilder builder = Jwts.builder();

        if (payload != null) builder.setClaims(payload);
        String token = JwtUtil.createToken(builder);

        return token;
    }

    private static String createToken(JwtBuilder builder) {
        Map<String, Object> headers = JwtUtil.createHeader();
        Date expireDate = JwtUtil.getExpireDate();

        String token = builder.setHeader(headers)
                            .setSubject(JwtConfig.SUBJECT.getValue().toString())
                            .setExpiration(expireDate)
                            .signWith((SignatureAlgorithm) JwtConfig.ALGORITHM.getValue(), JwtConfig.KEY.getValue().toString().getBytes())
                            .compact();
        
        return token;
    }

    private static Map<String, Object> createHeader() {
        Map<String, Object> headers = new HashMap<>();

        JwtUtil.put(headers, JwtConfig.TYPE);
        JwtUtil.put(headers, JwtConfig.ALGORITHM_NAME);

        return headers;
    }

    private static Date getExpireDate() {
        Date now = new Date();
        long expireTime = (long) JwtConfig.EXPIRE_TIME.getValue();

        Date expireDate = new Date(now.getTime() + expireTime);

        return expireDate;
    }

    private static void put(Map<String, Object> map, JwtConfig config) {
        map.put(config.getKey(), config.getValue());
    }

    public static boolean isTokenVarify(String token) {
        boolean isVarify = true;
        try {
            Claims payload = JwtUtil.getPayload(token);
            System.out.println(payload);
        } catch (Exception e) {
            isVarify = false;
            e.printStackTrace();
        }
        return isVarify;
    }

    private static Claims getPayload(String token) throws Exception {
        String encoding = JwtConfig.ENCODING.getValue().toString();
        String key      = JwtConfig.KEY.getValue().toString();

        Claims payload = Jwts.parser()
                                .setSigningKey(key.getBytes(encoding))
                                .parseClaimsJws(token)
                                .getBody();

        return payload;
    }
}
