package com.streaming.team3.domain.dto.VO;

import com.streaming.team3.domain.entity.Movie;

import lombok.Data;

@Data
public class UploaderUploadHistory {

    public UploaderUploadHistory() {
    }

    private int uid;

    private Movie movie[];

//    public static UploaderUploadHistory form(Movie m){
//        var upMovie = new UploaderUploadHistory();
//    }
}