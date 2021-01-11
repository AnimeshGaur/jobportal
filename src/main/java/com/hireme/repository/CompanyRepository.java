package com.hireme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.Company;

@Repository("companyRepository")
public interface CompanyRepository extends JpaRepository<Company, Long> {

	Company getByUserId(long userId);

}