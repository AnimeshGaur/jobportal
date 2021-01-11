package com.hireme.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hireme.dao.JobSeekerDao;
import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobSeeker;
import com.hireme.repository.JobSeekerRepository;

@Component
public class JobSeekerDaoImpl implements JobSeekerDao {
	
	@Autowired
	private JobSeekerRepository jobSeekerRepository;

	@Override
	public JobSeeker create(JobSeeker jobSeeker) throws BusinessException {
		return jobSeekerRepository.save(jobSeeker);
	}

	@Override
	public JobSeeker update(JobSeeker jobSeeker) throws BusinessException {
		if(jobSeekerRepository.exists(jobSeeker.getJobSeekerId())) {
			return jobSeekerRepository.save(jobSeeker);
		}
		throw new BusinessException(404, "Job seeker with id " + jobSeeker.getJobSeekerId() + " not found.");
	}

	@Override
	public JobSeeker getByUserId(long userId) throws BusinessException {
		JobSeeker jobSeeker = jobSeekerRepository.getByUserId(userId);
		if(jobSeeker != null) {
			return jobSeeker;
		}
		throw new BusinessException(404, "Job seeker with user id " + userId + " not found.");
	}

	@Override
	public JobSeeker get(long jobSeekerId) throws BusinessException {
		JobSeeker jobSeeker = jobSeekerRepository.getOne(jobSeekerId);
		if(jobSeeker != null) {
			return jobSeeker;
		}
		throw new BusinessException(404, "Job seeker with id " + jobSeekerId + " not found.");	
	}
}
