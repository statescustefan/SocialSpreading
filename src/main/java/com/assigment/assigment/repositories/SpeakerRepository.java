package com.assigment.assigment.repositories;

import com.assigment.assigment.models.Speakers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpeakerRepository extends JpaRepository<Speakers, Long> {
}
