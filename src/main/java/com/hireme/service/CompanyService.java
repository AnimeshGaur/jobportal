package com.hireme.service;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.Company;
import com.hireme.model.JobPost;
import com.hireme.model.JobSeeker;

public interface CompanyService {
	
	Company getByUserId(long userId) throws BusinessException;
	
	Company createOrUpdate(long userId, Company company) throws BusinessException;
	
	void remove(long companyId) throws BusinessException;
		
	void removeJobPost(long userId, long jobPostId) throws BusinessException;
	
	void cancelJobPost(long userId, long jobPostId) throws BusinessException;
	
	Company updateJobPost(long companyId, JobPost jobPost);

	List<JobPost> getJobPosts(long userId) throws BusinessException;
	
	List<JobPost> postJob(long userId, JobPost jobPost) throws BusinessException;

	List<JobPost> updateJobPost(long userId, long jobId, JobPost jobPost) throws BusinessException;

	Map<JobPost, Set<JobSeeker>> getJobApplications(long userId) throws BusinessException;

    void updateJobApplicationStatus(long userId, long jobPostId, long jobSeekerId, String status) throws BusinessException;
}