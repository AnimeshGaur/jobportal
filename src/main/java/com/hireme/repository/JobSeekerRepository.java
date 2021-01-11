/**
 * Repository class for JobSeeker entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	13-05-2017
 */

package com.hireme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.JobSeeker;

@Repository("jobSeekerRepository")
public interface JobSeekerRepository extends JpaRepository<JobSeeker, Long> {
	
	JobSeeker getByUserId(long userId);
	

}
