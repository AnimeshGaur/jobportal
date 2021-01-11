package com.hireme.service.model;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;

public class JobSeekerModel {
	
	private long jobSeekerId;

	private String firstName;
	
	private String lastName;

	@JsonInclude(JsonInclude.Include.NON_NULL)
	private byte[] picture;

	private String summary;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Map<String, List<EducationModel>> educationList;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Map<String, List<WorkExperienceModel>> workExperienceList;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Map<String, List<SkillModel>> skillList;

	public long getJobSeekerId() {
		return jobSeekerId;
	}

	public void setJobSeekerId(long jobSeekerId) {
		this.jobSeekerId = jobSeekerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public Map<String, List<EducationModel>> getEducationList() {
		return educationList;
	}

	public void setEducationList(Map<String, List<EducationModel>> educationList) {
		this.educationList = educationList;
	}

	public Map<String, List<WorkExperienceModel>> getWorkExperienceList() {
		return workExperienceList;
	}

	public void setWorkExperienceList(Map<String, List<WorkExperienceModel>> workExperienceList) {
		this.workExperienceList = workExperienceList;
	}

	public Map<String, List<SkillModel>> getSkillList() {
		return skillList;
	}

	public void setSkillList(Map<String, List<SkillModel>> skillList) {
		this.skillList = skillList;
	}
}
