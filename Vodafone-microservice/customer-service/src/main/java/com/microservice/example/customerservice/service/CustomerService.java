package com.microservice.example.customerservice.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.example.customerservice.dto.CustomerDTO;
import com.microservice.example.customerservice.dto.LoginDTO;
import com.microservice.example.customerservice.entity.Customer;
import com.microservice.example.customerservice.repository.CustomerRepository;

@Service
public class CustomerService {

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	CustomerRepository custRepo;

	public void createCustomer(CustomerDTO custDTO) {
		logger.info("Creation request for customer {}", custDTO);
		Customer cust = custDTO.createEntity();
		custRepo.save(cust);
	}

	// Login

	public boolean login(LoginDTO loginDTO) {
		logger.info("Login request for customer {} with password {}", loginDTO.getPhoneNo(), loginDTO.getPassword());
		Customer cust = custRepo.findByPhoneNo(loginDTO.getPhoneNo());
		if (cust != null && cust.getPassword().equals(loginDTO.getPassword())) {
			return true;
		}
		return false;
	}

	// Fetches full profile of a specific customer

	public CustomerDTO getCustomerProfile(Long phoneNo) {

		logger.info("Profile request for customer {}", phoneNo);
		Customer cust = custRepo.findByPhoneNo(phoneNo);
		CustomerDTO custDTO = CustomerDTO.valueOf(cust);

		logger.info("Profile for customer : {}", custDTO);
		return custDTO;
	}

}
