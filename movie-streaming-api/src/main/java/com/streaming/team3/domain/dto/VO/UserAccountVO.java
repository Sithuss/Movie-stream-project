package com.streaming.team3.domain.dto.VO;

import java.util.ArrayList;
import java.util.List;

import com.streaming.team3.domain.entity.Account;
import com.streaming.team3.domain.entity.Movie;
import com.streaming.team3.domain.entity.Role;
import com.streaming.team3.domain.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserAccountVO{

	private int id;

    private String name;

    private String email;
    
    private Role role;

    private List<Movie> moviesBookMarks = new ArrayList<Movie>();

    private int premiumPK;
    
    public static UserAccountVO form(User entity) {
    	return new UserAccountVO(entity.getId(), entity.getName(), entity.getEmail(), entity.getRole(), entity.getBookMarks(),
    			entity.getPremiumPk());
    }

}