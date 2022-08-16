package net.yorksolutions.processbackend.Option;

import net.yorksolutions.processbackend.Stage.Stage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static net.yorksolutions.processbackend.Helpers.emptyCheck;

@Service
public class OptionService {

    OptionRepository repository;
    @Autowired
    public OptionService(OptionRepository optionRepository){
        this.repository = optionRepository;
    }
    public Iterable<Option> GET_ALL_OPTIONS(){
        return this.repository.findAll();
    }
    public void CREATE_OPTION(String content, Stage stage){
        var option = new Option(content, stage);
        this.repository.save(option);
    }
    public void EDIT_OPTION(Long optionId, String newContent){
        var option = emptyCheck(this.repository.findById(optionId));
        option.content = newContent;
        this.repository.save(option);
    }
    public void DELETE_OPTION(Long optionId){
        this.repository.deleteById(optionId);
    }
}
