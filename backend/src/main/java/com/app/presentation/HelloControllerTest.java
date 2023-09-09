package com.app.presentation;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import com.app.application.HelloService;
import org.mockito.InjectMocks;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class HelloControllerTest {

    @InjectMocks
    private HelloController controller;
    
    @Mock
    private HelloService service;

    @Test
    void successfulCall () {
        given(service.greet()).willReturn("Bye");

        String response = controller.index();

        assertThat(response).isEqualTo("Bye");
    }


    
}
