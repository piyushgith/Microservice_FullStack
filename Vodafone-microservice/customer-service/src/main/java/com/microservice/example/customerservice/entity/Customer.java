package com.microservice.example.customerservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {

	@Id
	@Column(name = "phone_no", nullable = false)
	private Long phoneNo;

	@Column(nullable = false, length = 50)
	private String name;

	@Column(nullable = false)
	private Integer age;

	@Column(nullable = false, length = 50)
	private String address;

	@Column(nullable = false, length = 50)
	private String password;

	@Column(nullable = false, length = 1)
	private char gender;

	@Column(name = "plan_id", nullable = false)
	private Integer planId;

	public Long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public Integer getPlanId() {
		return planId;
	}

	public void setPlanId(Integer planId) {
		this.planId = planId;
	}

	public Customer() {
		super();
	}

	public Customer(Long phoneNo, String name, Integer age, String address, String password, char gender,
			Integer planId) {
		super();
		this.phoneNo = phoneNo;
		this.name = name;
		this.age = age;
		this.address = address;
		this.password = password;
		this.gender = gender;
		this.planId = planId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((age == null) ? 0 : age.hashCode());
		result = prime * result + gender;
		result = prime * result + ((phoneNo == null) ? 0 : phoneNo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Customer other = (Customer) obj;
		if (age == null) {
			if (other.age != null)
				return false;
		} else if (!age.equals(other.age))
			return false;
		if (gender != other.gender)
			return false;
		if (phoneNo == null) {
			if (other.phoneNo != null)
				return false;
		} else if (!phoneNo.equals(other.phoneNo))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Customer [phoneNo=" + phoneNo + ", name=" + name + ", age=" + age + ", address=" + address
				+ ", password=" + password + ", gender=" + gender + ", planId=" + planId + "]";
	}

}
