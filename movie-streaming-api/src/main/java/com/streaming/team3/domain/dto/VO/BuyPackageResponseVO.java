package com.streaming.team3.domain.dto.VO;

import lombok.Data;

@Data
public class BuyPackageResponseVO {
	
	
	public BuyPackageResponseVO() {
		
	}

	private int packageCount;
	
	private int totalCost;
}
