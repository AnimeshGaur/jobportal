package com.hireme.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.JobPost;

@Repository("jobPostRepository")
public interface JobPostRepository extends JpaRepository<JobPost, Long> {
	
	Set<JobPost> findByTitleIgnoreCaseContaining(String queryString);

	Set<JobPost> findByDescriptionIgnoreCaseContaining(String queryString);
	
	Set<JobPost> findByLocationIgnoreCaseContaining(String queryString);
	
	Set<JobPost> findByResponsibilitiesIgnoreCaseContaining(String queryString);

	Set<JobPost> findByCompanyNameIgnoreCaseContaining(String queryString);
	
	Set<JobPost> findByCompanyDescriptionIgnoreCaseContaining(String queryString);
	
	Set<JobPost> findByCompanyLocationIgnoreCaseContaining(String queryString);
	
	Set<JobPost> findByCompanyWebsiteIgnoreCaseContaining(String queryString);
}
