package com.microservice.example.customerservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.microservice.example.customerservice.entity.Customer;
import com.microservice.example.customerservice.repository.CustomerRepository;

@SpringBootApplication
@EnableEurekaClient
//@EnableCircuitBreaker
//@EnableFeignClients
//@EnableResourceServer
public class CustomerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerServiceApplication.class, args);
	}

	@Bean
	@LoadBalanced
	RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Bean
	CommandLineRunner init(CustomerRepository custRepo) {
		return init -> {
			List<Customer> list = new ArrayList<>();
			list.add(new Customer(9009009001L, "Piyush", 25, "Chicago", "ad@123", 'M', 1));
			list.add(new Customer(9009009002L, "Steve", 28, "Texas", "12345", 'M', 2));
			list.add(new Customer(9009009003L, "Mark", 30, "Infy Chicago", "apple@123", 'M', 3));
			custRepo.saveAll(list);
		};
	}
}
