package com.microservice.example.planservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.example.planservice.entity.Plan;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer> {
	List<Plan> findAll();

	Plan findByPlanId(Integer planId);
}
