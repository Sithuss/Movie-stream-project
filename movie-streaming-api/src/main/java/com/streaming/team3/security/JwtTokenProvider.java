package com.streaming.team3.security;

import java.awt.RenderingHints.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.crypto.SecretKey;
import javax.swing.JComboBox.KeySelectionManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenProvider {
	
	@Value("com.streaming.team3")
	private String issuer;
	@Value("15")
	private int lifeTime;
	@Value("rol")
	private String authorityKey;
	
	private SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
	
	public Optional<Authentication> authenticate(Optional<String> token) {
		
		return token.filter(a -> !a.isBlank()).map(a -> {
			try {
				var parser = Jwts.parserBuilder().requireIssuer(issuer).setSigningKey(key).build();
				
				var jws = parser.parseClaimsJws(a);
				
				var username = jws.getBody().getSubject();
				var authorities = AuthorityUtils.createAuthorityList(
						jws.getBody().get(authorityKey).toString().split(","));
				
				System.out.println("+++++++++++++++++++++++ " + key);
				return new UsernamePasswordAuthenticationToken(username, null, authorities);
			} catch (Exception e) {
				// Do noting
			}
			return null;
		});
	}
	
	public Optional<String> generateToken(Optional<Authentication> auth) {
		return auth.filter(a -> a.isAuthenticated() && !(a instanceof AnonymousAuthenticationToken)).map(authentication -> {
			var issueAt = new Date();
			
			var expiration = Calendar.getInstance();
			expiration.setTime(issueAt);
			expiration.add(Calendar.MINUTE, lifeTime);
			
			return Jwts.builder()
					.setIssuer(issuer)
					.setIssuedAt(issueAt)
					.setExpiration(expiration.getTime())
					.setSubject(authentication.getName())
					.claim(authorityKey, authentication.getAuthorities().stream()
							.map(GrantedAuthority::getAuthority).collect(Collectors.joining(",")))
					.signWith(key).compact();
		});
	}
}









