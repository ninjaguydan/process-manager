package net.yorksolutions.processbackend.Process;

import net.yorksolutions.processbackend.Stage.StageRequest;

public class ProcessRequest {
    public Long id;
    public String title;
    public String directions;
    public Boolean isCompleted;
    public Iterable<StageRequest> stages;
    public Iterable<StageRequest> cleanUp;
}
