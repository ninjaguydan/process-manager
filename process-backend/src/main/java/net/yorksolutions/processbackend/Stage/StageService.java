package net.yorksolutions.processbackend.Stage;

import net.yorksolutions.processbackend.Process.Process;
import net.yorksolutions.processbackend.Process.ProcessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static net.yorksolutions.processbackend.Helpers.emptyCheck;

@Service
public class StageService {

    StageRepository repository;
    ProcessRepository processRepository;
    @Autowired
    public StageService(StageRepository stageRepository, ProcessRepository processRepository){
        this.repository = stageRepository;
        this.processRepository = processRepository;

    }
    public Iterable<Stage> GET_ALL_STAGES(){
        return repository.findAll();
    }
    public void CREATE_STAGE(StageRequest requestBody){
        Process process = emptyCheck(processRepository.findById(requestBody.processId));
        var stage = new Stage(process, requestBody.prompt, requestBody.responseType);
        repository.save(stage);
    }
    public void EDIT_STAGE(StageRequest requestBody){
        Stage stage = emptyCheck(repository.findById(requestBody.id));
        stage.prompt = requestBody.prompt;
        stage.responseType = requestBody.responseType;
        stage.responseInput = requestBody.responseInput;
        repository.save(stage);
    }
    public void DELETE_STAGE(Long id){
        repository.deleteById(id);
    }
}
