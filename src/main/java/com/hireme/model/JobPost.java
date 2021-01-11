package com.hireme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "job_post")
public class JobPost {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_post_id")
	private long jobPostId;

	@Column(name = "title")
	private String title;

	@Column(name = "description", length = 1500)
	private String description;

	@Column(name = "location")
	private String location;

	@Column(name = "salary")
	private long salary;
	
	@Column(name = "status")
	private String jobPostStatus;
	
	@Column(name = "responsibilities", length = 1500)
	private String responsibilities;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "company_id")
	private Company company;

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
	
	public String getJobPostStatus() {
		return jobPostStatus;
	}

	public void setJobPostStatus(String jobPostStatus) {
		this.jobPostStatus = jobPostStatus;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public String getResponsibilities() {
		return responsibilities;
	}

	public void setResponsibilities(String responsibilities) {
		this.responsibilities = responsibilities;
	}
}