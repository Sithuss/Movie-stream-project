package com.streaming.team3.utils;

import jakarta.persistence.EntityNotFoundException;

public class ExceptionUtils {

	public static EntityNotFoundException keyNotFound(String type, String field, String key) {
		return new EntityNotFoundException("There is no %s with %s [%s].".formatted(type, field, key));
	}	
}
