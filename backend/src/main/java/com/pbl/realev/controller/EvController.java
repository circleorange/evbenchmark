package com.pbl.realev.controller;

import com.pbl.realev.dto.EvRequest;
import com.pbl.realev.model.EvEntity;
import com.pbl.realev.service.EvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/admin/cars")
public class EvController {

  @Autowired
  private EvService services;

  @GetMapping("/cars")
  public void getAllCars() {

  }

  @GetMapping("/cars/{id}")
  public void getCarByID(Long ID) {

  }

  @PostMapping("/create")
  public ResponseEntity<EvEntity> createEV(@ModelAttribute EvRequest evRequest) {
    var createdEV = services.createEV(evRequest);

    return ResponseEntity.ok(createdEV);
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<EvEntity> updateEV(
      @PathVariable Long ID,
      @ModelAttribute EvRequest updateRequest
  ) {
    Optional<EvEntity> updatedEV = services.updateEV(ID, updateRequest);

    return updatedEV
        .map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @DeleteMapping("delete/{id}")
  public ResponseEntity<Void> deleteEV(
      @PathVariable Long ID
  ) {
    services.deleteEV(ID);

    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/delete")
  public ResponseEntity<Void> deleteAllEVs() {
    services.deleteAllEVs();

    return ResponseEntity.noContent().build();
  }
}
