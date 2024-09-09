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
    services.getAllEV();
  }

  @GetMapping("/cars/{ID}")
  public void getCarByID(Long ID) {
  }

  @PostMapping("/create")
  public ResponseEntity<EvEntity> createCar(@ModelAttribute EvRequest evRequest) {
    var createdEV = services.createEV(evRequest);

    return ResponseEntity.ok(createdEV);
  }

  @PutMapping("/update/{ID}")
  public ResponseEntity<EvEntity> updateCar(
      @PathVariable Long ID,
      @ModelAttribute EvRequest updateRequest
  ) {
    Optional<EvEntity> updatedEV = services.updateEV(ID, updateRequest);

    return updatedEV
        .map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @DeleteMapping("delete/{ID}")
  public ResponseEntity<Void> deleteeCar(
      @PathVariable Long ID
  ) {
    services.deleteEV(ID);

    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/delete")
  public ResponseEntity<Void> deleteAllCars() {
    services.deleteAllEVs();

    return ResponseEntity.noContent().build();
  }
}
