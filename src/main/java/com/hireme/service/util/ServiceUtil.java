package com.hireme.service.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.hireme.model.*;
import com.hireme.service.model.*;

public class ServiceUtil {

	public static Map<String, Object> buildResponse(String key, Object value, Map<String, Object> response) {
		if (response != null) {
			response.put(key, value);
		} else {
			response = new HashMap<>();
			response.put(key, value);
		}
		return response;
	}

	public static Map<String, List<EducationModel>> buildEducationListResponse(String key, EducationModel value,
			Map<String, List<EducationModel>> response) {
		if (response == null) {
			response = new HashMap<>();
			response.put(key, new ArrayList<>());
		}
		response.get(key).add(value);
		return response;
	}

	public static Map<String, List<WorkExperienceModel>> buildWorkExListResponse(String key, WorkExperienceModel value,
			Map<String, List<WorkExperienceModel>> response) {
		if (response == null) {
			response = new HashMap<>();
			response.put(key, new ArrayList<>());
		}
		response.get(key).add(value);
		return response;
	}

	public static Map<String, List<JobPostModel>> buildJobPostResponse(String key, JobPostModel value,
			Map<String, List<JobPostModel>> response) {
		if (response == null) {
			response = new HashMap<>();
			response.put(key, new ArrayList<>());
		}
		response.get(key).add(value);
		return response;
	}

	public static Map<String, List<SkillModel>> buildSkillListResponse(String key, SkillModel value,
			Map<String, List<SkillModel>> response) {
		if (response == null) {
			response = new HashMap<>();
			response.put(key, new ArrayList<>());
		}
		response.get(key).add(value);
		return response;
	}

	public static JobSeekerModel getJobSeeekerModel(JobSeeker jobSeeker, boolean needAll) {
		JobSeekerModel jobSeekerResponse = new JobSeekerModel();
		jobSeekerResponse.setFirstName(jobSeeker.getFirstName());
		jobSeekerResponse.setLastName(jobSeeker.getLastName());
		jobSeekerResponse.setJobSeekerId(jobSeeker.getJobSeekerId());
		jobSeekerResponse.setPicture(jobSeeker.getPicture());
		jobSeekerResponse.setSummary(jobSeeker.getSummary());

		if (needAll) {
			List<Education> educationList = jobSeeker.getEducation();
			if (educationList != null) {
				Map<String, List<EducationModel>> educationModelList = getEducaitonList(educationList);
				jobSeekerResponse.setEducationList(educationModelList);
			}

			List<WorkExperience> workExList = jobSeeker.getWorkExperience();
			if (workExList != null) {
				Map<String, List<WorkExperienceModel>> workExModelList = getWorkExList(workExList);
				jobSeekerResponse.setWorkExperienceList(workExModelList);
			}

			List<Skill> skillList = jobSeeker.getSkills();
			if (skillList != null) {
				Map<String, List<SkillModel>> skillModelList = getSkillList(skillList);
				jobSeekerResponse.setSkillList(skillModelList);
			}
		}
		return jobSeekerResponse;
	}

	public static Map<String, List<EducationModel>> getEducaitonList(List<Education> educationList) {
		Map<String, List<EducationModel>> response = null;
		for (Education education : educationList) {
			response = buildEducationListResponse("education", getEducationModel(education), response);
		}
		return response;
	}

	public static Map<String, List<WorkExperienceModel>> getWorkExList(List<WorkExperience> workExList) {
		Map<String, List<WorkExperienceModel>> response = null;
		for (WorkExperience workExperience : workExList) {
			response = buildWorkExListResponse("workExperience", getWorkExperienceModel(workExperience), response);
		}
		return response;
	}

	public static Map<String, List<SkillModel>> getSkillList(List<Skill> skillList) {
		Map<String, List<SkillModel>> response = null;
		for (Skill skill : skillList) {
			response = buildSkillListResponse("skill", getSkillModel(skill), response);
		}
		return response;
	}

	public static Map<String, List<JobSeekerModel>> buildJobSeekerListResponse(String key, JobSeekerModel value,
			Map<String, List<JobSeekerModel>> response) {
		if (response == null) {
			response = new HashMap<>();
			response.put(key, new ArrayList<>());
		}
		response.get(key).add(value);
		return response;
	}

	public static Map<String, List<JobSeekerModel>> getJobSeekerList(List<JobSeeker> jobSeekers) {
		Map<String, List<JobSeekerModel>> response = null;
		for (JobSeeker jobSeeker : jobSeekers) {
			response = buildJobSeekerListResponse("jobSeeker", getJobSeeekerModel(jobSeeker, true), response);
		}
		return response;
	}

	public static EducationModel getEducationModel(Education education) {
		EducationModel educationModel = new EducationModel();
		educationModel.setDegree(education.getDegree());
		educationModel.setEducationId(education.getEducationId());
		educationModel.setField(education.getField());
		if (education.getPeriod() != null) {
			educationModel.setFrom(education.getPeriod().getFromDate());
			educationModel.setTo(education.getPeriod().getToDate());
		}
		educationModel.setSchoolName(education.getSchoolName());
		return educationModel;
	}

