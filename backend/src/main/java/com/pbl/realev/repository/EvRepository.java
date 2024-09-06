package com.pbl.realev.repository;

import com.pbl.realev.model.EvEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvRepository
    extends JpaRepository<EvEntity, Long> {
  // Custom queries can be added here, most inherited from JPA
}
