package com.pbl.realev.service;

import com.pbl.realev.dto.EvRequest;
import com.pbl.realev.model.EvEntity;
import com.pbl.realev.repository.EvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class EvService {

  private EvRepository repo;

  public List<EvEntity> getManyEVsByID(List<Long> IDs) {
    return repo.findAllById(IDs);
  }

  public Optional<EvEntity> getEvByID(Long ID) {
      return repo.findById(ID);
  }

  public List<EvEntity> getAllEV() {
    // TODO: Confirm if same handling is needed as with getEvByID()
    return repo.findAll();
  }

  public EvEntity createEV(EvRequest evRequest) {
    var newEV   = new EvEntity();
    newEV.make  = evRequest.make;
    newEV.model = evRequest.model;
    newEV.year  = evRequest.year;
    newEV.range = evRequest.range;
    newEV.minPrice = evRequest.minPrice;
    newEV.maxPrice = evRequest.maxPrice;

    // String imageUrl = imgStorageService.storeImage(evRequest.imageFile);
    // newEV.imageUrl = imageUrl;

    return repo.save(newEV);
  }

  public Optional<EvEntity> updateEV(Long ID, EvRequest evRequest) {
    Optional<EvEntity> foundEV = repo.findById(ID);
    if (foundEV.isEmpty()) {
      return Optional.empty();
    }
    EvEntity updatedEV;
    try {
      updatedEV = foundEV.get();
    } catch (NoSuchElementException e) {
      System.out.println("Failed to retrieve optional result of existing EV");
      return Optional.empty();
    }
    updatedEV.make  = evRequest.make;
    updatedEV.model = evRequest.model;
    updatedEV.year  = evRequest.year;
    updatedEV.range = evRequest.range;
    updatedEV.minPrice = evRequest.minPrice;
    updatedEV.maxPrice = evRequest.maxPrice;

    return Optional.of(repo.save(updatedEV));
  }

  public void deleteEV(Long ID) {
    repo.deleteById(ID);
  }

  public void deleteAllEVs() {
    repo.deleteAll();
  }
}
