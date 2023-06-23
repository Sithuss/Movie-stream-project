package com.streaming.team3.domain.dto.form;

import lombok.Data;

@Data
public class BuyPackageForm {

	/**
	 * Default constructor
	 */
	public BuyPackageForm() {
	}

	/**
	 * 
	 */
	private int uid;

	/**
	 * 
	 */
	private int quantity;

	/**
	 * 
	 */
	private String paymentMethod;

	/**
	 * 
	 */
	private String transactionNumber;

}