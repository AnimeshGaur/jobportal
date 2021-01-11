package com.hireme.exceptions;

public class BusinessException extends Exception {
	
	private static final long serialVersionUID = 4559937534944878940L;
	
	private int errorCode;
	
	public BusinessException() {}
	
	public BusinessException(int errorCode, String message) {
		super(message);
		this.errorCode = errorCode;
	}

	public int getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
}
