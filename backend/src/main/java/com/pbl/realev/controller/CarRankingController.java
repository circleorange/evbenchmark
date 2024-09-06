package com.pbl.realev.controller;

import com.pbl.realev.model.EvEntity;
import com.pbl.realev.service.EvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarRankingController {

  @Autowired
  private EvService services;

  @GetMapping("/cars/ranking")
  public ResponseEntity<List<EvEntity>> getAllCars() {
    return ResponseEntity.ok(services.getAllEV());
  }
}
