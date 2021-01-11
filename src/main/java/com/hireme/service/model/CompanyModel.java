package com.hireme.service.model;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;

public class CompanyModel {
	
private long companyId;
	
	private String name;
	
	private String logoURL;
	
	private String location;
	
	private String description;
	
	private String website;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Map<String, List<JobPostModel>> jobPosts;

	public long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(long companyId) {
		this.companyId = companyId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLogoURL() {
		return logoURL;
	}

	public void setLogoURL(String logoURL) {
		this.logoURL = logoURL;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Map<String, List<JobPostModel>> getJobPosts() {
		return jobPosts;
	}

	public void setJobPosts(Map<String, List<JobPostModel>> jobPosts) {
		this.jobPosts = jobPosts;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}
}
