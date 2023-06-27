package com.streaming.team3.security;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtTokenSecurityFilter extends OncePerRequestFilter{
	
	@Value("com.streaming.team3.jwt.token")
	private String tokenName;
	
	@Autowired
	private JwtTokenProvider tokenProvider;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		var token = Optional.ofNullable(request.getHeader(tokenName));
		
//		System.out.println("=========================== " + tokenName);
		
		tokenProvider.authenticate(token).ifPresent(Authentication -> {
			
			SecurityContextHolder.getContext().setAuthentication(Authentication);
		});
		
		filterChain.doFilter(request, response);
	}

}
