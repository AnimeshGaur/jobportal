package com.hireme.dao;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.Company;

public interface CompanyDao {

	Company create(Company company) throws BusinessException;

	void delete(long companyId) throws BusinessException;

	Company update(Company company) throws BusinessException;

	Company get(long companyId) throws BusinessException;
	
	Company getByUserId(long userId) throws BusinessException;
}