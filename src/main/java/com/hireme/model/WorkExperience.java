/**
 * Model class for WorkExperience entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	13-05-2017
 */

package com.hireme.model;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "work_experience")
public class WorkExperience {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "workex_id")
	private long workExperienceId;

	@Column(name = "title")
	private String jobTitle;

	@Column(name = "company_name")
	private String companyName;

	@Embedded
	private Period period;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "job_seeker_id")
	private JobSeeker jobSeeker;

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

	public Period getPeriod() {
		return period;
	}

	public void setPeriod(Period period) {
		this.period = period;
	}

	public JobSeeker getJobSeeker() {
		return jobSeeker;
	}

	public void setJobSeeker(JobSeeker jobSeeker) {
		this.jobSeeker = jobSeeker;
	}
}
