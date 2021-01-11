/**
 * Repository class for WorkExperience entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	13-05-2017
 */

package com.hireme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.WorkExperience;

@Repository("workExperienceRepository")
public interface WorkExperienceRepository extends JpaRepository<WorkExperience, Long> {

}