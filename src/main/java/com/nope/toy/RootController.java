package com.nope.toy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {

    private final static String INDEX_PATH = "/";
    private final static String INDEX_PAGE = "index";
    private final static String ERROR_PATH = "/error";
    private final static String ERROR_PAGE = "index";

    @GetMapping(INDEX_PATH)
    public String index() {
        return INDEX_PAGE;
    }

    @GetMapping(ERROR_PATH)
    public String error() {
        return ERROR_PAGE;
    }

}
