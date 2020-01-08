package com.microservice.example.calldetailsservice.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "calldetails")
public class CallDetails {

	@Id
	@GeneratedValue
	long id;

	@Column(nullable = false)
	long calledBy;

	@Column(nullable = false)
	long calledTo;

	@Column(nullable = false)
	LocalDate calledOn;

	@Column(nullable = false)
	int duration;

	public CallDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getCalledBy() {
		return calledBy;
	}

	public void setCalledBy(long calledBy) {
		this.calledBy = calledBy;
	}

	public long getCalledTo() {
		return calledTo;
	}

	public void setCalledTo(long calledTo) {
		this.calledTo = calledTo;
	}

	public LocalDate getCalledOn() {
		return calledOn;
	}

	public void setCalledOn(LocalDate calledOn) {
		this.calledOn = calledOn;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public CallDetails(long id, long calledBy, long calledTo, LocalDate calledOn, int duration) {
		super();
		this.id = id;
		this.calledBy = calledBy;
		this.calledTo = calledTo;
		this.calledOn = calledOn;
		this.duration = duration;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (calledBy ^ (calledBy >>> 32));
		result = prime * result + duration;
		result = prime * result + (int) (id ^ (id >>> 32));
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
		CallDetails other = (CallDetails) obj;
		if (calledBy != other.calledBy)
			return false;
		if (duration != other.duration)
			return false;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "CallDetails [id=" + id + ", calledBy=" + calledBy + ", calledTo=" + calledTo + ", calledOn=" + calledOn
				+ ", duration=" + duration + "]";
	}

}
