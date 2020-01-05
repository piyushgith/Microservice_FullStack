package com.microservice.example.friendfamilyservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "friendfamily")
public class FriendFamily {

	@Id
	@GeneratedValue
	int id;

	@Column(name = "phone_no")
	long phoneNo;

	@Column(name = "friend_and_family")
	long friendAndFamily;

	public FriendFamily() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public long getFriendAndFamily() {
		return friendAndFamily;
	}

	public void setFriendAndFamily(long friendAndFamily) {
		this.friendAndFamily = friendAndFamily;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (friendAndFamily ^ (friendAndFamily >>> 32));
		result = prime * result + id;
		result = prime * result + (int) (phoneNo ^ (phoneNo >>> 32));
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
		FriendFamily other = (FriendFamily) obj;
		if (friendAndFamily != other.friendAndFamily)
			return false;
		if (id != other.id)
			return false;
		if (phoneNo != other.phoneNo)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "FriendFamily [id=" + id + ", phoneNo=" + phoneNo + ", friendAndFamily=" + friendAndFamily + "]";
	}

}
