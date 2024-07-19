package com.adminEployer.Models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;
import io.micrometer.common.lang.NonNull;
import jakarta.persistence.*;

@Entity(name = "employers")  
public class Employer {
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
  @NotBlank(message = "IDentity cannot be blank")
  private String IDentity;

  @NonNull
  @NotBlank(message = "NumberPhone cannot be blank")
  private String numberPhone;


  public UUID getId() {
    return this.id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getIDentity() {
    return this.IDentity;
  }

  public void setIDentity(String IDentity) {
    this.IDentity = IDentity;
  }

  public String getNumberPhone() {
    return this.numberPhone;
  }

  public void setNumberPhone(String numberPhone) {
    this.numberPhone = numberPhone;
  }

  @Override
  public String toString() {
    return "{" +
      " id='" + getId() + "'" +
      ", name='" + getName() + "'" +
      ", email='" + getEmail() + "'" +
      ", IDentity='" + getIDentity() + "'" +
      ", numberPhone='" + getNumberPhone() + "'" +
      "}";
  }
  
}
