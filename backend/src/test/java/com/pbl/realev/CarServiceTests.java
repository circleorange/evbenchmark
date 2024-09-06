package com.pbl.realev;

import com.pbl.realev.dto.EvRequest;
import com.pbl.realev.model.EvEntity;
import com.pbl.realev.repository.EvRepository;
import com.pbl.realev.service.EvService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class CarServiceTests {

  @Mock
  private EvRepository repository;

  @InjectMocks
  private EvService services;

  @BeforeEach
  void setup() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void deleteAllCars() {
    services.deleteAllEVs();

    verify(repository, times(1))
        .deleteAll();
  }

  @Test
  void deleteCar() {
    services.deleteEV(1L);

    verify(repository, times(1))
        .deleteById(1L);
  }

  @Test
  void getAllCars() {
    EvEntity firstCar = new EvEntity();
    firstCar.id = 1L;
    firstCar.make = "Tesla";

    EvEntity secondCar = new EvEntity();
    secondCar.id = 2L;
    secondCar.make = "Nissan";

    List<EvEntity> listOfCars = List.of(firstCar, secondCar);

    when(repository.findAll())
        .thenReturn(listOfCars);

    List<EvEntity> result = services.getAllEV();

    assertEquals(2, result.size());
    assertEquals("Tesla", result.get(0).make);
    assertEquals("Nissan", result.get(1).make);

    verify(repository, times(1))
        .findAll();
  }

  @Test
  void getCarByID() {
    EvEntity car = new EvEntity();
    car.id    = 1L;
    car.make  = "Tesla";
    car.model = "Model 3";

    when(repository.findById(1L))
        .thenReturn(Optional.of(car));

    Optional<EvEntity> result = services.getEvByID(1L);

    assertTrue(result.isPresent());
    assertEquals("Tesla", result.get().make);

    verify(repository, times(1))
        .findById(1L);
  }

  @Test
  void createEV() {
    EvRequest createCarRequest = new EvRequest();
    createCarRequest.make = "Tesla";
    createCarRequest.model = "Model 3";
    createCarRequest.year = 2021;
    createCarRequest.range = 500;
    createCarRequest.minPrice = 25000;
    createCarRequest.maxPrice = 30000;

    EvEntity savedEV = new EvEntity();
    savedEV.id = 1L;
    savedEV.make = createCarRequest.make;
    savedEV.model = createCarRequest.model;
    savedEV.year = createCarRequest.year;
    savedEV.range = createCarRequest.range;
    savedEV.minPrice = createCarRequest.minPrice;
    savedEV.maxPrice = createCarRequest.maxPrice;

    // Repository behaviour
    when(repository.save(any(EvEntity.class)))
        .thenReturn(savedEV);

    EvEntity result = services.createEV(createCarRequest);

    assertNotNull(result);
    assertEquals("Tesla", result.make);
    assertEquals("Model 3", result.model);
    assertEquals(2021, result.year);
    assertEquals(500, result.range);
    assertEquals(25000, result.minPrice);
    assertEquals(30000, result.maxPrice);

    verify(repository, times(1))
        .save(any(EvEntity.class));
  }

  @Test
  void updateEV() {
    EvEntity existingEV = new EvEntity();
    existingEV.id     = 1L;
    existingEV.make   = "Tesla";
    existingEV.model  = "Model 3";
    existingEV.year   = 2021;
    existingEV.range  = 500;
    existingEV.minPrice = 25000;
    existingEV.maxPrice = 30000;

    EvRequest carUpdateRequest = new EvRequest();
    carUpdateRequest.make   = "Tesla";
    carUpdateRequest.model  = "Model 3";
    carUpdateRequest.year   = 2022;
    carUpdateRequest.range  = 450;
    carUpdateRequest.minPrice = 25500;
    carUpdateRequest.maxPrice = 32000;

    // Repository behaviour
    when(repository.findById(1L))
        .thenReturn(Optional.of(existingEV));
    when(repository.save(any(EvEntity.class)))
        .thenReturn(existingEV);

    Optional<EvEntity> optionalResult = services.updateEV(1L, carUpdateRequest);

    assertTrue(optionalResult.isPresent());
    EvEntity result = optionalResult.get();
    assertEquals("Tesla", result.make);
    assertEquals("Model 3", result.model);
    assertEquals(2022, result.year);
    assertEquals(450, result.range);
    assertEquals(25500, result.minPrice);
    assertEquals(32000, result.maxPrice);

    verify(repository, times(1))
        .findById(1L);
    verify(repository, times(1))
        .save(any(EvEntity.class));
  }
}
