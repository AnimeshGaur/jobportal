package com.hireme.controller;

import java.util.ArrayList;
import java.util.List;

import com.hireme.dao.JobPostDao;
import com.hireme.service.CompanyService;
import com.hireme.service.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.Company;
import com.hireme.model.Education;
import com.hireme.model.JobApplication;
import com.hireme.model.JobPost;
import com.hireme.model.JobSeeker;
import com.hireme.model.Period;
import com.hireme.model.Skill;
import com.hireme.model.User;
import com.hireme.model.WorkExperience;
import com.hireme.model.id.SeekerPostId;
import com.hireme.repository.JobApplicationRepository;
import com.hireme.service.JobSeekerService;
import com.hireme.service.JobService;
import com.hireme.service.UserService;
import com.hireme.service.util.ServiceUtil;

@CrossOrigin
@RestController
@RequestMapping("/{userId}/jobseeker")
@SuppressWarnings({ "unchecked", "rawtypes" })
public class JobSeekerController {

	@Autowired
	private JobSeekerService jobSeekerService;

	@Autowired
	private UserService userService;

	@Autowired
	private JobService jobService;

	@Autowired
	private JobApplicationRepository jobApplicationRepository;

	@Autowired
	private JobPostDao jobPostDao;

	@Autowired
	private CompanyService companyService;

