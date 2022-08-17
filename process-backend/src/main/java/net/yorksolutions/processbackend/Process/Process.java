package net.yorksolutions.processbackend.Process;

import com.fasterxml.jackson.annotation.JsonProperty;
import net.yorksolutions.processbackend.Stage.Stage;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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
    @JsonProperty
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    public List<Stage> stages = new ArrayList<>();

    public Process(){}
    public Process(String title, String directions){
        this.title = title;
        this.directions = directions;
        this.isCompleted = false;
    }
}
