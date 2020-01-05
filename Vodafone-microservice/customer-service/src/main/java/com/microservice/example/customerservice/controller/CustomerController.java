package com.microservice.example.customerservice.controller;

import java.util.Collections;
import java.util.Enumeration;
import java.util.List;
import java.util.concurrent.ExecutionException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.microservice.example.customerservice.dto.CustomerDTO;
import com.microservice.example.customerservice.dto.LoginDTO;
import com.microservice.example.customerservice.dto.PlanDTO;
import com.microservice.example.customerservice.service.CustomerService;

@RestController
public class CustomerController {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private CustomerService custService;

	@Autowired
	private RestTemplate template;
	
	@GetMapping("/hi")
	public String sayHello() {
		return "Hi There from Customer-service !!";
	}

	// Create a new customer
	@RequestMapping(value = "/customers", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void createCustomer(@RequestBody CustomerDTO custDTO) {
		logger.info("Creation request for customer {}", custDTO);
		custService.createCustomer(custDTO);
	}

	// Login
	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public boolean login(@RequestBody LoginDTO loginDTO) {
		logger.info("Login request for customer {} with password {}", loginDTO.getPhoneNo(), loginDTO.getPassword());
		return custService.login(loginDTO);
	}

	// Fetches full profile of a specific customer
	@RequestMapping(value = "/customers/{phoneNo}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public CustomerDTO getCustomerProfile(@RequestHeader HttpHeaders headers, HttpServletRequest request,
			@PathVariable Long phoneNo) throws InterruptedException, ExecutionException {
		System.out.println("REQUEST IS =======" + request);
		System.out.println("HEADERS =====" + headers);
		System.out.println("Key Set =====" + headers.keySet());
		System.out.println("User Agent " + headers.getFirst("user-agent"));
		System.out.println("Authorization " + headers.getFirst("Authorization"));
		Enumeration<String> en = request.getHeaderNames();
		List<String> l = Collections.list(en);
		System.out.println("HEADERS ARE =======" + l);
		System.out.println("Authorization IS  =======" + request.getHeader("Authorization"));
		logger.info("Profile request for customer {}", phoneNo);

		CustomerDTO custDTO = custService.getCustomerProfile(phoneNo);
		HttpEntity<String> request2 = new HttpEntity<String>(headers);
		ResponseEntity<PlanDTO> planDTO = template.exchange(
				"http://PlanMS/plans/" + custDTO.getCurrentPlan().getPlanId(), HttpMethod.GET, request2, PlanDTO.class);

		@SuppressWarnings("unchecked")
		ResponseEntity<List> friendList = template.exchange("http://FriendFamilyMS/customers/" + phoneNo + "/friends",
				HttpMethod.GET, request2, List.class);
		custDTO.setCurrentPlan(planDTO.getBody());
		custDTO.setFriendAndFamily(friendList.getBody());

		return custDTO;

	}
}
