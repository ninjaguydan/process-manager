package net.yorksolutions.processbackend.Option;

import net.yorksolutions.processbackend.Stage.Stage;
import net.yorksolutions.processbackend.Stage.StageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static net.yorksolutions.processbackend.Helpers.emptyCheck;

@Service
public class OptionService {

    OptionRepository repository;
    StageRepository stageRepository;
    @Autowired
    public OptionService(OptionRepository optionRepository, StageRepository stageRepository){
        this.repository = optionRepository;
        this.stageRepository = stageRepository;
    }
    public Iterable<Option> GET_OPTIONS_BY_STAGE(Long stageId){
        Stage stage = emptyCheck(stageRepository.findById(stageId));
        return repository.getAllByStage(stage);
    }
    public void CREATE_OPTION(String content, Long stageId){
        Stage stage = emptyCheck(stageRepository.findById(stageId));
        var option = new Option(content, stage);
        repository.save(option);
    }
    public void EDIT_OPTION(Long optionId, String newContent){
        var option = emptyCheck(repository.findById(optionId));
        option.content = newContent;
        repository.save(option);
    }
    public void DELETE_OPTION(Long optionId){
        repository.deleteById(optionId);
    }
}
