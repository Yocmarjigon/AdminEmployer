package com.adminEployer.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.adminEployer.Models.User;
import com.adminEployer.Services.UserService;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.web.bind.annotation.*;

// For accesible to endpoint users: http://localhost:8080/users
@RestController
@RequestMapping("/users")
public class UserController {

  // Injections
  @Autowired
  private UserService userService;


  // Methods GET endpoint /users
  @GetMapping
  public ResponseEntity<List<User>> findAll() {
    try {

      return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);

    } catch (RuntimeException e) {

      System.out.println(e);
    }
    return null;
  }

  // Methods POST endpoint /users
  @PostMapping()
  public ResponseEntity<User> post(@RequestBody User body) {
    try {

      User user = userService.createUser(body);
      return new ResponseEntity<>(user, HttpStatus.OK);
    } catch (Exception e) {

      System.out.println(e);

    }
    return null;
  }

  // Methods GET endpoint /users/{id}
  @GetMapping("/{id}")
  public ResponseEntity<User> findById(@PathVariable("id") String id) {
    Optional<User> user = userService.findById(UUID.fromString(id));

    if (user.isPresent()) {
      return new ResponseEntity<>(user.get(), HttpStatus.OK);
    }

    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
  }

  // Methods PUT endpoint /users/{id}
  @DeleteMapping("/{id}")
  public ResponseEntity<User> delete(@PathVariable("id") String id) {
    Optional<User> user = userService.delete(UUID.fromString(id));
    if (user.isPresent()) {
      return new ResponseEntity<>(user.get(), HttpStatus.OK);
    }

    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
  }

}