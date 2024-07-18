package com.adminEployer.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adminEployer.Models.Employer;
import com.adminEployer.Services.EmployerService;


import java.util.*;

@RestController
@RequestMapping("/employers")
public class EmployerController {

  // Injections
  @Autowired
  private EmployerService employerService;


  // Methods GET endpoint /users
  @GetMapping
  public ResponseEntity<List<Employer>> findAll() {
    try {
      return new ResponseEntity<>(employerService.findAll(), HttpStatus.OK);
    } catch (RuntimeException e) {
      System.out.println(e);
    }
    return null;
  }


  // Methods POST endpoint /users
  @PostMapping
  public ResponseEntity<Employer> post(@RequestBody Employer body) {
    try {
      System.out.println(body.getEmail());
      return new ResponseEntity<>(employerService.createUser(body), HttpStatus.OK);

    } catch (Exception e) {
      System.out.println(e);

    }
    return null;
  }
  
}
