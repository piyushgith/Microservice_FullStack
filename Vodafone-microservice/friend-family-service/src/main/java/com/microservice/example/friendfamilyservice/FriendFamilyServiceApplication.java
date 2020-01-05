package com.microservice.example.friendfamilyservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FriendFamilyServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FriendFamilyServiceApplication.class, args);
	}

}
