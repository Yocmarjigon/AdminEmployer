package com.adminEployer.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adminEployer.Models.User;
import com.adminEployer.Repository.UserRepository;
import java.util.*;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public List<User> findAll() {
    return userRepository.findAll();
  }

  public User createUser(User user) {
    return userRepository.save(user);
  }

  public Optional<User> findById(UUID id) {
    Optional<User> user = userRepository.findById(id);
    if (user.isPresent()) {
      return user;
    }
    return user;
  }

  public User update(UUID id,User user) {
    Optional<User> userToUpdate = userRepository.findById(id);
    
    if (userToUpdate.isPresent()) {
      user.setId(id);
      return userRepository.save(user);
    }
    return user;
  }

  public Optional<User> delete(UUID id) {
    Optional<User> user = userRepository.findById(id);
    if (user.isPresent()) {
      userRepository.deleteById(id);
      return user;
    }
    return user;
  }
}
