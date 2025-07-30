package com.jilaba.test.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class RequestInterseptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object object) throws Exception {
        try {
            System.out.println(request.getMethod()+" -> "+request.getRequestURL());
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
}
