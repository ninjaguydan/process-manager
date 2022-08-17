package net.yorksolutions.processbackend.Option;


import com.fasterxml.jackson.annotation.JsonProperty;
import net.yorksolutions.processbackend.Stage.Stage;

import javax.persistence.*;

@Entity
public class Option {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @JsonProperty
    public Long id;
    @JsonProperty
    public String content;
    @ManyToOne
    public Stage stage;

    public Option(){}
    public Option(String content){
        this.content = content;
    }
}
