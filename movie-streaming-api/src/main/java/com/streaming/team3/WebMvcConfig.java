package com.streaming.team3;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@PropertySource(value = "classpath:/app-setting.properties")
public class WebMvcConfig implements WebMvcConfigurer {
	
	@Value("com.streaming.team3.jwt.token")
	private String tokenName;

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOriginPatterns("*")
		.allowedHeaders("*")
		.allowedMethods("*");
//		.exposedHeaders(tokenName);
	}

	
}
