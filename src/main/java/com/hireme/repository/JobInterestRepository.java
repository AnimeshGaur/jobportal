package com.hireme.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.JobInterest;
import com.hireme.model.id.SeekerPostId;

@Repository("jobInterestRepository")
public interface JobInterestRepository extends JpaRepository<JobInterest, SeekerPostId> {

	Set<JobInterest> findByJobPostId(long jobPostId);
}
