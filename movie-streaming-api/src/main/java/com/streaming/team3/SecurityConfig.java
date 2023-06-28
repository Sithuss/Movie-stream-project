package com.streaming.team3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.streaming.team3.security.AppUserDetailsService;
import com.streaming.team3.security.JwtTokenSecurityFilter;

@Configuration
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
	
//	@Autowired
//	private JwtTokenSecurityFilter jwtTokenSecurityFilter;
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
	
	@Bean
	AuthenticationProvider authenticationProvider(AppUserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
		var bean = new DaoAuthenticationProvider(passwordEncoder);
		bean.setUserDetailsService(userDetailsService);
		bean.setHideUserNotFoundExceptions(false);
		return bean;
	}
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		
		http.authorizeHttpRequests(config -> {
			config.requestMatchers("/public/**").permitAll();
			config.requestMatchers("/admin/**").hasAnyAuthority("ADMIN", "USER", "UPLOADER");
			config.requestMatchers("/uploader/**").hasAnyAuthority("UPLOADER", "USER", "ADMIN");
			config.requestMatchers("/user/**").hasAnyAuthority("ADMIN", "USER", "UPLOADER");
			config.anyRequest().denyAll();

		});
		
		http.csrf(config -> config.disable());
		
		http.sessionManagement(config -> config.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		
//		http.addFilterBefore(jwtTokenSecurityFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
    }

}
