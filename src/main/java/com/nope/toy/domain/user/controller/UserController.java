package com.nope.toy.domain.user.controller;

import java.util.HashMap;
import java.util.Map;

import com.nope.toy.domain.base.controller.BaseController;
import com.nope.toy.util.exception.CustomException;
import com.nope.toy.util.jwt.JwtUtil;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController extends BaseController {
    
    @GetMapping("/test")
    public void test() {
        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("test", "aaaa");
            String token = JwtUtil.getToken(payload);
            System.out.println(token);
            System.out.println(JwtUtil.isTokenVarify(token));
        } catch (CustomException e) {
            System.out.println(e.getErrorInfo());
        } catch (Exception e) {
            System.out.println("error");
        }
    }

}
