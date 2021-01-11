package com.hireme.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hireme.dao.CompanyDao;
import com.hireme.exceptions.BusinessException;
import com.hireme.model.Company;
import com.hireme.repository.CompanyRepository;

@Component
public class CompanyDaoImpl implements CompanyDao {

	@Autowired
	private CompanyRepository companyRepository;

	@Override
	public Company create(Company company) {
		return companyRepository.save(company);
	}

	@Override
	public void delete(long companyId) throws BusinessException {
		if (companyRepository.exists(companyId)) {
			companyRepository.delete(companyId);
		}
		throw new BusinessException(404, "Company with id " + companyId + " not found.");
	}

	@Override
	public Company update(Company company) throws BusinessException {
		if (companyRepository.exists(company.getCompanyId())) {
			return companyRepository.save(company);
		}
		throw new BusinessException(404, "Company with id " + company.getCompanyId() + " not found.");
	}

	@Override
	public Company get(long companyId) throws BusinessException {
		Company company = companyRepository.getOne(companyId);
		if (company != null) {
			return company;
		}
		throw new BusinessException(404, "Company with id " + companyId + " not found.");
	}

	@Override
	public Company getByUserId(long userId) throws BusinessException {
		Company company = companyRepository.getByUserId(userId);
		if (company != null) {
			return company;
		}
		throw new BusinessException(404, "Company with user id " + userId + " not found.");
	}
}