package net.yorksolutions.processbackend.Stage;

import net.yorksolutions.processbackend.Option.Option;
import net.yorksolutions.processbackend.Option.OptionRequest;
import net.yorksolutions.processbackend.Option.OptionService;
import net.yorksolutions.processbackend.Process.Process;
import net.yorksolutions.processbackend.Process.ProcessRepository;
import org.apache.tomcat.jni.Proc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static net.yorksolutions.processbackend.Helpers.emptyCheck;
import static net.yorksolutions.processbackend.Helpers.nullCheck;

@Service
public class StageService {

    StageRepository repository;
    ProcessRepository processRepository;
    OptionService optionService;

    @Autowired
    public StageService(StageRepository stageRepository, OptionService optionService, ProcessRepository processRepository) {
        this.repository = stageRepository;
        this.optionService = optionService;
        this.processRepository = processRepository;
    }

    public Stage CREATE_STAGE(StageRequest stageRequest) {
        nullCheck(stageRequest.prompt);
        var stage = new Stage(stageRequest.prompt, stageRequest.responseType);
        repository.save(stage);
        if (stageRequest.responseType.equals("Multiple")) {
            for (OptionRequest option : stageRequest.options) {
                Option newOption = optionService.CREATE_OPTION(option.content);
                stage.options.add(newOption);
            }
        }
        return repository.save(stage);
    }

    public void EDIT_STAGE(StageRequest requestBody, Process process) {
        if (repository.existsById(requestBody.id)) {
            Stage stage = repository.findById(requestBody.id).get();
            stage.prompt = requestBody.prompt;
            stage.responseType = requestBody.responseType;
            stage.responseInput = requestBody.responseInput;
            if (requestBody.responseType.equals("Multiple")) {
                for (OptionRequest option : requestBody.options) {
                    optionService.EDIT_OPTION(option.id, option.content);
                }
            }
            repository.save(stage);
        } else {
            Stage newStage = this.CREATE_STAGE(requestBody);
            process.stages.add(newStage);
            processRepository.save(process);
        }
    }

    public void DELETE_STAGE(StageRequest stage, Process process) {
        if (!repository.existsById(stage.id)) {
            System.out.println("does not exist");
            return;
        }
        Stage stageToDelete = emptyCheck(repository.findById(stage.id));
        process.stages.remove(stageToDelete);
        processRepository.save(process);
    }
}
