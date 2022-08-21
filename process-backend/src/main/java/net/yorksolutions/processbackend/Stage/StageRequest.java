package net.yorksolutions.processbackend.Stage;

import net.yorksolutions.processbackend.Option.Option;
import net.yorksolutions.processbackend.Option.OptionRequest;

public class StageRequest {
    public Long id;
    public Long place;
    public String prompt;
    public String responseType;
    public String responseInput;
    public Iterable<OptionRequest> options;
}
