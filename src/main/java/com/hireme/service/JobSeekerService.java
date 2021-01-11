package com.hireme.service;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobSeeker;

public interface JobSeekerService {
	
	JobSeeker create(JobSeeker jobSeeker) throws BusinessException;
	
	JobSeeker update(JobSeeker jobSeeker) throws BusinessException;
	
	JobSeeker get(long jobSeekerId) throws BusinessException;
	
	JobSeeker getByUserId(long userId) throws BusinessException;
	
	void apply(long jobSeekerId, long jobPostId) throws BusinessException;

}
