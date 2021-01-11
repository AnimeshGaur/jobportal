$(document).ready(function () {
    var url = "http://localhost:8080/" + $("#userId").val() + "/company";

    var formJobPosted = '<form id="jobPostFormIdJobPostedID" name="jobPostedForm" class="form-horizontal">' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="titleJobPostedID" >Job Title : </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="titleJobPostedID" placeholder="Job Title">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="locJobPostedID">Location : </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="locJobPostedID" placeholder="Location">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="descJobPostedID">Description : </label>' +
        '<div class="col-xs-10">' +
        '<textarea class="form-control" id="descJobPostedID" placeholder="Description..."></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="respJobPostedID">Responsibilities : </label>' +
        '<div class="col-xs-10">' +
        '<textarea class="form-control" id="respJobPostedID" placeholder="Responsibilities..."></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="salJobPostedID">Salary : </label>' +
        '<div class="col-xs-10">' +
        '<input type="text" class="form-control" id="salJobPostedID" placeholder="Salary">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="statJobPostedID">Job Status :</label>' +
        '<div class="col-xs-10">' +
        '<select id="statJobPostedID" class="form-control">' +
        '<option value="OPEN">Open</option>' +
        '<option value="FILLED">Filled</option>' +
        '<option value="CANCELLED">Cancelled</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-2" for="jobPostUpdateJobPostedID"></label>' +
        '<div class="col-xs-10">' +
        '<button id="jobPostUpdateJobPostedID" class="btn btn-info" name="jobPostUpdate" data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing">Update</button>' +
        '</div>' +
        '</div>' +
        '</form>';

    var showSearchJobsModal = '<div class="modal searchJobModal" id="showSearchJobModalJobPostID" role="dialog">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        ' <button type="button" id="closeShowSearchJobJobPostID" class="close"' +
        ' data-dismiss="modal">&times;</button>' +
        '<h4 class="modal-title text-center form-title">Job Description</h4>' +
        '</div>' +
        '<div class="modal-body padtrbl">' +
        '<form id="showSearchJobFormId" name="showSearchJobFormJobPostID" class="form-horizontal">' +
        ' <div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobCompanyNameJobPostID">Company</label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showSearchJobCompanyNameJobPostID" ' +
        ' placeholder="Company name" readonly="readonly">' +
        '</div>' +
        '</div>' +

        ' <div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobTitleJobPostID">Job Title</label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showSearchJobTitleJobPostID" ' +
        ' placeholder="Job Title" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobDescriptionJobPostID">Description: </label>' +
        '<div class="col-xs-9">' +
        '<textarea type="text" class="form-control" id="showSearchJobDescriptionJobPostID" ' +
        ' placeholder="Job Description" readonly="readonly"> </textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3"' +
        'for="showSearchJobResponsibilitiesJobPostID">Responsibilities: </label>' +
        '<div class="col-xs-9">' +
        '<textarea type="text" class="form-control" id="showSearchJobResponsibilitiesJobPostID" ' +
        ' placeholder="Responsibilities" readonly="readonly"> </textarea>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobLocationJobPostID">Location: </label>' +
        '<div class="col-xs-9">' +
        '<input type="text" class="form-control" id="showSearchJobLocationJobPostID" ' +
        ' placeholder="Location" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-xs-3" for="showSearchJobSalaryJobPostID">Salary : </label>' +
        '<div class="col-xs-9">' +
        '<input type="number" class="form-control" id="showSearchJobSalaryJobPostID" ' +
        'placeholder="Salary" readonly="readonly">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-xs-12">' +
        '<div class="alert alert-danger" id="showSearchJobResultJobPostID"></div>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    var anchorJobSearch =
        '<a href="#" id="jobsSearchJobPostID" class="list-group-item list-group-item-action searchResult" ' +
        'data-target="#showSearchJobModalJobPostID" data-toggle="modal" ' +
        '>JobTitle</a>';

    var filterByCompanyNameCheckBox = '<div class="checkbox" id="filterByCompanyNameCheckBoxIDVAL"> ' +
        '<label><input type="checkbox" value="CMPNM">CMPNM</label> ' +
        '</div>';

    var filterByLocationCheckBox = '<div class="checkbox" id="filterByLocationCheckBoxIDVAL"> ' +
        '<label><input type="checkbox" value="LOC">LOC</label> ' +
        '</div>';

    var filterBySalaryRange = '<b style="padding-right: 10px;">$ MIN_VALUE</b> ' +
        '<input id="salaryRange" type="text" class="span2" value="" data-slider-min="MIN_VALUE" data-slider-max="MAX_VALUE" data-slider-step="STEP_VALUE" data-slider-value="[MIN_VALUE,MAX_VALUE]"/> ' +
        '<b style="padding-left: 10px;">$ MAX_VALUE</b>';


    //Add new Job Post
    $('#newJobPostAdd').click(function (e) {
        $('#newJobPostAdd').button('loading');
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
            url: url + "/job/",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                title: $("#newTitle").val(),
                description: $("#newDescription").val(),
                location: $("#newLocation").val(),
                salary: $("#newSalary").val(),
                responsibilities: $("#newResponsibilities").val()
            }),
            success: function (data) {
                $('#newJobPostAdd').button("reset");
                object = jQuery.parseJSON(JSON.stringify(data));

                jobPostedList = object.jobPostList.jobPost;
                i = 0;
                for (i = 0; jobPostedList.length > i; i++) {
                    jobPostId = jobPostedList[i].jobPostId;
                    thisForm = formJobPosted.replace(/JobPostedID/g, jobPostId);
                    if ($("#jobPostFormId" + jobPostId).length == 0) {
                        $("#jobPosted").append(thisForm);
                    }
                    $("#title" + jobPostId).val(jobPostedList[i].title);
                    $("#loc" + jobPostId).val(jobPostedList[i].location);
                    $("#desc" + jobPostId).val(jobPostedList[i].description);
                    $("#resp" + jobPostId).val(jobPostedList[i].responsibilities);
                    $("#sal" + jobPostId).val(jobPostedList[i].salary);
                    $("#stat" + jobPostId).val(jobPostedList[i].jobPostStatus);

                    //Event handlers for update button
                    $("#jobPostUpdate" + jobPostId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        jobPostButId = $(this).attr('id');
                        jobPostButId = jobPostButId.replace("jobPostUpdate", "");
                        $("#jobPostUpdate" + jobPostButId).button('loading');
                        $.ajax({
                            url: url + "/job/" + jobPostButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify({
                                title: $("#title" + jobPostButId).val(),
                                description: $("#desc" + jobPostButId).val(),
                                location: $("#loc" + jobPostButId).val(),
                                salary: $("#sal" + jobPostButId).val(),
                                responsibilities: $("#resp" + jobPostButId).val(),
                                jobPostStatus: $("#stat" + jobPostButId).val()
                            }),
                            success: function () {
                                $("#jobPostUpdate" + jobPostButId).button('reset');
                                $("#successMessage").text("Job Post is Updated!");
                                $("#successMessageModalAnchor").click();
                            }
                        });
                    });
                }
                $("#closeAddJobPost").click();
            }
        });
    });

    //Update Profile
    $("#updateCompanyProfile").click(function (e) {
        $("#updateCompanyProfile").button('loading');
        e.preventDefault();
        e.stopPropagation();

        $("#companyProfileImage").attr("src", $("#logoUrl").val());
        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                name: $("#name").val(),
                logoURL: $("#logoUrl").val(),
                location: $("#location").val(),
                description: $("#description").val(),
                website: $("#website").val()
            }),
            success: function (data) {
                $("#updateCompanyProfile").button('reset');
                $("#successMessage").text("Profile is Updated!");
                $("#successMessageModalAnchor").click();
            }
        });
    });

    //Navigation to other tab
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        currentTab = $(".tab-content").find(".active").attr('id');

        //Profile tab
        if (currentTab == '2') {

            $.get(url, function (data, status) {
                object = jQuery.parseJSON(JSON.stringify(data));
                $("#name").val(object.company.name);
                $("#logoUrl").val(object.company.logoURL);
                $("#location").val(object.company.location);
                $("#description").val(object.company.description);
                $("#website").val(object.company.website);
                $("#companyProfileImage").attr("src", object.company.logoURL);

                //Job Posted section
                jobPostedList = object.company.jobPosts.jobPost;
                i = 0;
                for (i = 0; jobPostedList.length > i; i++) {
                    jobPostId = jobPostedList[i].jobPostId;
                    thisForm = formJobPosted.replace(/JobPostedID/g, jobPostId);
                    if ($("#jobPostFormId" + jobPostId).length == 0) {
                        $("#jobPosted").append(thisForm);
                    }
                    $("#title" + jobPostId).val(jobPostedList[i].title);
                    $("#loc" + jobPostId).val(jobPostedList[i].location);
                    $("#desc" + jobPostId).val(jobPostedList[i].description);
                    $("#resp" + jobPostId).val(jobPostedList[i].responsibilities);
                    $("#sal" + jobPostId).val(jobPostedList[i].salary);
                    $("#stat" + jobPostId).val(jobPostedList[i].jobPostStatus);

                    //Event handlers for update button
                    $("#jobPostUpdate" + jobPostId).click(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        jobPostButId = $(this).attr('id');
                        jobPostButId = jobPostButId.replace("jobPostUpdate", "");
                        $("#jobPostUpdate" + jobPostButId).button('loading');
                        $.ajax({
                            url: url + "/job/" + jobPostButId,
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify({
                                title: $("#title" + jobPostButId).val(),
                                description: $("#desc" + jobPostButId).val(),
                                location: $("#loc" + jobPostButId).val(),
                                salary: $("#sal" + jobPostButId).val(),
                                responsibilities: $("#resp" + jobPostButId).val(),
                                jobPostStatus: $("#stat" + jobPostButId).val()
                            }),
                            success: function () {
                                $("#jobPostUpdate" + jobPostButId).button('reset');
                                $("#successMessage").text("Job Post is Updated!");
                                $("#successMessageModalAnchor").click();
                            }
                        });
                    });
                }
            });
        } else if (currentTab == '3') {    //Job applications

            var anchorJobApplications =
                '<a href="#" id="jobsApplicationsJobPostID" class="list-group-item list-group-item-action " ' +
                'data-target="#jobApplicationsJobPostIDModal" data-toggle="modal" ' +
                '>JOB_TITLE</a>';

            var jobApplicationsModal = '<div class="modal jobApplicationsJobPostID" id="jobApplicationsJobPostIDModal" role="dialog"> ' +
                '<div class="modal-dialog"> ' +
                '<div class="modal-content"> ' +
                '<div class="modal-header"> ' +
                '<button type="button" id="closeJobApplicationsJobPostIDModal" class="close" ' +
                ' data-dismiss="modal">&times;</button> ' +
                ' <h4 class="modal-title text-center form-title">Applicants</h4> ' +
                '</div> ' +
                '<div class="modal-body padtrbl" id="jobApplicationsJobPostIDModalBody"> ' +
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '</div>';

            var anchorJobApplicant =
                '<a href="#" id="JobPostIDjobApplicantJobSeekerID" class="list-group-item list-group-item-action " ' +
                'data-target="#JobPostIDjobApplicantJobSeekerIDProfileModal" data-toggle="modal" ' +
                '>FIRST_NAME LAST_NAME</a>';


            var modalJobApplicantProfile = '<div class="modal" id="JobPostIDjobApplicantJobSeekerIDProfileModal" role="dialog"> ' +
            '<div class="modal-dialog"> ' +
            '<div class="modal-content"> ' +
            '<div class="modal-header"> ' +
            '<button type="button" id="closeJobPostIDJobApplicantJobSeekerIDProfileModal" class="close" ' +
            ' data-dismiss="modal">&times;</button> ' +
            '<h4 class="modal-title text-center form-title">Applicant Profile</h4> ' +
            '</div> ' +
            '<div class="modal-body padtrbl"> ' +
            '<div class="panel panel-default"> ' +
            '<div class="row"> ' +
            '<div class="panel-body"> ' +
            '<img class="applicantProfileImage" id="JobPostIDJobApplicantJobSeekerIDImage" src="/images/profile.jpg"> ' +
            '<span>Profile</span> ' +
            '<form class="form-horizontal"> ' +
            '<div class="form-group"> ' +
            '<label class="control-label col-xs-2" ' +
            'for="JobPostIDJobApplicantJobSeekerIDFirstName">First ' +
            'name: </label> ' +
            '<div class="col-xs-10"> ' +
            '<input type="text" class="form-control" ' +
            'id="JobPostIDobApplicantJobSeekerIDFirstName" ' +
            'placeholder="First name" readonly="readonly" value="FIRST_NAME"> ' +
            '</div> ' +
            '</div> ' +
            '<div class="form-group"> ' +
            '<label class="control-label col-xs-2"  ' +
            'for="JobPostIDJobApplicantJobSeekerIDLastName">Last  ' +
            'name: </label> ' +
            '<div class="col-xs-10"> ' +
            '<input type="text" class="form-control"  ' +
            'id="JobPostIDJobApplicantJobSeekerIDLastName" ' +
            'placeholder="Last name" readonly="readonly" value="LAST_NAME"> ' +
            '</div> ' +
            '</div> ' +
            '<div class="form-group"> ' +
            '<label class="control-label col-xs-2" for="JobPostIDJobApplicantJobSeekerIDSummary" >Summary ' +
            ': </label> ' +
            '<div class="col-xs-10"> ' +
            '<textarea class="form-control" id="JobPostIDJobApplicantJobSeekerIDSummary" ' +
            'placeholder="Summary..." readonly="readonly" >SUMMARY</textarea> ' +
            '</div> ' +
            '</div> ' +
            '</form> ' +
            '</div> ' +
            '</div> ' +
            '   <div class="row"> ' +
            '   <div class="panel-body"> ' +
            '   <span>Work experience</span> ' +
            '<div id="JobPostIDJobApplicantJobSeekerIDWorkEx"> ' +
            '   </div> ' +
            '   </div> ' +
            '   </div> ' +
            '   <div class="row"> ' +
            '   <div class="panel-body"> ' +
            '   <span>Education</span> ' +
            '   <div id="JobPostIDJobApplicantJobSeekerIDEducation"> ' +
            '  </div> ' +
            '   </div> ' +
            '   </div> ' +
            '   <div class="row"> ' +
            '   <div class="panel-body"> ' +
            '   <span>Skills</span> ' +
            '   <div id="JobPostIDJobApplicantJobSeekerIDSkills"> ' +
            '   </div> ' +
            '   </div> ' +
            '   </div> ' +
            '   <div class="row"> ' +
            '   <div class="panel-body"> ' +
            '   <form class="form-horizontal"> ' +
            '    <div class="form-group"> ' +
            '   <label class="control-label col-xs-2" for ="JobPostIDJobApplicantJobSeekerIDStatus" >Status : </label> ' +
            ' <div class="col-xs-10"> ' +
            '    <select class="form-control" id="JobPostIDJobApplicantJobSeekerIDStatus"> ' +
            '  <option value="OFFERED">Offer</option> ' +
            '    <option value="REJECTED">Reject</option> ' +
            '   <option value="CANCELLED">Cancel</option> ' +
            '   </select> ' +
            '   </div> ' +
                '<div class="col-xs-10"> ' +
            '   <button class="btn btn-info" id="JobPostIDJobApplicantJobSeekerIDStatusUpdate" value="Submit" data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing">Submit</button> ' +
            '   </div> ' + '   </div> ' +
            '   </form> ' +
            '   </div> ' +
            '   </div> ' +
            '   </div> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '</div>';

            var formJobApplicationWorkEx = '<form class="form-horizontal">' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2">Job Title: </label>' +
                '<div class="col-xs-10">' +
                '<input type="text" class="form-control" readonly="readonly" placeholder="Job Title" value="JOB_TITLE">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2" >Company name: </label>' +
                '<div class="col-xs-10">' +
                '<input type="text" class="form-control" placeholder="Company name" readonly="readonly"  value="COMPANY_NAME">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2">From : </label>' +
                '<div class="col-xs-10">' +
                '<input type="date" class="form-control" placeholder="From date" readonly="readonly"  value="FROM_DATE">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2" >To : </label>' +
                '<div class="col-xs-10">' +
                '<input type="date" class="form-control" placeholder="Till" readonly="readonly"  value="TILL">' +
                '</div>' +
                '</div>' +
                '</form>';

            var formJobApplicationEdu = '<form class="form-horizontal">' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2" >School/University: </label>' +
                '<div class="col-xs-10">' +
                '<input type="text" class="form-control" placeholder="School/University name" readonly="readonly" value="SCHOOL">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2" >Degree: </label>' +
                '<div class="col-xs-10">' +
                '<input type="text" class="form-control" placeholder="Degree" readonly="readonly" value="DEGREE">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2" for="fieldEduID">Field: </label>' +
                '<div class="col-xs-10">' +
                '<input type="text" class="form-control" placeholder="Field" readonly="readonly" value="FIELD">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2">From : </label>' +
                '<div class="col-xs-10">' +
                '<input type="date" class="form-control" placeholder="From date" readonly="readonly" value="FROM_DATE">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2" >To : </label>' +
                '<div class="col-xs-10">' +
                '<input type="date" class="form-control" placeholder="Till"readonly="readonly" value="TILL">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</form>';

            var formJobApplicationSkill = '<form class="form-horizontal">' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2" >Skill: </label>' +
                '<div class="col-xs-10">' +
                '<input type="text" class="form-control" placeholder="Skill" readonly="readonly" value="SKILL">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-xs-2" >Years of experience: </label>' +
                '<div class="col-xs-10">' +
                '<input type="text" class="form-control" placeholder="Degree" readonly="readonly" value="EOE">' +
                '</div>' +
                '</div>' +
                '</form>';


            $("#jobApplicationsDiv").empty();

            $.get(url + '/applications', function (data, status) {
                var object = jQuery.parseJSON(JSON.stringify(data));
                //Job Posted section
                var applications = object.applications;
                for (var i = 0; applications.length > i; i++) {
                    console.log(applications[i].title);
                    var jobPostId = applications[i].jobPostId;
                    var title = applications[i].title;
                    var description = applications[i].description;
                    var location = applications[i].location;
                    var salary = applications[i].salary;
                    var responsibilities = applications[i].responsibilities;
                    var jobPostStatus = applications[i].jobPostStatus;

                    //Modal with list of applicants
                    var thisJobApplicationsModal = jobApplicationsModal.replace(/JobPostID/g, jobPostId);
                    $("#jobApplicationsDiv").append(thisJobApplicationsModal);

                    var applicants = applications[i].applications.jobSeeker;
                    for (var j = 0; applicants.length > j; j++) {
                        var jobSeekerId = applicants[j].jobSeekerId;
                        var firstName = applicants[j].firstName;
                        var lastName = applicants[j].lastName;
                        var summary = applicants[j].summary;
                        var picture = applicants[j].picture;

                        var thisJobSeekerProfileModal = modalJobApplicantProfile.replace(/JobPostID/g, jobPostId);
                        thisJobSeekerProfileModal = thisJobSeekerProfileModal.replace(/JobSeekerID/g, jobSeekerId);
                        thisJobSeekerProfileModal = thisJobSeekerProfileModal.replace(/FIRST_NAME/g, firstName);
                        thisJobSeekerProfileModal = thisJobSeekerProfileModal.replace(/LAST_NAME/g, lastName);
                        thisJobSeekerProfileModal = thisJobSeekerProfileModal.replace(/SUMMARY/g, summary);
                        $("#jobApplicationsDiv").append(thisJobSeekerProfileModal);


                        if ("undefined" != typeof picture && picture != "") {
                            $("#" + jobPostId + "JobApplicant" + jobSeekerId + "Image").attr("src", "data:image/jpg;base64," + picture);
                        }


                        if ("undefined" != typeof applicants[j].workExperienceList && "undefined" != typeof applicants[j].workExperienceList.workExperience) {
                            var workExList = applicants[j].workExperienceList.workExperience;
                            for (var workEx = 0; workExList.length > workEx; workEx++) {
                                var thisWorkExForm = formJobApplicationWorkEx.replace(/JOB_TITLE/g, workExList[workEx].jobTitle);
                                thisWorkExForm = thisWorkExForm.replace(/COMPANY_NAME/g, workExList[workEx].companyName);
                                thisWorkExForm = thisWorkExForm.replace(/FROM_DATE/g, workExList[workEx].from);
                                thisWorkExForm = thisWorkExForm.replace(/TILL/g, workExList[workEx].to);
                                $("#" + jobPostId + "JobApplicant" + jobSeekerId + "WorkEx").append(thisWorkExForm + "<hr>");

                            }
                        }


                        if ("undefined" != typeof  applicants[j].educationList && "undefined" != typeof applicants[j].educationList.education) {
                            var educationList = applicants[j].educationList.education;
                            for (var edu = 0; educationList.length > edu; edu++) {
                                var thisEducationForm = formJobApplicationEdu.replace(/SCHOOL/g, educationList[edu].schoolName);
                                thisEducationForm = thisEducationForm.replace(/DEGREE/g, educationList[edu].degree);
                                thisEducationForm = thisEducationForm.replace(/FIELD/g, educationList[edu].field);
                                thisEducationForm = thisEducationForm.replace(/FROM_DATE/g, educationList[edu].from);
                                thisEducationForm = thisEducationForm.replace(/TILL/g, educationList[edu].to);
                                $("#" + jobPostId + "JobApplicant" + jobSeekerId + "Education").append(thisEducationForm + "<hr>");
                            }
                        }

                        if ("undefined" != typeof  applicants[j].skillList && "undefined" != typeof applicants[j].skillList.skill) {
                            var skillList = applicants[j].skillList.skill;
                            for (var skillNo = 0; skillList.length > skillNo; skillNo++) {
                                var thisSkillForm = formJobApplicationSkill.replace(/SKILL/g, skillList[skillNo].skill);
                                thisSkillForm = thisSkillForm.replace(/EOE/g, skillList[skillNo].numberOfYears);
                                $("#" + jobPostId + "JobApplicant" + jobSeekerId + "Skills").append(thisSkillForm + "<hr>");
                            }
                        }

                        var thisAnchorJobApplicant = anchorJobApplicant.replace(/JobPostID/g, jobPostId);
                        thisAnchorJobApplicant = thisAnchorJobApplicant.replace(/JobSeekerID/g, jobSeekerId);
                        thisAnchorJobApplicant = thisAnchorJobApplicant.replace(/FIRST_NAME/g, firstName);
                        thisAnchorJobApplicant = thisAnchorJobApplicant.replace(/LAST_NAME/g, lastName);

                        $("#jobApplications" + jobPostId + "ModalBody").append(thisAnchorJobApplicant);
                        $("#"+ jobPostId + "JobApplicant" + jobSeekerId + "StatusUpdate").click(function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            var  ids = $(this).attr('id');
                            ids = ids.replace("JobApplicant", ",");
                            ids = ids.replace("StatusUpdate", "");
                            ids = ids.split(",");
                            $("#"+ ids[0] + "JobApplicant" + ids[1] + "StatusUpdate").button('loading');
                            $.ajax({
                                url: url + "/application/job/" + ids[0] + "/jobseeker/" + ids[1]+ "/" + $("#"+ids[0] + "JobApplicant" + ids[1] + "Status").val(),
                                type: "POST",
                                success: function () {
                                    $("#"+ ids[0] + "JobApplicant" + ids[1] + "StatusUpdate").button('reset');
                                    $("#close" + ids[0] + "JobApplicant" + ids[1]+"ProfileModal").click();
                                }
                            });
                        });
                    }

                    var thisAnchorJobApplications = anchorJobApplications.replace(/JobPostID/g, jobPostId);
                    thisAnchorJobApplications = thisAnchorJobApplications.replace("JOB_TITLE", title);
                    $("#jobApplicationsDiv").append(thisAnchorJobApplications);

                }
            });
        }
    });

    //Search Job
    $("#searchButton").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#searchResult").empty();
        $("#filterByCompanyName").empty();
        $("#filterByLocation").empty();
        $("#filterBySalary").empty();
        var searchQuery = $("#searchText").val();

        function updateSearchResults() {
            $('.searchResult').hide();

            var companyNameFilterResult = [];
            var companyNameFilterApplied = false;

            var locationNameFilterResult = [];
            var locationNameFilterApplied = false;

            var filterResult = [];
            var salaryRange = $("#salaryRange").val();
            var minSalary = parseInt(salaryRange.split(",")[0]);
            var maxSalary = parseInt(salaryRange.split(",")[1]);

            var minPossibleSalary = parseInt($("#salaryRange").attr("data-slider-min"));
            var maxPossibleSalary = parseInt($("#salaryRange").attr("data-slider-max"));

            if (isNaN(maxSalary)) {
                maxSalary = maxPossibleSalary;
            }
            if (isNaN(minSalary)) {
                minSalary = minPossibleSalary;
            }

            function intersect_safe(a, b) {
                var ai = 0, bi = 0;
                var result = [];

                while (ai < a.length && bi < b.length) {
                    if (a[ai] < b[bi]) {
                        ai++;
                    }
                    else if (a[ai] > b[bi]) {
                        bi++;
                    }
                    else /* they're equal */
                    {
                        result.push(a[ai]);
                        ai++;
                        bi++;
                    }
                }
                return result;
            }

            function checkSalaryRange(salary) {
                return salary >= minSalary && salary <= maxSalary;
            };

            //As per company Name
            $('#filterByCompanyName  input:checked').each(function () {
                companyNameFilterApplied = true;
                var copmanyName = $(this).val();
                $('.searchJobModal').each(function (i, obj) {
                    var jobPostId = $(obj).attr("id");
                    jobPostId = jobPostId.replace("showSearchJobModal", "");
                    var salary = parseInt($("#showSearchJobSalary" + jobPostId).val());
                    if ($("#showSearchJobCompanyName" + jobPostId).val() == copmanyName && checkSalaryRange(salary)) {
                        companyNameFilterResult.push("#jobsSearch" + jobPostId);
                    }
                });
            });

            //As per Location
            $('#filterByLocation  input:checked').each(function () {
                locationNameFilterApplied = true;
                var locationName = $(this).val();
                $('.searchJobModal').each(function (i, obj) {
                    var jobPostId = $(obj).attr("id");
                    jobPostId = jobPostId.replace("showSearchJobModal", "");
                    var salary = parseInt($("#showSearchJobSalary" + jobPostId).val());
                    if ($("#showSearchJobLocation" + jobPostId).val() == locationName && checkSalaryRange(salary)) {
                        locationNameFilterResult.push("#jobsSearch" + jobPostId);
                    }
                });
            });

            if (locationNameFilterApplied && companyNameFilterApplied) {
                //alert(locationNameFilterResult);
                //alert(companyNameFilterResult);
                filterResult = intersect_safe(locationNameFilterResult, companyNameFilterResult);
            } else if (locationNameFilterApplied) {
                filterResult = locationNameFilterResult;
            } else if (companyNameFilterApplied) {
                filterResult = companyNameFilterResult;
            }

            for (var i = 0; i < filterResult.length; i++) {
                $(filterResult[i]).show();
            }

            if (!companyNameFilterApplied && !locationNameFilterApplied) {
                $('.searchResult').show();
                // If range bar has changed
                if (minSalary != minPossibleSalary || minSalary != maxPossibleSalary) {
                    $(".searchJobModal").each(function (i, obj) {
                        var jobPostId = $(obj).attr("id");
                        jobPostId = jobPostId.replace("showSearchJobModal", "");
                        var salary = parseInt($("#showSearchJobSalary" + jobPostId).val());
                        if (!checkSalaryRange(salary)) {
                            $("#jobsSearch" + jobPostId).hide();
                        }
                    });
                }
            }
        }

        if (searchQuery != "") {
            $.get(url + "/job/" + searchQuery, function (data, status) {
                var object = jQuery.parseJSON(JSON.stringify(data));
                if ("undefined" != typeof object.jobPostList && "undefined" != typeof object.jobPostList.jobPost) {
                    var jobPosts = object.jobPostList.jobPost;
                    var minSal = Number.MAX_VALUE;
                    var maxSal = Number.MIN_VALUE;

                    for (var i = 0; jobPosts.length > i; i++) {
                        var jobPostId = jobPosts[i].jobPostId;
                        var thisAnchor = anchorJobSearch.replace(/JobPostID/g, jobPostId);
                        thisAnchor = thisAnchor.replace(/JobTitle/g, jobPosts[i].title);
                        var thisModal = showSearchJobsModal.replace(/JobPostID/g, jobPostId);
                        if ($("#jobsSearch" + jobPostId).length == 0) {
                            $("#searchResult").append(thisModal);
                            $("#searchResult").append(thisAnchor);
                            $("#showSearchJobResult" + jobPostId).hide();
                        }

                        $("#showSearchJobTitle" + jobPostId).val(jobPosts[i].title);
                        $("#showSearchJobDescription" + jobPostId).val(jobPosts[i].description);
                        $("#showSearchJobResponsibilities" + jobPostId).val(jobPosts[i].responsibilities);
                        $("#showSearchJobLocation" + jobPostId).val(jobPosts[i].location);
                        $("#showSearchJobSalary" + jobPostId).val(jobPosts[i].salary);
                        $("#showSearchJobCompanyName" + jobPostId).val(jobPosts[i].company.company.name);

                        //Adding filters
                        //By company Name
                        if ("" == $("#filterByCompanyName").text()) {
                            $("#filterByCompanyName").append("By Company name")
                        }
                        var companyName = $("#showSearchJobCompanyName" + jobPostId).val();

                        if ($("#filterByCompanyNameCheckBox" + companyName.replace(/[^a-zA-Z0-9]/g, '')).length == 0) {
                            var thisFilter = filterByCompanyNameCheckBox.replace(/CMPNM/g, companyName);
                            thisFilter = thisFilter.replace("IDVAL", companyName.replace(/[^a-zA-Z0-9]/g, ''));
                            $("#filterByCompanyName").append(thisFilter);

                            $("#filterByCompanyNameCheckBox" + companyName.replace(/[^a-zA-Z0-9]/g, '')).click(function () {
                                updateSearchResults();
                            });
                        }

                        //By Location
                        if ("" == $("#filterByLocation").text()) {
                            $("#filterByLocation").append("By Location")
                        }
                        var locationName = $("#showSearchJobLocation" + jobPostId).val();

                        if ($("#filterByLocationCheckBox" + locationName.replace(/[^a-zA-Z0-9]/g, '')).length == 0) {
                            thisFilter = filterByLocationCheckBox.replace(/LOC/g, locationName);
                            thisFilter = thisFilter.replace("IDVAL", locationName.replace(/[^a-zA-Z0-9]/g, ''));
                            $("#filterByLocation").append(thisFilter);

                            $("#filterByLocationCheckBox" + locationName.replace(/[^a-zA-Z0-9]/g, '')).click(function () {
                                updateSearchResults();
                            });
                        }

                        // By Salary
                        if (parseInt(jobPosts[i].salary) > maxSal) {
                            maxSal = parseInt(jobPosts[i].salary);
                        }

                        if (parseInt(jobPosts[i].salary) < minSal) {
                            minSal = parseInt(jobPosts[i].salary);
                        }
                    }

                    if ("" == $("#filterBySalary").text()) {
                        $("#filterBySalary").append("By Salary<br>");
                        var salaryFilterValue = filterBySalaryRange.replace(/MIN_VALUE/g, minSal);
                        salaryFilterValue = salaryFilterValue.replace(/MAX_VALUE/g, maxSal);
                        var stepValue = (maxSal - minSal) / 100;
                        salaryFilterValue = salaryFilterValue.replace(/STEP_VALUE/g, stepValue);
                        $("#filterBySalary").append(salaryFilterValue);
                        $("#salaryRange").slider({});
                        $("#salaryRange").on('slideStop', function () {
                            updateSearchResults();
                        });
                    }
                } else {
                }
            });
        }
    });
});
