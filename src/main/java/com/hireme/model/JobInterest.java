package com.hireme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import com.hireme.model.id.SeekerPostId;

@Entity
@Table(name="job_interest")
@IdClass(SeekerPostId.class)
public class JobInterest {
	
	@Id
	@Column(name = "job_seeker_id")
	private long jobSeekerId;
	
	@Id
	@Column(name = "job_post_id")
	private long jobPostId;

	public long getJobSeekerId() {
		return jobSeekerId;
	}

	public void setJobSeekerId(long jobSeekerId) {
		this.jobSeekerId = jobSeekerId;
	}

	public long getJobPostId() {
		return jobPostId;
	}

	public void setJobPostId(long jobPostId) {
		this.jobPostId = jobPostId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (jobPostId ^ (jobPostId >>> 32));
		result = prime * result + (int) (jobSeekerId ^ (jobSeekerId >>> 32));
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
		JobInterest other = (JobInterest) obj;
		if (jobPostId != other.jobPostId)
			return false;
		if (jobSeekerId != other.jobSeekerId)
			return false;
		return true;
	}
}
