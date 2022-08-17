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
    OptionService optionService;

    @Autowired
    public StageService(StageRepository stageRepository, OptionService optionService) {
        this.repository = stageRepository;
        this.optionService = optionService;

    }

    public Iterable<Stage> GET_ALL_STAGES() {
        return repository.findAll();
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

    public void EDIT_STAGE(StageRequest requestBody) {
        Stage stage = emptyCheck(repository.findById(requestBody.id));
        stage.prompt = requestBody.prompt;
        stage.responseType = requestBody.responseType;
        stage.responseInput = requestBody.responseInput;
        repository.save(stage);
    }

    public void DELETE_STAGE(Long id) {
        repository.deleteById(id);
    }
}
