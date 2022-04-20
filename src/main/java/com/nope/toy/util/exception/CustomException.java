package com.nope.toy.util.exception;

import java.util.HashMap;
import java.util.Map;

public class CustomException extends RuntimeException {

    private String errorCode;
    private String message;

    private final String KEY_CODE       = "code";
    private final String KEY_MESSAGE    = "message";

    public CustomException(String errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }

    public CustomException(CustomExceptionCode customExceptionCode) {
        this.errorCode = customExceptionCode.getErrorCode();
        this.message = customExceptionCode.getMessage();
    }
    
    public Map<String, String> getErrorInfo() {
        Map<String, String> errorInfo = new HashMap<>();

        errorInfo.put(KEY_CODE, this.errorCode);
        errorInfo.put(KEY_MESSAGE, this.message);

        return errorInfo;
    }
}
