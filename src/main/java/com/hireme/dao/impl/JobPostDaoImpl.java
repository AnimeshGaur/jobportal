package com.hireme.dao.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hireme.dao.JobPostDao;
import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobPost;
import com.hireme.repository.JobPostRepository;

@Component
public class JobPostDaoImpl implements JobPostDao {

	@Autowired
	private JobPostRepository jobPostRepository;

	@Override
	public JobPost get(long jobPostId) throws BusinessException {
		JobPost jobPost = jobPostRepository.getOne(jobPostId);
		if (jobPost != null) {
			return jobPost;
		}
		throw new BusinessException(404, "No job post with id " + jobPostId + " found.");
	}

	@Override
	public List<JobPost> search(String queryString) throws BusinessException {
		String[] searchString = queryString.split(" ");
		List<JobPost> response = new ArrayList<>();

		for (String string : searchString) {
			Set<JobPost> jobPosts = new HashSet<>();

			Set<JobPost> byTitile = jobPostRepository.findByTitleIgnoreCaseContaining(string);
			Set<JobPost> byDescription = jobPostRepository.findByDescriptionIgnoreCaseContaining(string);
			Set<JobPost> byLocation = jobPostRepository.findByLocationIgnoreCaseContaining(string);
			Set<JobPost> byResponsibilities = jobPostRepository.findByResponsibilitiesIgnoreCaseContaining(string);
			Set<JobPost> byCompanyName = jobPostRepository.findByCompanyNameIgnoreCaseContaining(string);
			Set<JobPost> byCompanyDescription = jobPostRepository.findByCompanyDescriptionIgnoreCaseContaining(string);
			Set<JobPost> byCompanyLocation = jobPostRepository.findByCompanyLocationIgnoreCaseContaining(string);
			Set<JobPost> byCompanyWebsite = jobPostRepository.findByCompanyWebsiteIgnoreCaseContaining(string);

			jobPosts.addAll(byTitile);
			jobPosts.addAll(byDescription);
			jobPosts.addAll(byLocation);
			jobPosts.addAll(byResponsibilities);
			jobPosts.addAll(byCompanyName);
			jobPosts.addAll(byCompanyDescription);
			jobPosts.addAll(byCompanyLocation);
			jobPosts.addAll(byCompanyWebsite);

			if(jobPosts.size() > 0) {
				if(response.size() == 0) {
					response.addAll(jobPosts);
				} else {
					response.retainAll(jobPosts);
				}
			} else {
				response.clear();
				break;
			}
		}

		if(response.size() > 0) {
			return response;
		} else {
			throw new BusinessException(404, "No jobs found for given criteria.");
		}

	}

	@Override
	public JobPost udpate(JobPost jobPost) throws BusinessException {
		if (jobPostRepository.getOne(jobPost.getJobPostId()) != null) {
			return jobPostRepository.save(jobPost);
		}
		throw new BusinessException(404, "No job post with id " + jobPost.getJobPostId() + " found.");
	}


}