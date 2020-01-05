package com.microservice.example.planservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Plan {

	@Id
	@Column(name = "plan_id", nullable = false)
	Integer planId;

	@Column(name = "plan_name", nullable = false, length = 50)
	String planName;

	@Column(name = "national_rate", nullable = false)
	Integer nationalRate;

	@Column(name = "local_rate", nullable = false)
	Integer localRate;

	public Plan() {
		super();
	}

	public Integer getPlanId() {
		return planId;
	}

	public void setPlanId(Integer planId) {
		this.planId = planId;
	}

	public String getPlanName() {
		return planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public Integer getNationalRate() {
		return nationalRate;
	}

	public void setNationalRate(Integer nationalRate) {
		this.nationalRate = nationalRate;
	}

	public Integer getLocalRate() {
		return localRate;
	}

	public void setLocalRate(Integer localRate) {
		this.localRate = localRate;
	}

	public Plan(Integer planId, String planName, Integer nationalRate, Integer localRate) {
		super();
		this.planId = planId;
		this.planName = planName;
		this.nationalRate = nationalRate;
		this.localRate = localRate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((localRate == null) ? 0 : localRate.hashCode());
		result = prime * result + ((nationalRate == null) ? 0 : nationalRate.hashCode());
		result = prime * result + ((planId == null) ? 0 : planId.hashCode());
		result = prime * result + ((planName == null) ? 0 : planName.hashCode());
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
		Plan other = (Plan) obj;
		if (localRate == null) {
			if (other.localRate != null)
				return false;
		} else if (!localRate.equals(other.localRate))
			return false;
		if (nationalRate == null) {
			if (other.nationalRate != null)
				return false;
		} else if (!nationalRate.equals(other.nationalRate))
			return false;
		if (planId == null) {
			if (other.planId != null)
				return false;
		} else if (!planId.equals(other.planId))
			return false;
		if (planName == null) {
			if (other.planName != null)
				return false;
		} else if (!planName.equals(other.planName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Plan [planId=" + planId + ", planName=" + planName + ", nationalRate=" + nationalRate + ", localRate="
				+ localRate + "]";
	}

}