	public static Education getEducation(EducationModel educationModel) {
		Education education = new Education();
		education.setDegree(educationModel.getDegree());
		education.setField(educationModel.getField());
		education.setPeriod(new Period());
		education.getPeriod().setFromDate(educationModel.getFrom());
		education.getPeriod().setToDate(educationModel.getTo());
		education.setSchoolName(educationModel.getSchoolName());
		return education;
	}

	public static WorkExperienceModel getWorkExperienceModel(WorkExperience workExperience) {
		WorkExperienceModel workExperienceModel = new WorkExperienceModel();
		workExperienceModel.setCompanyName(workExperience.getCompanyName());
		if (workExperience.getPeriod() != null) {
			workExperienceModel.setFrom(workExperience.getPeriod().getFromDate());
			workExperienceModel.setTo(workExperience.getPeriod().getToDate());
		}
		workExperienceModel.setJobTitle(workExperience.getJobTitle());
		workExperienceModel.setWorkExperienceId(workExperience.getWorkExperienceId());
		return workExperienceModel;
	}

	public static WorkExperience getWorkExperience(WorkExperienceModel workExperienceModel) {
		WorkExperience workExperience = new WorkExperience();
		workExperience.setCompanyName(workExperienceModel.getCompanyName());
		workExperience.setPeriod(new Period());
		workExperience.getPeriod().setFromDate(workExperienceModel.getFrom());
		workExperience.getPeriod().setToDate(workExperienceModel.getTo());
		workExperience.setJobTitle(workExperienceModel.getJobTitle());
		return workExperience;
	}

	public static SkillModel getSkillModel(Skill skill) {
		SkillModel skillModel = new SkillModel();
		skillModel.setSkill(skill.getSkill());
		skillModel.setNumberOfYears(skill.getNumberOfYears());
		skillModel.setSkillId(skill.getSkillId());
		return skillModel;
	}

	public static Skill getSkill(SkillModel skillModel) {
		Skill skill = new Skill();
		skill.setNumberOfYears(skillModel.getNumberOfYears());
		skill.setSkill(skillModel.getSkill());
		return skill;
	}

	public static CompanyModel getCompanyModel(Company company, boolean needAll) {
		CompanyModel companyModel = new CompanyModel();
		companyModel.setCompanyId(company.getCompanyId());
		companyModel.setDescription(company.getDescription());
		companyModel.setLocation(company.getLocation());
		companyModel.setLogoURL(company.getLogoURL());
		companyModel.setName(company.getName());
		companyModel.setWebsite(company.getWebsite());

		if (needAll) {
			List<JobPost> jobPosts = company.getJobPosts();
			if (jobPosts != null) {
				Map<String, List<JobPostModel>> jobPostsList = getJobPostList(jobPosts, false);
				companyModel.setJobPosts(jobPostsList);
			}
		}
		return companyModel;
	}

	public static Map<String, List<JobPostModel>> getJobPostList(List<JobPost> jobPosts, boolean needCompany) {
		Map<String, List<JobPostModel>> response = null;
		for (JobPost jobPost : jobPosts) {
			response = buildJobPostResponse("jobPost", getJobPostModel(jobPost, needCompany), response);
		}
		return response;
	}

	public static JobPostModel getJobPostModel(JobPost jobPost, boolean needCompany) {
		JobPostModel jobPostModel = new JobPostModel();
		jobPostModel.setDescription(jobPost.getDescription());
		jobPostModel.setJobPostId(jobPost.getJobPostId());
		jobPostModel.setLocation(jobPost.getLocation());
		jobPostModel.setSalary(jobPost.getSalary());
		jobPostModel.setTitle(jobPost.getTitle());
		jobPostModel.setResponsibilities(jobPost.getResponsibilities());
		jobPostModel.setJobPostStatus(jobPost.getJobPostStatus());

		if (needCompany) {
			jobPostModel.setCompany(new HashMap<>());
			jobPostModel.getCompany().put("company", getCompanyModel(jobPost.getCompany(), false));
		}
		return jobPostModel;
	}


	public static JobPostModel getJobPostModelWithApplications(JobPost jobPost, List<JobSeeker> jobSeekers) {
		JobPostModel jobPostModel = getJobPostModel(jobPost, false);
		Map<String, List<JobSeekerModel>> applications = getJobSeekerList(jobSeekers);
		jobPostModel.setApplications(applications);
		return jobPostModel;
	}


	public static User getUser(UserModel userForm) {
		User user = new User();
		user.setEmail(userForm.getEmail());
		user.setPassword(userForm.getPassword());
		return user;
	}

	public static void sendMail(String email, String subject, String body) {
		String from = "ani8222@gmail.com";// change accordingly
		final String username = "ani8222@gmail.com";// change accordingly
		final String password = "Animesh@123@@";// change accordingly

		String host = "smtp.gmail.com";

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		});

		try {
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(from));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
			message.setSubject(subject);
			message.setText(body);
			Transport.send(message);
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
