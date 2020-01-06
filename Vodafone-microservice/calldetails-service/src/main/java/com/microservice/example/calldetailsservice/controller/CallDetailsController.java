package com.microservice.example.calldetailsservice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.example.calldetailsservice.dto.CallDetailsDTO;
import com.microservice.example.calldetailsservice.service.CallDetailsService;

@RestController
@RequestMapping("calldetail-service")
public class CallDetailsController {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	CallDetailsService callDetailsService;
	
	@GetMapping("/hi")
	public String sayHello() {
		return "Hi There from Call-Detail service !!";
	}

	// Fetches call details of a specific customer
	@RequestMapping(value = "/customers/{phoneNo}/calldetails", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<CallDetailsDTO> getCustomerCallDetails(@PathVariable long phoneNo) {

		logger.info("Calldetails request for customer {}", phoneNo);

		return callDetailsService.getCustomerCallDetails(phoneNo);
	}

}
