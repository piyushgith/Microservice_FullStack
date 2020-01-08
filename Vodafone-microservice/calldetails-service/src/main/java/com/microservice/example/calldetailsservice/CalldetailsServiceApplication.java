package com.microservice.example.calldetailsservice;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.microservice.example.calldetailsservice.entity.CallDetails;
import com.microservice.example.calldetailsservice.repository.CallDetailsRepository;

@SpringBootApplication
@EnableDiscoveryClient
public class CalldetailsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CalldetailsServiceApplication.class, args);
	}

	@Bean
	@LoadBalanced
	RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Bean
	CommandLineRunner init(CallDetailsRepository callRepo) {
		return init -> {
			List<CallDetails> list = new ArrayList<>();
			list.add(new CallDetails(1, 9009009001L, 9009009004L, LocalDate.of(2020, 1, 6), 21));
			list.add(new CallDetails(2, 9009009001L, 9009009009L, LocalDate.of(2020, 1, 8), 10));
			list.add(new CallDetails(3, 9009009002L, 9009009010L, LocalDate.of(2020, 1, 1), 20));
			list.add(new CallDetails(4, 9009009002L, 9009009011L, LocalDate.of(2020, 1, 16), 50));
			list.add(new CallDetails(5, 9009009003L, 9009009002L, LocalDate.of(2020, 1, 4), 20));
			list.add(new CallDetails(6, 9009009003L, 9009009006L, LocalDate.of(2020, 1, 5), 45));
			list.add(new CallDetails(7, 9009009003L, 9009009008L, LocalDate.of(2020, 1, 10), 28));
			list.add(new CallDetails(8, 9009009002L, 9009009009L, LocalDate.of(2020, 1, 12), 22));

			list.forEach(x -> {
				callRepo.save(x);
			});
		};
	}

}
