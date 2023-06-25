package com.streaming.team3.domain.dto.VO;

import lombok.Data;

@Data
public class UserBookMarkVO {

    /**
     * Default constructor
     */
    public UserBookMarkVO() {
    }

    /**
     * 
     */
    private int uid;

    /**
     * 
     */
    private MovieVO movie[];

}