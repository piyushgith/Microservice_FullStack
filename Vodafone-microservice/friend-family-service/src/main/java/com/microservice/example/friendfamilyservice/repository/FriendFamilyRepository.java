package com.microservice.example.friendfamilyservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.example.friendfamilyservice.entity.FriendFamily;

@Repository
public interface FriendFamilyRepository extends JpaRepository<FriendFamily, Integer> {
	List<FriendFamily> getByPhoneNo(Long phoneNo);
}
