package com.pbl.realev.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class EvEntity {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  public long id;

  // General
  public String  make;
  public String  model;
  public Integer year;
  public Double  price;
  public String  imageUrl;

  // Performance
  public Integer range;
  public Double  acceleration;
  public Integer topSpeed;
  public Integer power;
  public Integer torque;
  public enum DriveType {FWD, RWD, AWD}
  public DriveType drive;

  // Battery
  public Integer batteryCapacity;
  public enum BatteryType {LITHIUM_ION, UNKNOWN}
  public BatteryType battery;

  // Charging
  public Integer chargeTime;
  public Integer chargeSpeed;
  public Integer chargePower;
  public enum ChargePort {CCS, TESLA, UNKNOWN}
  public ChargePort chargePort;

}
