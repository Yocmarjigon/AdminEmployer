package com.adminEployer.Models;

import java.util.UUID;
import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @NonNull
  @NotBlank(message = "Name cannot be blank")
  private String name;

  @NonNull
  @NotBlank(message = "Email cannot be blank")
  private String email;

  @NonNull
  @NotBlank(message = "Password cannot be blank")
  private String password;

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }
  @Override
  public String toString() {
    // TODO Auto-generated method stub
    return  "name: " +  this.name + this.email + this.password;
  }
  
}
