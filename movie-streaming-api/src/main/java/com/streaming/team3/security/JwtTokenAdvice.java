package com.streaming.team3.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

@RestControllerAdvice
public class JwtTokenAdvice implements ResponseBodyAdvice<Object>{
	
	@Value("com.streaming.team3.jwt.token")
	private String tokenName;
	
	@Autowired
	private JwtTokenProvider tokenProvider;

	@Override
	public boolean supports(MethodParameter returnType, Class<? extends HttpMessageConverter<?>> converterType) {
		return true;
	}

	@Override
	public Object beforeBodyWrite(Object body, MethodParameter returnType, MediaType selectedContentType,
			Class<? extends HttpMessageConverter<?>> selectedConverterType, ServerHttpRequest request,
			ServerHttpResponse response) {
		
		var auth = Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication());
		
		tokenProvider.generateToken(auth).ifPresent(token -> {
			
			if(response instanceof ServletServerHttpResponse resp) {
				
				resp.getHeaders().add(tokenName, token);
			}
		});
		
		return body;
	}

}
