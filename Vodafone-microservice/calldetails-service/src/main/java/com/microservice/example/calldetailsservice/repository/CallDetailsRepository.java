package com.microservice.example.calldetailsservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.example.calldetailsservice.entity.CallDetails;

@Repository
public interface CallDetailsRepository extends JpaRepository<CallDetails, Long> {
	List<CallDetails> findByCalledBy(long calledBy);
}
