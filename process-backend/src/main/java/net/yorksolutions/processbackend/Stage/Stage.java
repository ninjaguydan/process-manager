package net.yorksolutions.processbackend.Stage;
import com.fasterxml.jackson.annotation.JsonProperty;
import net.yorksolutions.processbackend.Process.Process;
import javax.persistence.*;

@Entity
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @JsonProperty
    public Long id;
    @JsonProperty
    @ManyToOne
    public Process process;
    @JsonProperty
    public String prompt;
    @JsonProperty
    public String responseType;
    @JsonProperty
    public String responseInput;

    public Stage(){}
    public Stage(Process process, String prompt, String responseType, String responseInput){
        this.process = process;
        this.prompt = prompt;
        this.responseType = responseType;
        this.responseInput = responseInput;
    }
}
