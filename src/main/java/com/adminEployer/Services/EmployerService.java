package com.adminEployer.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

import com.adminEployer.Models.Employer;
import com.adminEployer.Repository.EmployerRepository;

@Service
public class EmployerService {
  @Autowired
  private EmployerRepository employerRepository;

  public List<Employer> findAll() {
    return employerRepository.findAll();
  }

  public Employer createUser(Employer employer) {
    return employerRepository.save(employer);
  }

  public Optional<Employer> findById(UUID id) {
    Optional<Employer> employer = employerRepository.findById(id);
    if (employer.isPresent()) {
      return employer;
    }
    return employer;
  }

  public Employer update(UUID id,Employer employer) {
    Optional<Employer> employerToUpdate = employerRepository.findById(id);
    
    if (employerToUpdate.isPresent()) {
      employer.setId(id);
      return employerRepository.save(employer);
    }
    return employer;
  }

  public Optional<Employer> delete(UUID id) {
    Optional<Employer> employer = employerRepository.findById(id);
    if (employer.isPresent()) {
      employerRepository.deleteById(id);
      return employer;
    }
    return employer;
  }
}
