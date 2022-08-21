package net.yorksolutions.processbackend.Stage;
import com.fasterxml.jackson.annotation.JsonProperty;
import net.yorksolutions.processbackend.Option.Option;
import net.yorksolutions.processbackend.Process.Process;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @JsonProperty
    public Long id;
    @JsonProperty
    public Long place;
    @JsonProperty
    public String prompt;
    @JsonProperty
    public String responseType;
    @JsonProperty
    public String responseInput;
    @JsonProperty
    @OneToMany(cascade=CascadeType.ALL, orphanRemoval = true)
    public List<Option> options = new ArrayList<>();

    public Stage(){}
    public Stage(String prompt, String responseType, Long place){
        this.prompt = prompt;
        this.place = place;
        this.responseType = responseType;
        this.responseInput = "";
    }
}
