package net.yorksolutions.processbackend.Option;

import net.yorksolutions.processbackend.Stage.Stage;
import net.yorksolutions.processbackend.Stage.StageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static net.yorksolutions.processbackend.Helpers.emptyCheck;
import static net.yorksolutions.processbackend.Helpers.nullCheck;

@Service
public class OptionService {

    OptionRepository repository;
    @Autowired
    public OptionService(OptionRepository optionRepository){
        this.repository = optionRepository;
    }

    public Option CREATE_OPTION(String content){
        nullCheck(content);
        var option = new Option(content);
        return repository.save(option);
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