	@PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> createOrUpdateJobSeeker(@PathVariable(name = "userId", required = true) long userId,
			@RequestBody JobSeeker jobSeeker) {
		try {
			User user = userService.getUser(userId);
			JobSeekerModel jobSeekerModel = null;
			try {
				JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
				if (jobSeeker.getPicture() != null) {
					newJobSeeker.setPicture(jobSeeker.getPicture());
				}
				newJobSeeker.setFirstName(jobSeeker.getFirstName());
				newJobSeeker.setLastName(jobSeeker.getLastName());
				newJobSeeker.setSummary(jobSeeker.getSummary());
				jobSeekerService.update(newJobSeeker);
				jobSeekerModel = ServiceUtil.getJobSeeekerModel(newJobSeeker, false);
			} catch (BusinessException be) {
				if (be.getErrorCode() == 404) {
					// Create new profile
					jobSeeker.setUser(user);
					JobSeeker newJobSeeker = jobSeekerService.create(jobSeeker);
					jobSeekerModel = ServiceUtil.getJobSeeekerModel(newJobSeeker, false);
				} else {
					throw be;
				}
			}
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobseeker", jobSeekerModel, null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> getJobSeekerProfile(@PathVariable(name = "userId", required = true) long userId) {
		try {
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			JobSeekerModel jobSeekerModel = ServiceUtil.getJobSeeekerModel(jobSeeker, true);
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobseeker", jobSeekerModel, null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/education", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> addEducation(@PathVariable(name = "userId", required = true) long userId,
			@RequestBody EducationModel educationModel) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<Education> educationList = newJobSeeker.getEducation();
			if (educationList == null) {
				educationList = new ArrayList<>();
				newJobSeeker.setEducation(educationList);
			}
			Education education = ServiceUtil.getEducation(educationModel);
			education.setJobSeeker(newJobSeeker);
			educationList.add(education);
			jobSeekerService.update(newJobSeeker);
			return ResponseEntity.ok(ServiceUtil.buildResponse("educationList",
					ServiceUtil.getEducaitonList(newJobSeeker.getEducation()), null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/education/{educationId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> updateEducation(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "educationId", required = true) long educationId,
			@RequestBody EducationModel educationModel) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<Education> educationList = newJobSeeker.getEducation();
			if (educationList == null || educationList.size() == 0) {
				throw new BusinessException(404, "Nothing to update");
			} else {
				for (Education education : educationList) {
					if (education.getEducationId() == educationId) {
						education.setDegree(educationModel.getDegree());
						education.setField(educationModel.getField());

						if (education.getPeriod() == null) {
							education.setPeriod(new Period());
						}
						education.getPeriod().setFromDate(educationModel.getFrom());
						education.getPeriod().setToDate(educationModel.getTo());

						education.setSchoolName(educationModel.getSchoolName());

						jobSeekerService.update(newJobSeeker);
						return ResponseEntity.ok(ServiceUtil.buildResponse("educationList",
								ServiceUtil.getEducaitonList(newJobSeeker.getEducation()), null));
					}
				}
				throw new BusinessException(404, "No educaiotn with id" + educationId + " found to update");
			}

		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@DeleteMapping(value = "/education/{educationId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> deleteEducation(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "educationId", required = true) long educationId) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<Education> educationList = newJobSeeker.getEducation();
			if (educationList == null) {
				throw new BusinessException(404, "No education to delete.");
			} else {
				for (int i = 0; i < educationList.size(); i++) {
					Education education = educationList.get(i);
					if (education.getEducationId() == educationId) {
						educationList.remove(i);
						jobSeekerService.update(newJobSeeker);
						return ResponseEntity.ok(ServiceUtil.buildResponse("educationList",
								ServiceUtil.getEducaitonList(newJobSeeker.getEducation()), null));
					}
				}
				throw new BusinessException(404, "Nothing to delete.");
			}
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/workex", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> addWorkExperience(@PathVariable(name = "userId", required = true) long userId,
			@RequestBody WorkExperienceModel workExperienceModel) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<WorkExperience> workExList = newJobSeeker.getWorkExperience();
			if (workExList == null) {
				workExList = new ArrayList<>();
				newJobSeeker.setWorkExperience(workExList);
			}
			WorkExperience workExperience = ServiceUtil.getWorkExperience(workExperienceModel);
			workExperience.setJobSeeker(newJobSeeker);
			workExList.add(workExperience);
			jobSeekerService.update(newJobSeeker);
			return ResponseEntity.ok(ServiceUtil.buildResponse("workExperienceList",
					ServiceUtil.getWorkExList(newJobSeeker.getWorkExperience()), null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/workex/{workExId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> updateWorkExperience(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "workExId", required = true) long workExId,
			@RequestBody WorkExperienceModel workExperienceModel) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<WorkExperience> workExList = newJobSeeker.getWorkExperience();
			if (workExList == null || workExList.size() == 0) {
				throw new BusinessException(404, "Nothing to update");
			} else {
				for (WorkExperience workExperience : workExList) {
					if (workExperience.getWorkExperienceId() == workExId) {
						workExperience.setCompanyName(workExperienceModel.getCompanyName());
						workExperience.setJobTitle(workExperienceModel.getJobTitle());
						workExperience.getPeriod().setFromDate(workExperienceModel.getFrom());
						workExperience.getPeriod().setToDate(workExperienceModel.getTo());
						workExperience.setJobSeeker(newJobSeeker);
						jobSeekerService.update(newJobSeeker);
						return ResponseEntity.ok(ServiceUtil.buildResponse("workExperienceList",
								ServiceUtil.getWorkExList(newJobSeeker.getWorkExperience()), null));
					}
				}
				throw new BusinessException(404, "No work-ex with id" + workExId + " found to update");
			}

		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@DeleteMapping(value = "/workex/{workExId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> deleteWorkExperience(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "workExId", required = true) long workExId) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<WorkExperience> workExList = newJobSeeker.getWorkExperience();
			if (workExList == null) {
				throw new BusinessException(404, "No work experience to delete.");
			} else {
				for (int i = 0; i < workExList.size(); i++) {
					WorkExperience workExperience = workExList.get(i);
					if (workExperience.getWorkExperienceId() == workExId) {
						workExList.remove(i);
						jobSeekerService.update(newJobSeeker);
						return ResponseEntity.ok(ServiceUtil.buildResponse("workExperienceList",
								ServiceUtil.getWorkExList(newJobSeeker.getWorkExperience()), null));
					}
				}
				throw new BusinessException(404, "Nothing to delete.");
			}
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/skill", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> addSkill(@PathVariable(name = "userId", required = true) long userId,
			@RequestBody SkillModel skillModel) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<Skill> skillList = newJobSeeker.getSkills();
			if (skillList == null) {
				skillList = new ArrayList<>();
				newJobSeeker.setSkills(skillList);
			}
			Skill skill = ServiceUtil.getSkill(skillModel);
			skill.setJobSeeker(newJobSeeker);
			skillList.add(skill);
			jobSeekerService.update(newJobSeeker);
			return ResponseEntity.ok(
					ServiceUtil.buildResponse("skillList", ServiceUtil.getSkillList(newJobSeeker.getSkills()), null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@DeleteMapping(value = "/skill/{skillId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> deleteSkill(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "skillId", required = true) long skillId) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<Skill> skillList = newJobSeeker.getSkills();
			if (skillList == null) {
				throw new BusinessException(404, "No skills to delete.");
			} else {
				for (int i = 0; i < skillList.size(); i++) {
					Skill skill = skillList.get(i);
					if (skill.getSkillId() == skillId) {
						skillList.remove(i);
						jobSeekerService.update(newJobSeeker);
						return ResponseEntity.ok(ServiceUtil.buildResponse("skillList",
								ServiceUtil.getSkillList(newJobSeeker.getSkills()), null));
					}
				}
				throw new BusinessException(404, "Nothing to delete.");
			}
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/skill/{skillId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> updateSkill(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "skillId", required = true) long skillId, @RequestBody SkillModel skillModel) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<Skill> skillList = newJobSeeker.getSkills();
			if (skillList == null) {
				throw new BusinessException(404, "No skills to update.");
			} else {
				for (Skill skill : skillList) {
					if (skill.getSkillId() == skillId) {
						skill.setSkill(skillModel.getSkill());
						skill.setNumberOfYears(skillModel.getNumberOfYears());
						jobSeekerService.update(newJobSeeker);
						return ResponseEntity.ok(ServiceUtil.buildResponse("skillList",
								ServiceUtil.getSkillList(newJobSeeker.getSkills()), null));
					}
				}
				throw new BusinessException(404, "No skill with id " + skillId + " found to update.");
			}
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/job/{jobPostId}/application/{status}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> updateJobStatus(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "jobPostId", required = true) long jobPostId,
												  @PathVariable(name = "status", required = true) String status) {
		try {
			userService.getUser(userId);
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			SeekerPostId seekerPostId = new SeekerPostId();
			seekerPostId.setJobSeekerId(jobSeeker.getJobSeekerId());
			seekerPostId.setJobPostId(jobPostId);
			JobApplication jobApplication = jobApplicationRepository.getOne(seekerPostId);
			jobApplication.setStatus(JobApplicationStatus.valueOf(status).name());
			jobApplicationRepository.save(jobApplication);
			JobPost jobPost = jobPostDao.get(jobPostId);

			//if ACCEPTED change the status to Filled
			if(JobApplicationStatus.OFFERACCEPTED.equals(JobApplicationStatus.valueOf(status))) {
				jobPost.setJobPostStatus(JobPostStatus.FILLED.name());
				companyService.updateJobPost(jobPost.getCompany().getCompanyId(), jobPost);
			}

			//Send mail to job seeker
			ServiceUtil.sendMail(jobSeeker.getUser().getEmail(), "Application status changed for application at " + jobPost.getCompany().getName(), "Application status changed to " + status);

			//Send mail to company
			ServiceUtil.sendMail(jobPost.getCompany().getUser().getEmail(), "Application status changed for " + jobPost.getTitle(), "JobSeeker " + jobSeeker.getFirstName() + " " + jobSeeker.getLastName() +" has changed the application status changed to " + status);

			return new ResponseEntity(HttpStatus.valueOf(200));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/job/{jobPostId}/application", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> applyJob(@PathVariable(name = "userId", required = true) long userId,
										   @PathVariable(name = "jobPostId", required = true) long jobPostId) {
		try {
			userService.getUser(userId);
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			jobService.apply(jobSeeker.getJobSeekerId(), jobPostId);
			List<JobPost> jobPosts = jobSeeker.getApplication();
			for (JobPost jobPost : jobPosts) {
				if(jobPost.getJobPostId() == jobPostId) {
					Company company = jobPost.getCompany();
					//Send mail to JobSeeker
					ServiceUtil.sendMail(jobSeeker.getUser().getEmail(), "New Job application", "You've successfully submitted an applciation for " + jobPost.getTitle()
							+ " @ "+ company.getName() +"\n Location : " + jobPost.getLocation() + "\n Job description : " + jobPost.getDescription() + "\n ");

					//Send mail to Company
					System.out.println("Sending mail to company " + company.getUser().getEmail());
					ServiceUtil.sendMail(company.getUser().getEmail(), "New Job application received", "You've received an applciation for " + jobPost.getTitle()
							+"\n Location : " + jobPost.getLocation() + "\n Job description : " + jobPost.getDescription() + "\n ");
					System.out.println("Sent mail to company " + "You've received an applciation for " + jobPost.getTitle()
							+"\n Location : " + jobPost.getLocation() + "\n Job description : " + jobPost.getDescription() + "\n ");
				}
			}
			return ResponseEntity
					.ok(ServiceUtil.buildResponse("jobPosts", ServiceUtil.getJobPostList(jobPosts, true), null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@DeleteMapping(value = "/job/{jobPostId}/application")
	public ResponseEntity<Object> withdrawJobApplication(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "jobPostId", required = true) long jobPostId) {
		try {
			userService.getUser(userId);
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			jobService.withdraw(jobSeeker.getJobSeekerId(), jobPostId);
			return ResponseEntity.ok("");
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@GetMapping(value = "/job/application", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> getJobApplication(@PathVariable(name = "userId", required = true) long userId) {
		try {
			userService.getUser(userId);
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			List<JobPost> jobPosts = jobSeeker.getApplication();
			List<JobPostModel> response = new ArrayList<>();
			for (JobPost jobPost : jobPosts) {
				JobPostModel jobPostModel = ServiceUtil.getJobPostModel(jobPost, true);
				SeekerPostId id = new SeekerPostId();
				id.setJobSeekerId(jobSeeker.getJobSeekerId());
				id.setJobPostId(jobPost.getJobPostId());
				JobApplication appication = jobApplicationRepository.getOne(id);
				jobPostModel.setApplicationStatus(appication.getStatus());
				response.add(jobPostModel);
			}
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobPosts", response, null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/job/{jobPostId}/interest")
	public ResponseEntity<Object> addIntrestJob(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "jobPostId", required = true) long jobPostId) {
		try {
			userService.getUser(userId);
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			jobService.addIntrest(jobSeeker.getJobSeekerId(), jobPostId);
			return ResponseEntity.ok("");
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@DeleteMapping(value = "/job/{jobPostId}/interest")
	public ResponseEntity<Object> removeJobIntrest(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "jobPostId", required = true) long jobPostId) {
		try {
			userService.getUser(userId);
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			jobService.removeIntrest(jobSeeker.getJobSeekerId(), jobPostId);
			return ResponseEntity.ok("");
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@GetMapping(value = "/job/interest", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> getJobIntrest(@PathVariable(name = "userId", required = true) long userId) {
		try {
			userService.getUser(userId);
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			List<JobPost> jobPosts = jobSeeker.getInterests();
			return ResponseEntity
					.ok(ServiceUtil.buildResponse("jobPosts", ServiceUtil.getJobPostList(jobPosts, true), null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@GetMapping(value = "/job/{queryString}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> searchJobPost(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "queryString", required = true) String queryString) {
		try {
			System.out.println(queryString);
			List<JobPost> jobPosts = jobService.searchJobs(queryString);
			return ResponseEntity
					.ok(ServiceUtil.buildResponse("jobPostList", ServiceUtil.getJobPostList(jobPosts, true), null));
		} catch (BusinessException be) {
			Response errorResponse = new Response("ERR" + be.getErrorCode(), be.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(be.getErrorCode()));
		}
	}

}