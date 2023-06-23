package com.streaming.team3.domain.dto.form;

import lombok.Data;


@Data
public class MovieReviewForm {

    public MovieReviewForm() {
    }

    public int uid;

    public String review;

    public int mid;

}