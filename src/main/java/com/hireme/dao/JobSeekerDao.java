package com.hireme.dao;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobSeeker;

public interface JobSeekerDao {
	
	JobSeeker create(JobSeeker jobSeeker) throws BusinessException;
	
	JobSeeker update(JobSeeker jobSeeker) throws BusinessException;

	JobSeeker get(long jobSeekerId) throws BusinessException;
	
	JobSeeker getByUserId(long userId) throws BusinessException;
}