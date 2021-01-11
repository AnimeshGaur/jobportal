package com.hireme.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.JobApplication;
import com.hireme.model.id.SeekerPostId;

@Repository("jobApplicationRepository")
public interface JobApplicationRepository extends JpaRepository<JobApplication, SeekerPostId> {
	
	Set<JobApplication> findByJobPostId(long postId);

}