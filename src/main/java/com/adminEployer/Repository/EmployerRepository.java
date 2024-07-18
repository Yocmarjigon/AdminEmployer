package com.adminEployer.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adminEployer.Models.Employer;

public interface EmployerRepository  extends JpaRepository<Employer, UUID> {

} 
