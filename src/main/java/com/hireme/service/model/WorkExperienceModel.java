package com.hireme.service.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class WorkExperienceModel {
	
	private long workExperienceId;

	private String jobTitle;

	private String companyName;
	
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private Date from;
	
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private Date to;

	public long getWorkExperienceId() {
		return workExperienceId;
	}

	public void setWorkExperienceId(long workExperienceId) {
		this.workExperienceId = workExperienceId;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Date getFrom() {
		return from;
	}

	public void setFrom(Date from) {
		this.from = from;
	}

	public Date getTo() {
		return to;
	}

	public void setTo(Date to) {
		this.to = to;
	}
}
