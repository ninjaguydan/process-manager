package net.yorksolutions.processbackend.Process;

import net.yorksolutions.processbackend.Stage.Stage;
import net.yorksolutions.processbackend.Stage.StageRequest;
import net.yorksolutions.processbackend.Stage.StageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static net.yorksolutions.processbackend.Helpers.emptyCheck;
import static net.yorksolutions.processbackend.Helpers.nullCheck;

@Service
public class ProcessService {

    ProcessRepository repository;
    StageService stageService;

    @Autowired
    public ProcessService(ProcessRepository repository, StageService stageService) {
        this.repository = repository;
        this.stageService = stageService;
    }

    public Iterable<Process> GET_ALL_PROCESSES() {
        return repository.findAll();
    }

    public void CREATE_PROCESS(ProcessRequest requestBody) {
        nullCheck(requestBody.title);
        var process = new Process(requestBody.title, requestBody.directions);
        repository.save(process);
        for (StageRequest stage : requestBody.stages) {
            Stage newStage = stageService.CREATE_STAGE(stage);
            process.stages.add(newStage);
            repository.save(process);
        }
    }

    public void EDIT_PROCESS(ProcessRequest requestBody) {
        Process process = emptyCheck(repository.findById(requestBody.id));
        process.title = requestBody.title;
        process.directions = requestBody.directions;
        process.isCompleted = requestBody.isCompleted;
        repository.save(process);
    }

    public void DELETE_PROCESS(Long id) {
        repository.deleteById(id);
    }
}
