package com.hireme.dao;

import java.util.List;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobPost;

public interface JobPostDao {
	
	JobPost get(long jobPostId) throws BusinessException;
	
	List<JobPost> search(String query) throws BusinessException;

	JobPost udpate(JobPost jobPosr) throws BusinessException;

}
