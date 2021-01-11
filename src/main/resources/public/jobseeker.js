$(document).ready(function () {
	var url = "http://localhost:8080/"+ $("#userId").val()+ "/jobseeker";

	var formWorkEx = '<form id="workExFormIdworkExID" name="workExForm" class="form-horizontal">' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="titleworkExID" >Job Title: </label>' +
	'<div class="col-xs-10">' +
	'<input type="text" class="form-control" id="titleworkExID" placeholder="Job Title">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="companyNameworkExID">Company name: </label>' +
	'<div class="col-xs-10">' +
	'<input type="text" class="form-control" id="companyNameworkExID" placeholder="Company name">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="fromworkExID">From : </label>' +
	'<div class="col-xs-10">' +
	'<input type="date" class="form-control" id="fromworkExID" placeholder="From date">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="tillworkExID">To : </label>' +
	'<div class="col-xs-10">' +
	'<input type="date" class="form-control" id="tillworkExID" placeholder="Till">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="workExUpdateworkExID"></label>' +
	'<div class="col-xs-10">' +
	'<button id="workExUpdateworkExID" class="btn btn-info" name="workExUpdate" data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Update</button>' +
	'<button id="workExDeleteworkExID" class="btn btn-danger" style="position: relative; float: right"  name="workExDelete" >Delete</button>' +
	'</div>' +
	'</div>' +
	'</form>';

	var formEducation = '<form id="educationFormIdEduID" name="educationForm" class="form-horizontal">' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="schoolEduID" >School/University: </label>' +
	'<div class="col-xs-10">' +
	'<input type="text" class="form-control" id="schoolEduID" placeholder="School/University name">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="degreeEduID">Degree: </label>' +
	'<div class="col-xs-10">' +
	'<input type="text" class="form-control" id="degreeEduID" placeholder="Degree">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="fieldEduID">Field: </label>' +
	'<div class="col-xs-10">' +
	'<input type="text" class="form-control" id="fieldEduID" placeholder="Field">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="eduFromEduID">From : </label>' +
	'<div class="col-xs-10">' +
	'<input type="date" class="form-control" id="eduFromEduID" placeholder="From date">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="eduTillEduID">To : </label>' +
	'<div class="col-xs-10">' +
	'<input type="date" class="form-control" id="eduTillEduID" placeholder="Till">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="eduUpdateEduID"></label>' +
	'<div class="col-xs-10">' +
	'<button id="eduUpdateEduID" class="btn btn-info" name="eduUpdate" data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Update</button>' +
	'<button id="eduDeleteEduID" class="btn btn-danger" style="position: relative; float: right"  name="eduDelete" >Delete</button>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'</form>';

	var formSkill = '<form id="skillFormIdSkillID" name="educationForm" class="form-horizontal">' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="skillSkillID" >Skill: </label>' +
	'<div class="col-xs-10">' +
	'<input type="text" class="form-control" id="skillSkillID" placeholder="Skill name">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="yearsOfExpSkillID">Degree: </label>' +
	'<div class="col-xs-10">' +
	'<input type="number" class="form-control" id="yearsOfExpSkillID" placeholder="0-10">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-2" for="skillAddSkillID"></label>' +
	'<div class="col-xs-10">' +
	'<button id="skillUpdateSkillID" class="btn btn-info" name="skillUpdate" data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Update</button>' +
	'<button id="skillDeleteSkillID" class="btn btn-danger" style="position: relative; float: right"  name="skillDelete">Delete</button>' +
	'</div>' +
	'</div>' +
	'</form>';


	var showAppliedJobsModal = '<div class="modal" id="showAppliedJobModalJobPostID" role="dialog">' +
	'<div class="modal-dialog">' +
	'<div class="modal-content">' +
	'<div class="modal-header">' +
	' <button type="button" id="closeShowAppliedJobJobPostID" class="close"' +
	' data-dismiss="modal">&times;</button>' +
	'<h4 class="modal-title text-center form-title">Job Description</h4>' +
	'</div>' +
	'<div class="modal-body padtrbl">' +
	'<form id="showAppliedJobFormId" name="showAppliedJobFormJobPostID" class="form-horizontal">' +
	' <div class="form-group">' +
	'<label class="control-label col-xs-3" for="showAppliedJobCompanyNameJobPostID">Company</label>' +
	'<div class="col-xs-9">' +
	'<input type="text" class="form-control" id="showAppliedJobCompanyNameJobPostID" ' +
	' placeholder="Company name" readonly="readonly">' +
	'</div>' +
	'</div>' +

	' <div class="form-group">' +
	'<label class="control-label col-xs-3" for="showAppliedJobTitleJobPostID">Job Title</label>' +
	'<div class="col-xs-9">' +
	'<input type="text" class="form-control" id="showAppliedJobTitleJobPostID" ' +
	' placeholder="Job Title" readonly="readonly">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" for="showAppliedJobDescriptionJobPostID">Description: </label>' +
	'<div class="col-xs-9">' +
	'<textarea type="text" class="form-control" id="showAppliedJobDescriptionJobPostID" ' +
	' placeholder="Job Description" readonly="readonly"> </textarea>' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3"' +
	'for="showAppliedJobResponsibilitiesJobPostID">Responsibilities: </label>' +
	'<div class="col-xs-9">' +
	'<textarea type="text" class="form-control" id="showAppliedJobResponsibilitiesJobPostID" ' +
	' placeholder="Responsibilities" readonly="readonly"> </textarea>' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" for="showAppliedJobLocationJobPostID">Location: </label>' +
	'<div class="col-xs-9">' +
	'<input type="text" class="form-control" id="showAppliedJobLocationJobPostID" ' +
	' placeholder="Location"  readonly="readonly">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" for="showAppliedJobSalaryJobPostID">Salary : </label>' +
	'<div class="col-xs-9">' +
	'<input type="number" class="form-control" id="showAppliedJobSalaryJobPostID" ' +
	'placeholder="Salary" readonly="readonly">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" ' +
	'for="showAppliedJobWithdrawJobPostID"></label>' +
	'<div class="col-xs-9">' +
	'<button id="showAppliedJobAcceptJobPostID" disabled class="btn btn-success"   data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Accept</button>' +
		'<button id="showAppliedJobRejectJobPostID" disabled class="btn btn-primary" style="margin-left: 20px;"   data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Reject</button>' +
		'<button id="showAppliedJobWithdrawJobPostID" class="btn btn-danger" style="margin-left: 20px;"   data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Withdraw</button>' +
	'</div>' +
	'</div>' +
	'</form>' +
	'</form>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'</div>';

	var anchorJobApplied =
		'<a href="#" id="jobsAppliedJobPostID" class="list-group-item list-group-item-action" ' +
		'data-target="#showAppliedJobModalJobPostID" data-toggle="modal" ' +
		'>JobTitle<h5 id="jobsAppliedJobPostIDStatus" style="position: relative; float: right">ApplicationStatus</h5></a>';


	var showInterestedJobsModal = '<div class="modal" id="showInterestedJobModalJobPostID" role="dialog">' +
	'<div class="modal-dialog">' +
	'<div class="modal-content">' +
	'<div class="modal-header">' +
	' <button type="button" id="closeShowInterestedJobJobPostID" class="close"' +
	' data-dismiss="modal">&times;</button>' +
	'<h4 class="modal-title text-center form-title">Job Description</h4>' +
	'</div>' +
	'<div class="modal-body padtrbl">' +
	'<form id="showInterestedJobFormId" name="showInterestedJobFormJobPostID" class="form-horizontal">' +
	' <div class="form-group">' +
	'<label class="control-label col-xs-3" for="showInterestedJobCompanyNameJobPostID">Company</label>' +
	'<div class="col-xs-9">' +
	'<input type="text" class="form-control" id="showInterestedJobCompanyNameJobPostID" ' +
	' placeholder="Company name" readonly="readonly">' +
	'</div>' +
	'</div>' +
	' <div class="form-group">' +
	'<label class="control-label col-xs-3" for="showInterestedJobTitleJobPostID">Job Title</label>' +
	'<div class="col-xs-9">' +
	'<input type="text" class="form-control" id="showInterestedJobTitleJobPostID" ' +
	' placeholder="Job Title" readonly="readonly">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" for="showInterestedJobDescriptionJobPostID">Description: </label>' +
	'<div class="col-xs-9">' +
	'<textarea type="text" class="form-control" id="showInterestedJobDescriptionJobPostID" ' +
	' placeholder="Job Description" readonly="readonly"> </textarea>' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3"' +
	'for="showInterestedJobResponsibilitiesJobPostID">Responsibilities: </label>' +
	'<div class="col-xs-9">' +
	'<textarea type="text" class="form-control" id="showInterestedJobResponsibilitiesJobPostID" ' +
	' placeholder="Responsibilities" readonly="readonly"> </textarea>' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" for="showInterestedJobLocationJobPostID">Location: </label>' +
	'<div class="col-xs-9">' +
	'<input type="text" class="form-control" id="showInterestedJobLocationJobPostID" ' +
	' placeholder="Location">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" for="showInterestedJobSalaryJobPostID">Salary : </label>' +
	'<div class="col-xs-9">' +
	'<input type="number" class="form-control" id="showInterestedJobSalaryJobPostID" ' +
	'placeholder="Salary" readonly="readonly">' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" for="showSearchJobResumeFileJobPostID">Resume (Optional) : </label>' +
	'<div class="col-xs-9">' +
	'<input type="file" name="files[]" class="btn-bs-file btn btn-sm btn-info" id="showSearchJobResumeFileJobPostID" ' +
	'style=".btn-bs-file{position:relative;}' +
	'.btn-bs-file input[type="file"]{' +
	'position: absolute;' +
	'top: -9999999;' +
	'filter: alpha(opacity=0);' +
	'opacity: 0;' +
	'width:0;' +
	'height:0;' +
	'outline: none;' +
	'cursor: inherit;' +
	'}" multiple>' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<div class="col-xs-12">' +
	'<div class="alert alert-danger" id="showInterestedJobResultJobPostID"></div>' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" ' +
	'for="showInterestedobWithdrawJobPostID"></label>' +
	'<div class="col-xs-9">' +
	'<button id="showInterestedJobQuickApplyJobPostID" class="btn btn-info" style="margin-right: 20px;"  data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Apply</button>' +
	'<button id="showInterestedJobWithdrawJobPostID" class="btn btn-danger"   data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Not interested</button>' +
	'</div>' +
	'</div>' +
	'</form>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'</div>';

	var anchorJobInterested =
		'<a href="#" id="jobsInterestedJobPostID" class="list-group-item list-group-item-action" ' +
		'data-target="#showInterestedJobModalJobPostID" data-toggle="modal" ' +
		'>JobTitle</a>';

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
	' placeholder="Location">' +
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
	'<label class="control-label col-xs-3" for="showSearchJobResumeFileJobPostID">Resume (Optional) : </label>' +
	'<div class="col-xs-9">' +
	'<input type="file" name="files[]" class="btn-bs-file btn btn-sm btn-info" id="showSearchJobResumeFileJobPostID" ' +
	'style=".btn-bs-file{position:relative;}' +
	'.btn-bs-file input[type="file"]{' +
	'position: absolute;' +
	'top: -9999999;' +
	'filter: alpha(opacity=0);' +
	'opacity: 0;' +
	'width:0;' +
	'height:0;' +
	'outline: none;' +
	'cursor: inherit;' +
	'}" multiple>' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<div class="col-xs-12">' +
	'<div class="alert alert-danger" id="showSearchJobResultJobPostID"></div>' +
	'</div>' +
	'</div>' +
	'<div class="form-group">' +
	'<label class="control-label col-xs-3" ' +
	'for="showSearchJobWithdrawJobPostID"></label>' +
	'<div class="col-xs-9">' +
	'<button id="showSearchJobQuickApplyJobPostID" class="btn btn-info"   data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Apply</button>' +
	'<button id="showSearchJobFavoriteJobPostID" class="btn btn-info"  style="margin-left: 20px;"  data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Processing" >Add to favorite</button>' +
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


	$("#profilePicture").change(function () {
		file =$(this).prop('files')[0];
		 if(file.size>=2*1024*1024) {
             alert("JPG images of maximum 2MB");
             $("#profilePicture").val("");
             return;
         }

         if(!file.type.match('image/jp.*')) {
             alert("only JPG images");
             $("#profilePicture").val("");
             return;
         }
         
		reader = new FileReader();
		reader.onloadend = function() {
			pictureVal = reader.result;
			$("#seekerProfileImage").attr("src", pictureVal);

			$.ajax({
				url: url,
				type: "POST",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify({
					firstName: $("#firstName").val(),
					lastName: $("#lastName").val(),
					summary: $("#summary").val(),
					picture : pictureVal.replace("data:image/jpeg;base64,", "")
				}),
				success: function () {
					$("#successMessage").text("Profile is updated!");
					$("#successMessageModalAnchor").click();
				}
			});
		};
		reader.readAsDataURL(file);
	});


	// Search Job
	$("#searchButton").click(function(e) {
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

            if(isNaN(maxSalary)) {
                maxSalary = maxPossibleSalary;
            }
            if(isNaN(minSalary)) {
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

			// As per company Name
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

			// As per Location
			$('#filterByLocation  input:checked').each(function () {
				locationNameFilterApplied = true;
                var locationName = $(this).val();
				$('.searchJobModal').each(function (i, obj) {
                    var  jobPostId = $(obj).attr("id");
					jobPostId = jobPostId.replace("showSearchJobModal", "");
                    var  salary = parseInt($("#showSearchJobSalary" + jobPostId).val());
					if ($("#showSearchJobLocation" + jobPostId).val() == locationName && checkSalaryRange(salary)) {
						locationNameFilterResult.push("#jobsSearch" + jobPostId);
					}
				});
			});
 
			if (locationNameFilterApplied && companyNameFilterApplied) {
				filterResult = intersect_safe(locationNameFilterResult, companyNameFilterResult);
			} else if (locationNameFilterApplied) {
				filterResult = locationNameFilterResult;
			} else if (companyNameFilterApplied) {
				filterResult = companyNameFilterResult;
			}

			for (i = 0; i < filterResult.length; i++) {
				$(filterResult[i]).show();
			}

			if(!companyNameFilterApplied && !locationNameFilterApplied) {
				$('.searchResult').show();
                // If range bar has changed
				if(minSalary != minPossibleSalary || maxSalary != maxPossibleSalary) {
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

		if(searchQuery != "") { 
			$.get(url + "/job/" + searchQuery, function (data, status) {
				var object = jQuery.parseJSON(JSON.stringify(data));
				if("undefined" != typeof object.jobPostList && "undefined" != typeof object.jobPostList.jobPost) {
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
						
						// Adding filters
						// By company Name
						if("" ==  $("#filterByCompanyName").text()) {
							$("#filterByCompanyName").append("By Company name");
						}
						var companyName = $("#showSearchJobCompanyName" + jobPostId).val();

						if ($("#filterByCompanyNameCheckBox" + companyName.replace(/[^a-zA-Z0-9]/g, '')).length == 0) {
							var thisFilter = filterByCompanyNameCheckBox.replace(/CMPNM/g, companyName);
							thisFilter = thisFilter.replace("IDVAL", companyName.replace(/[^a-zA-Z0-9]/g, ''));
							$("#filterByCompanyName").append(thisFilter);

							$("#filterByCompanyNameCheckBox" + companyName.replace(/[^a-zA-Z0-9]/g, '')).click(function() {
								updateSearchResults();
							});
						}

						// By Location
						if("" ==  $("#filterByLocation").text()) {
							$("#filterByLocation").append("By Location");
							
						}
						var locationName = $("#showSearchJobLocation" + jobPostId).val();

						if ($("#filterByLocationCheckBox" + locationName.replace(/[^a-zA-Z0-9]/g, '')).length == 0) {
							thisFilter = filterByLocationCheckBox.replace(/LOC/g, locationName);
							thisFilter = thisFilter.replace("IDVAL", locationName.replace(/[^a-zA-Z0-9]/g, ''));
							$("#filterByLocation").append(thisFilter);

							$("#filterByLocationCheckBox" + locationName.replace(/[^a-zA-Z0-9]/g, '')).click(function() {
								updateSearchResults();
							});
						}
						
						// By Salary
						if(parseInt(jobPosts[i].salary) > maxSal) {
							maxSal = parseInt(jobPosts[i].salary);
						} 
						
						if (parseInt(jobPosts[i].salary) < minSal) {
							minSal = parseInt(jobPosts[i].salary);
						}


						$("#showSearchJobFavorite" + jobPostId).click(function (e) {
							e.preventDefault();
							e.stopPropagation();
							var favoriteId = $(this).attr('id').replace("showSearchJobFavorite", "");
							$.ajax({
								url: url + "/job/" + favoriteId + "/interest",
								type: "POST",
								success: function () {
									// Close Modal
									$("#closeShowSearchJob" + favoriteId).click();
								},
								error: function (e) {
									// Close Modal
									$("#closeShowSearchJob" + favoriteId).click();
								}
							});

						});

						$("#showSearchJobQuickApply" + jobPostId).click(function (e) {
							e.preventDefault();
							e.stopPropagation();
                            var jobPostApplyId = $(this).attr('id').replace("showSearchJobQuickApply", "");
                            $("#showSearchJobQuickApply" + jobPostApplyId).button('loading');
							if ($("#firstName").val().length == 0 || $("#lastName").val().length == 0) {
								$.ajax({
									url: url,
									type: "get",
									async: false,
									success: function (data) {
										object = jQuery.parseJSON(JSON.stringify(data));
										$("#firstName").val(object.jobseeker.firstName);
										$("#lastName").val(object.jobseeker.lastName);
										$("#summary").val(object.jobseeker.summary);
									}
								});
							}

							if ($("#firstName").val().length > 0 && $("#lastName").val().length > 0) {



							$.ajax({
								url: url + "/job/" + jobPostApplyId + "/application",
								type: "POST",
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								success: function () {
                                    $("#showSearchJobQuickApply" + jobPostApplyId).button("reset");
									// Close Modal
									$("#closeShowSearchJob" + jobPostApplyId).click();
								},
								error: function (e) {
                                    $("#showSearchJobQuickApply" + jobPostApplyId).button('reset');
									var errorResponse = JSON.parse(e.responseText);
									// Show error
									$("#showSearchJobResult" + jobPostApplyId).show();
									$("#showSearchJobResult" + jobPostApplyId).append(errorResponse.BadRequest.msg);
								}
							});
							} else {
                                $("#showSearchJobQuickApply" + jobPostApplyId).button('reset');
								$("#failureMessage").text("Please complete your profile before applying for a job");
								$("#inCompleteProfileMessageModalAnchor").click();
							}
						});
					}
					if("" ==  $("#filterBySalary").text()) {
						$("#filterBySalary").append("By Salary<br>");
						var salaryFilterValue = filterBySalaryRange.replace(/MIN_VALUE/g, minSal);
						salaryFilterValue = salaryFilterValue.replace(/MAX_VALUE/g, maxSal);
						var stepValue = (maxSal - minSal)/100;
						salaryFilterValue = salaryFilterValue.replace(/STEP_VALUE/g, stepValue);
						$("#filterBySalary").append(salaryFilterValue);
						$("#salaryRange").slider({});
						$("#salaryRange").on('slideStop', function() {
							updateSearchResults();
						});
					}
				} else {

				}
			});
		}
	});


	$("#seekerProfileImage").click(function (e) {
		$("#profilePicture").click();
	});


	// Update Profile
	$("#updateJobSeekerProfile").click(function(e) {
        $("#updateJobSeekerProfile").button('loading');
		e.preventDefault();
		e.stopPropagation();

		$.ajax({
			url: url,
			type: "POST",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: JSON.stringify({
				firstName: $("#firstName").val(),
				lastName: $("#lastName").val(),
				summary: $("#summary").val()
			}),
			success: function (data) {
                $("#updateJobSeekerProfile").button('reset');
                $("#successMessage").text("Profile is Updated!");
				$("#successMessageModalAnchor").click();
			}
		});
	});



	// Add new Work Ex
	$('#newWorkExAdd').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			url: url + "/workex/",
			type: "POST",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: JSON.stringify({
				jobTitle: $("#newTitle").val(),
				companyName: $("#newCompanyName").val(),
				from: $("#newFrom").val(),
				to: $("#newTill").val()
			}),
			success: function (data) {
				object = jQuery.parseJSON(JSON.stringify(data));
				workExperienceList = object.workExperienceList.workExperience;
				i = 0;
				for (i = 0; workExperienceList.length > i; i++) {
					workExId = workExperienceList[i].workExperienceId;
					thisForm = formWorkEx.replace(/workExID/g, workExId);
					if ($("#workExFormId" + workExId).length == 0) {
						$("#workEx").append(thisForm);
					}
					$("#title" + workExId).val(workExperienceList[i].jobTitle);
					$("#companyName" + workExId).val(workExperienceList[i].companyName);
					$("#from" + workExId).val(workExperienceList[i].from);
					$("#till" + workExId).val(workExperienceList[i].to);

					// Event handlers for delete button
					$("#workExDelete" + workExId).click(function (e) {
						e.preventDefault();
						e.stopPropagation();
						workExButId = $(this).attr('id');
						workExButId = workExButId.replace("workExDelete", "");
						$.ajax({
							url: url + "/workex/" + workExButId,
							type: "DELETE",
							success: function () {
								$("#workExFormId" + workExButId).remove();
							}
						});
					});

					// Event handlers for update button
					$("#workExUpdate" + workExId).click(function (e) {
						e.preventDefault();
						e.stopPropagation();
						var workExButId = $(this).attr('id');
						workExButId = workExButId.replace("workExUpdate", "");
                        $("#workExUpdate" + workExButId).button('loading');
						$.ajax({
							url: url + "/workex/" + workExButId,
							type: "POST",
							contentType: "application/json; charset=utf-8",
							dataType: "json",
							data: JSON.stringify({
								jobTitle: $("#title" + workExButId).val(),
								companyName: $("#companyName" + workExButId).val(),
								from: $("#from" + workExButId).val(),
								to: $("#till" + workExButId).val()
							}),
							success: function () {
                                $("#workExUpdate" + workExButId).button('reset');
								$("#successMessage").text("Work Experience is Updated!");
								$("#successMessageModalAnchor").click();
							}
						});
					});
				}

				$("#closeAddWorkEx").click();
			}
		});
	});

	// Add new Education
	$('#newEducationAdd').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			url: url + "/education/",
			type: "POST",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: JSON.stringify({
				schoolName: $("#newSchool").val(),
				degree: $("#newDegree").val(),
				field: $("#newField").val(),
				from: $("#newEduFrom").val(),
				to: $("#newEduTill").val()
			}),
			success: function (data) {

				object = jQuery.parseJSON(JSON.stringify(data));
				educationList = object.educationList.education;
				i = 0;
				for (i = 0; educationList.length > i; i++) {
					eduId = educationList[i].educationId;
					thisForm = formEducation.replace(/EduID/g, eduId);
					if ($("#educationFormId" + eduId).length == 0) {
						$("#education").append(thisForm);
					}

					$("#school" + eduId).val(educationList[i].schoolName);
					$("#degree" + eduId).val(educationList[i].degree);
					$("#field" + eduId).val(educationList[i].field);
					$("#eduFrom" + eduId).val(educationList[i].from);
					$("#eduTill" + eduId).val(educationList[i].to);

					// Event handlers for delete button
					$("#eduDelete" + eduId).click(function (e) {
						e.preventDefault();
						e.stopPropagation();
						eduButId = $(this).attr('id');
						eduButId = eduButId.replace("eduDelete", "");

						$.ajax({
							url: url + "/education/" + eduButId,
							type: "DELETE",
							success: function () {
								$("#educationFormId" + eduButId).remove();
							}
						});
					});

					// Event handlers for update button
					$("#eduUpdate" + eduId).click(function (e) {
						e.preventDefault();
						e.stopPropagation();

						var eduButId = $(this).attr('id');
                        eduButId = eduButId.replace("eduUpdate", "");
                        $("#eduUpdate" + eduButId).button('loading');
						$.ajax({
							url: url + "/education/" + eduButId,
							type: "POST",
							contentType: "application/json; charset=utf-8",
							dataType: "json",
							data: JSON.stringify({
								schoolName: $("#school" + eduButId).val(),
								degree: $("#degree" + eduButId).val(),
								field: $("#field" + eduButId).val(),
								from: $("#from" + eduButId).val(),
								to: $("#till" + eduButId).val()
							}),
							success: function () {
                                $("#eduUpdate" + eduButId).button('reset');
								$("#successMessage").text("Education is Updated!");
								$("#successMessageModalAnchor").click();
							}
						});
					});

				}

				$("#closeAddEducation").click();
			}
		});
	});

	// Add new Skill
	$('#newSkillAdd').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			url: url + "/skill/",
			type: "POST",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: JSON.stringify({
				skill: $("#newSkill").val(),
				numberOfYears: $("#newYearsOfExp").val(),
			}),
			success: function (data) {

				object = jQuery.parseJSON(JSON.stringify(data));
				skillList = object.skillList.skill;
				i = 0;
				for (i = 0; skillList.length > i; i++) {
					skillId = skillList[i].skillId;
					thisForm = formSkill.replace(/SkillID/g, skillId);
					if ($("#skillFormId" + skillId).length == 0) {
						$("#skill").append(thisForm);
					}

					$("#skill" + skillId).val(skillList[i].skill);
					$("#yearsOfExp" + skillId).val(skillList[i].numberOfYears);


					// Event handlers for delete button
					$("#skillDelete" + skillId).click(function (e) {
						e.preventDefault();
						e.stopPropagation();
						skillButId = $(this).attr('id');
						skillButId = skillButId.replace("skillDelete", "");

						$.ajax({
							url: url + "/skill/" + skillButId,
							type: "DELETE",
							success: function () {
								$("#skillFormId" + skillButId).remove();
							}
						});
					});

					// Event handlers for update button
					$("#skillUpdate" + skillId).click(function (e) {
						e.preventDefault();
						e.stopPropagation();
						var skillButId = $(this).attr('id');
						skillButId = skillButId.replace("skillUpdate", "");
                        $("#skillUpdate" + skillButId).button('loading');
						$.ajax({
							url: url + "/skill/" + skillButId,
							type: "POST",
							contentType: "application/json; charset=utf-8",
							dataType: "json",
							data: JSON.stringify({
								skill: $("#skill" + skillButId).val(),
								numberOfYears: $("#yearsOfExp" + skillButId).val()
							}),
							success: function () {
                                $("#skillUpdate" + skillButId).button('reset');
								$("#successMessage").text("Skill is Updated!");
								$("#successMessageModalAnchor").click();
							}
						});
					});

				}

				$("#closeAddSkill").click();
			}
		});
	});

	// Navigation to other tab
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href") // activated tab
		var currentTab = $(".tab-content").find(".active").attr('id');

		// Profile tab
		if (currentTab == '2') {

			$.get(url, function (data, status) {
				var object = jQuery.parseJSON(JSON.stringify(data));
				$("#firstName").val(object.jobseeker.firstName);
				$("#lastName").val(object.jobseeker.lastName);
				$("#summary").val(object.jobseeker.summary);
				$("#seekerProfileImage").attr("src", "data:image/jpg;base64," + object.jobseeker.picture);


				// Work experience section
				if("undefined" != typeof object.jobseeker.workExperienceList) {
					var workExperienceList = object.jobseeker.workExperienceList.workExperience;
					for (var i = 0; workExperienceList.length > i; i++) {
						var workExId = workExperienceList[i].workExperienceId;
						var thisForm = formWorkEx.replace(/workExID/g, workExId);
						if ($("#workExFormId" + workExId).length == 0) {
							$("#workEx").append(thisForm);
						}
						$("#title" + workExId).val(workExperienceList[i].jobTitle);
						$("#companyName" + workExId).val(workExperienceList[i].companyName);
						$("#from" + workExId).val(workExperienceList[i].from);
						$("#till" + workExId).val(workExperienceList[i].to);

						// Event handlers for delete button
						$("#workExDelete" + workExId).click(function (e) {
							e.preventDefault();
							e.stopPropagation();
							var workExButId = $(this).attr('id');
							workExButId = workExButId.replace("workExDelete", "");

							$.ajax({
								url: url + "/workex/" + workExButId,
								type: "DELETE",
								success: function () {
									$("#workExFormId" + workExButId).remove();
								}
							});
						});

						// Event handlers for update button
						$("#workExUpdate" + workExId).click(function (e) {
							e.preventDefault();
							e.stopPropagation();
							var workExButId = $(this).attr('id');
							workExButId = workExButId.replace("workExUpdate", "");
                            $("#workExUpdate" + workExButId).button('loading');
							$.ajax({
								url: url + "/workex/" + workExButId,
								type: "POST",
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								data: JSON.stringify({
									jobTitle: $("#title" + workExButId).val(),
									companyName: $("#companyName" + workExButId).val(),
									from: $("#from" + workExButId).val(),
									to: $("#till" + workExButId).val()
								}),
								success: function () {
                                    $("#workExUpdate" + workExButId).button('reset');
									$("#successMessage").text("Work Experience is Updated!");
									$("#successMessageModalAnchor").click();
								}
							});
						});
					}
				}



				// Education Section
				if("undefined" != typeof object.jobseeker.educationList) {
					var educationList = object.jobseeker.educationList.education;
					for (var i = 0; educationList.length > i; i++) {
						var eduId = educationList[i].educationId;
						thisForm = formEducation.replace(/EduID/g, eduId);
						if ($("#educationFormId" + eduId).length == 0) {
							$("#education").append(thisForm);
						}

						$("#school" + eduId).val(educationList[i].schoolName);
						$("#degree" + eduId).val(educationList[i].degree);
						$("#field" + eduId).val(educationList[i].field);
						$("#eduFrom" + eduId).val(educationList[i].from);
						$("#eduTill" + eduId).val(educationList[i].to);

						// Event handlers for delete button
						$("#eduDelete" + eduId).click(function (e) {
							e.preventDefault();
							e.stopPropagation();
							var eduButId = $(this).attr('id');
							eduButId = eduButId.replace("eduDelete", "");

							$.ajax({
								url: url + "/education/" + eduButId,
								type: "DELETE",
								success: function () {
									$("#educationFormId" + eduButId).remove();
								}
							});
						});

						// Event handlers for update button
						$("#eduUpdate" + eduId).click(function (e) {

							e.preventDefault();
							e.stopPropagation();
							var eduButId = $(this).attr('id');
							eduButId = eduButId.replace("eduUpdate", "");
                            $("#eduUpdate" + eduButId).button('loading');
							$.ajax({
								url: url + "/education/" + eduButId,
								type: "POST",
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								data: JSON.stringify({
									schoolName: $("#school" + eduButId).val(),
									degree: $("#degree" + eduButId).val(),
									field: $("#field" + eduButId).val(),
									from: $("#eduFrom" + eduButId).val(),
									to: $("#eduTill" + eduButId).val()
								}),
								success: function () {
                                    $("#eduUpdate" + eduButId).button('reset');
									$("#successMessage").text("Education is Updated!");
									$("#successMessageModalAnchor").click();
								}
							});
						});

					}
				}


				// Skill Section
				if("undefined" != typeof object.jobseeker.skillList) {
					var skillList = object.jobseeker.skillList.skill;
					for (i = 0; skillList.length > i; i++) {
						var skillId = skillList[i].skillId;
						thisForm = formSkill.replace(/SkillID/g, skillId);
						if ($("#skillFormId" + skillId).length == 0) {
							$("#skill").append(thisForm);
						}

						$("#skill" + skillId).val(skillList[i].skill);
						$("#yearsOfExp" + skillId).val(skillList[i].numberOfYears);


						// Event handlers for delete button
						$("#skillDelete" + skillId).click(function (e) {
							e.preventDefault();
							e.stopPropagation();
							var skillButId = $(this).attr('id');
							skillButId = skillButId.replace("skillDelete", "");

							$.ajax({
								url: url + "/skill/" + skillButId,
								type: "DELETE",
								success: function () {
									$("#skillFormId" + skillButId).remove();
								}
							});
						});

						// Event handlers for update button
						$("#skillUpdate" + skillId).click(function (e) {
							e.preventDefault();
							e.stopPropagation();
							var skillButId = $(this).attr('id');
							skillButId = skillButId.replace("skillUpdate", "");
                            $("#skillUpdate" + skillButId).button('loading');
							$.ajax({
								url: url + "/skill/" + skillButId,
								type: "POST",
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								data: JSON.stringify({
									skill: $("#skill" + skillButId).val(),
									numberOfYears: $("#yearsOfExp" + skillButId).val()
								}),
								success: function () {
                                    $("#skillUpdate" + skillButId).button('reset');
									$("#successMessage").text("Skill is Updated!");
									$("#successMessageModalAnchor").click();
								}
							});
						});
					}
				}

			});
		}

		// Applied Jobs tab
		if (currentTab == '3') {
			$("#appliedJobsDiv").empty();
			$.get(url + "/job/application", function (data, status) {
				var object = jQuery.parseJSON(JSON.stringify(data));
				var jobPosts = object.jobPosts;
				for (var i = 0; jobPosts.length > i; i++) {
					var jobPostId = jobPosts[i].jobPostId;
					var thisAnchor = anchorJobApplied.replace(/JobPostID/g, jobPostId);
					thisAnchor = thisAnchor.replace(/JobTitle/g, jobPosts[i].title);
					var thisModal = showAppliedJobsModal.replace(/JobPostID/g, jobPostId);
					thisAnchor = thisAnchor.replace(/ApplicationStatus/g, jobPosts[i].applicationStatus);

					if ($("#jobsApplied" + jobPostId).length == 0) {
						$("#3").append(thisModal);
						$("#showAppliedJobTitle" + jobPostId).val(jobPosts[i].title);
						$("#showAppliedJobDescription" + jobPostId).val(jobPosts[i].description);
						$("#showAppliedJobResponsibilities" + jobPostId).val(jobPosts[i].responsibilities);
						$("#showAppliedJobLocation" + jobPostId).val(jobPosts[i].location);
						$("#showAppliedJobSalary" + jobPostId).val(jobPosts[i].salary);
						$("#showAppliedJobCompanyName" + jobPostId).val(jobPosts[i].company.company.name);

						$("#showAppliedJobWithdraw" + jobPostId).click(function (e) {
							e.preventDefault();
							e.stopPropagation();
							var withdrawId = $(this).attr('id').replace("showAppliedJobWithdraw", "");
                            $("#showAppliedJobWithdraw" + withdrawId).button('loading');
							$.ajax({
								url: url + "/job/" + withdrawId + "/application",
								type: "DELETE",
								success: function () {
                                    $("#showAppliedJobWithdraw" + withdrawId).button('reset');
									// Close Modal
									$("#closeShowAppliedJob" + withdrawId).click();
									$("#showAppliedJobModal" + withdrawId).remove();
									// Remove the link
									$("#jobsApplied" + withdrawId).remove();
								},
								error: function (e) {
                                    $("#showAppliedJobWithdraw" + withdrawId).button('reset');
									// Close Modal
									$("#closeShowAppliedJob" + withdrawId).click();
								}
							});
						});

						if(jobPosts[i].applicationStatus == "OFFERED") {
                            $("#showAppliedJobAccept" + jobPostId).prop('disabled', false);
                            $("#showAppliedJobReject" + jobPostId).prop('disabled', false);

                            $("#showAppliedJobAccept" + jobPostId).click(function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                var acceptId = $(this).attr('id').replace("showAppliedJobAccept", "");
                                $("#showAppliedJobAccept" + acceptId).button('loading');
                                $.ajax({
                                    url: url + "/job/" + acceptId + "/application/OFFERACCEPTED",
                                    type: "POST",
                                    success: function () {
                                        $("#showAppliedJobAccept" + acceptId).button('reset');
                                    	$("#jobsApplied"+jobPostId+"Status").text("OFFERACCEPTED");
                                        // Close Modal
                                        $("#closeShowAppliedJob" + acceptId).click();
                                    },
                                    error: function (e) {
                                        $("#showAppliedJobAccept" + acceptId).button('reset');
                                        // Close Modal
                                        $("#closeShowAppliedJob" + withdrawId).click();
                                    }
                                });

                            });

                            $("#showAppliedJobReject" + jobPostId).click(function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                var rejectId = $(this).attr('id').replace("showAppliedJobReject", "");
                                $("#showAppliedJobReject" + rejectId).button('loading');
                                $.ajax({
                                    url: url + "/job/" + rejectId + "/application/OFFERREJECTED",
                                    type: "POST",
                                    success: function () {
                                        $("#showAppliedJobReject" + rejectId).button('reset');
                                        $("#jobsApplied"+jobPostId+"Status").text("OFFERREJECTED");
                                        // Close Modal
                                        $("#closeShowAppliedJob" + rejectId).click();
                                    },
                                    error: function (e) {
                                        $("#showAppliedJobReject" + rejectId).button('reset');
                                        // Close Modal
                                        $("#closeShowAppliedJob" + rejectId).click();
                                    }
                                });
                            });
						}
						$("#appliedJobsDiv").append(thisAnchor);
					}
				}
			});
		}

		// Favorites Jobs tab
		if (currentTab == '4') {
			$.get(url + "/job/interest", function (data, status) {
				var object = jQuery.parseJSON(JSON.stringify(data));
				var jobPosts = object.jobPosts.jobPost;
				for (var i = 0; jobPosts.length > i; i++) {
					var jobPostId = jobPosts[i].jobPostId;
					var thisAnchor = anchorJobInterested.replace(/JobPostID/g, jobPostId);
					thisAnchor = thisAnchor.replace(/JobTitle/g, jobPosts[i].title);
					var thisModal = showInterestedJobsModal.replace(/JobPostID/g, jobPostId);
					
					if ($("#jobsInterested" + jobPostId).length == 0) {
						$("#4").append(thisModal);
						$("#interestedJobsDiv").append(thisAnchor);
						$("#showInterestedJobResult" + jobPostId).hide();
					}
					$("#showInterestedJobTitle" + jobPostId).val(jobPosts[i].title);
					$("#showInterestedJobDescription" + jobPostId).val(jobPosts[i].description);
					$("#showInterestedJobResponsibilities" + jobPostId).val(jobPosts[i].responsibilities);
					$("#showInterestedJobLocation" + jobPostId).val(jobPosts[i].location);
					$("#showInterestedJobSalary" + jobPostId).val(jobPosts[i].salary);
					$("#showInterestedJobCompanyName" + jobPostId).val(jobPosts[i].company.company.name);

					$("#showInterestedJobWithdraw" + jobPostId).click(function (e) {
						e.preventDefault();
						e.stopPropagation();
						var withdrawId = $(this).attr('id').replace("showInterestedJobWithdraw", "");
						$.ajax({
							url: url + "/job/" + withdrawId + "/interest",
							type: "DELETE",
							success: function () {
								// Close Modal
								$("#closeShowInterestedJob" + withdrawId).click();
								$("#showInterestedJobModal" + withdrawId).remove();
								// Remove the link
								$("#jobsInterested" + withdrawId).remove();
							},
							error: function (e) {
								// Close Modal
								$("#closeShowInterestedJob" + withdrawId).click();
							}
						});

					});

					$("#showInterestedJobQuickApply" + jobPostId).click(function (e) {
						e.preventDefault();
						e.stopPropagation();
						jobPostId = $(this).attr('id').replace("showInterestedJobQuickApply", "");
                        $("#showInterestedJobQuickApply" + jobPostId).button('loading');
						$.ajax({
							url: url + "/job/" + jobPostId + "/application",
							type: "POST",
							contentType: "application/json; charset=utf-8",
							dataType: "json",
							success: function () {
                                $("#showInterestedJobQuickApply" + jobPostId).button('reset');
								// Close Modal
								$("#closeShowInterestedJob" + jobPostId).click();
							},
							error: function (e) {
                                $("#showInterestedJobQuickApply" + jobPostId).button('reset');
								var errorResponse = JSON.parse(e.responseText);
								// Show error
								$("#showInterestedJobResult" + jobPostId).show();
								$("#showInterestedJobResult" + jobPostId).append(errorResponse.BadRequest.msg);
							}
						});
					});

				}
			});
		}
	});

});
