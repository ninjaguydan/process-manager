package net.yorksolutions.processbackend.Process;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Process {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @JsonProperty
    public Long id;
    @JsonProperty
    public String title;
    @JsonProperty
    public String directions;
    @JsonProperty
    public Boolean isCompleted;

    public Process(){}
    public Process(String title, String directions){
        this.title = title;
        this.directions = directions;
        this.isCompleted = false;
    }
}
