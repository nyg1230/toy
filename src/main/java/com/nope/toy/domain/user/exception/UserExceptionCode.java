package com.nope.toy.domain.user.exception;

import com.nope.toy.util.exception.CustomExceptionCode;

public enum UserExceptionCode implements CustomExceptionCode {
    TEST("q1111", "message"),;

    private final String errorCode;
    private final String message;

    UserExceptionCode(String errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }

    @Override
    public String getErrorCode() {
        return this.errorCode;
    }

    @Override
    public String getMessage() {
        return this.message;
    }
}
