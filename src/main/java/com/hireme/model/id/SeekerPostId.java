package com.hireme.model.id;

import java.io.Serializable;

public class SeekerPostId implements Serializable {

	private static final long serialVersionUID = 7515180916867330175L;
	
	private long jobSeekerId;
	
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
		SeekerPostId other = (SeekerPostId) obj;
		if (jobPostId != other.jobPostId)
			return false;
		if (jobSeekerId != other.jobSeekerId)
			return false;
		return true;
	}
}
