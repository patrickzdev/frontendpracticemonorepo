package com.app.presentation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.application.HelloService;

@RestController
public class HelloController {

	private final HelloService service;

	public HelloController(HelloService service) {
		this.service = service;
	}

	@GetMapping("/")
	public String index() {
		return service.greet();
	}

}