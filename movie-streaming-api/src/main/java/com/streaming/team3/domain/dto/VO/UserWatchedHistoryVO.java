package com.streaming.team3.domain.dto.VO;

import lombok.Data;

@Data
public class UserWatchedHistoryVO {

    /**
     * Default constructor
     */
    public UserWatchedHistoryVO() {
    }

    /**
     * 
     */
    private int uid;

    /**
     * 
     */
    private MovieVo movie[];

}