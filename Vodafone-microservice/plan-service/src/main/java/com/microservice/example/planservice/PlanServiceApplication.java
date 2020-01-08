package com.microservice.example.planservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.microservice.example.planservice.entity.Plan;
import com.microservice.example.planservice.repository.PlanRepository;

@SpringBootApplication
@EnableDiscoveryClient
public class PlanServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlanServiceApplication.class, args);
	}

	@Bean
	@LoadBalanced
	RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Bean
	CommandLineRunner init(PlanRepository planRepo) {
		return init -> {
			List<Plan> list = new ArrayList<>();
			list.add(new Plan(1, "IFY_60", 60, 60));
			list.add(new Plan(2, "IFY_10", 10, 40));
			list.add(new Plan(3, "IFY_30", 30, 60));

			planRepo.saveAll(list);

		};
	}
}
