package com.hireme.service.model;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;

public class JobPostModel {

	private long jobPostId;

	private String title;

	private String description;

	private String location;

	private long salary;
	
	private String responsibilities;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Map<String, CompanyModel> company;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private String applicationStatus;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private String jobPostStatus;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Map<String, List<JobSeekerModel>>  applications;
	
	public long getJobPostId() {
		return jobPostId;
	}

	public void setJobPostId(long jobPostId) {
		this.jobPostId = jobPostId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public long getSalary() {
		return salary;
	}

	public void setSalary(long salary) {
		this.salary = salary;
	}

	public String getResponsibilities() {
		return responsibilities;
	}

	public void setResponsibilities(String responsibilities) {
		this.responsibilities = responsibilities;
	}

	public Map<String, CompanyModel> getCompany() {
		return company;
	}

	public void setCompany(Map<String, CompanyModel> company) {
		this.company = company;
	}

	public String getApplicationStatus() {
		return applicationStatus;
	}

	public void setApplicationStatus(String applicationStatus) {
		this.applicationStatus = applicationStatus;
	}

	public String getJobPostStatus() {
		return jobPostStatus;
	}

	public void setJobPostStatus(String jobPostStatus) {
		this.jobPostStatus = jobPostStatus;
	}
	
	public Map<String, List<JobSeekerModel>> getApplications() {
		return applications;
	}

	public void setApplications(Map<String, List<JobSeekerModel>> applications) {
		this.applications = applications;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (jobPostId ^ (jobPostId >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		JobPostModel other = (JobPostModel) obj;
		if (jobPostId != other.jobPostId)
			return false;
		return true;
	}
}
