package com.nope.toy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {

    private final static String INDEX_PATH = "/";
    private final static String INDEX_PAGE = "index";
    private final static String ERROR_PATH = "/error";
    private final static String ERROR_PAGE = "index";

	private final static String API_TEST_PATH	= "/api-test";
    private final static String API_TEST_PAGE	= "apiTest";

    @GetMapping(INDEX_PATH)
    public String indexPage() {
        return INDEX_PAGE;
    }

    @GetMapping(ERROR_PATH)
    public String errorPage() {
        return ERROR_PAGE;
    }

    @GetMapping(API_TEST_PATH)
	public String apiTestPage() {
		return API_TEST_PAGE;
	}

}
