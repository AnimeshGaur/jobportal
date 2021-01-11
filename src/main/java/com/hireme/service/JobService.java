package com.hireme.service;

import java.util.List;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobPost;

public interface JobService {

	JobPost get(long jobPostId) throws BusinessException;
	
	void apply(long jobSeekerId, long jobPostId) throws BusinessException;
	
	void addIntrest(long jobSeekerId, long jobPostId) throws BusinessException;

	void withdraw(long jobSeekerId, long jobPostId) throws BusinessException;
	
	void removeIntrest(long jobSeekerId, long jobPostId) throws BusinessException;

	List<JobPost> getApplications(long jobSeekerId) throws BusinessException;
	
	List<JobPost> getIntrests(long jobSeekerId) throws BusinessException;
	
	List<JobPost> searchJobs(String queryString) throws BusinessException;
	
}
