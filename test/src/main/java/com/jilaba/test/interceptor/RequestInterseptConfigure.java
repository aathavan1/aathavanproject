package com.jilaba.test.interceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class RequestInterseptConfigure implements WebMvcConfigurer {

//    private final RequestInterseptor requestBodyInterceptor;
//
//    public RequestInterseptConfigure(RequestInterseptor requestBodyInterceptor) {
//        this.requestBodyInterceptor = requestBodyInterceptor;
//    }
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new RequestInterseptor());
    }
}
