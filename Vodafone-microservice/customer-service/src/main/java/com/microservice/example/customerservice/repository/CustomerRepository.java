package com.microservice.example.customerservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.example.customerservice.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	Customer findByPhoneNo(Long phoneNo);
}
