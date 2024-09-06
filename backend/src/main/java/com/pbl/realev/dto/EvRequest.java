package com.pbl.realev.dto;

import com.pbl.realev.model.EvEntity;

public class EvRequest {

  // General
  public String   make;
  public String   model;
  public Integer  year;
  public Integer   minPrice;
  public Integer   maxPrice;
  public String   imageUrl;

  // Performance
  public Integer range;
  public Double  acceleration;
  public Integer topSpeed;
  public Integer power;
  public Integer torque;
  public EvEntity.DriveType drive;

  // Battery
  public Integer batteryCapacity;
  public EvEntity.BatteryType battery;

  // Charging
  public Integer chargeTime;
  public Integer chargeSpeed;
  public Integer chargePower;
  public EvEntity.ChargePort chargePort;
}
