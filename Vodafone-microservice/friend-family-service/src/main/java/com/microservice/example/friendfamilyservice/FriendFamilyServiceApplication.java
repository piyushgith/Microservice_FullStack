package com.microservice.example.friendfamilyservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.microservice.example.friendfamilyservice.dto.FriendFamilyDTO;
import com.microservice.example.friendfamilyservice.entity.FriendFamily;
import com.microservice.example.friendfamilyservice.repository.FriendFamilyRepository;

@SpringBootApplication
@EnableDiscoveryClient
public class FriendFamilyServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FriendFamilyServiceApplication.class, args);
	}

	@Bean
	@LoadBalanced
	RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Bean
	CommandLineRunner init(FriendFamilyRepository friendFamiliyRepo) {
		return init -> {
			List<FriendFamily> list = new ArrayList<>();
			list.add(new FriendFamily(1, 9009009001L, 9009009002L));
			list.add(new FriendFamily(2, 9009009002L, 9009009003L));
			list.add(new FriendFamily(3, 9009009003L, 9009009005L));
			list.add(new FriendFamily(4, 9009009004L, 9009009001L));
			friendFamiliyRepo.saveAll(list);

		};
	}
}
