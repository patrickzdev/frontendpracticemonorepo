package com.app.application;
import org.springframework.stereotype.Service;

@Service
public class HelloService {
	public String greet() {
		return "Hello, World";
	}
}
