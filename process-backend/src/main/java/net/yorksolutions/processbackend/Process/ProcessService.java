package net.yorksolutions.processbackend.Process;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static net.yorksolutions.processbackend.Helpers.emptyCheck;

@Service
public class ProcessService {

    ProcessRepository repository;
    @Autowired
    public ProcessService(ProcessRepository repository){
        this.repository = repository;
    }
    public Iterable<Process> GET_ALL_PROCESSES(){
        return repository.findAll();
    }
    public void CREATE_PROCESS(ProcessRequest requestBody){
        var process = new Process(requestBody.title, requestBody.directions);
        repository.save(process);
    }
    public void EDIT_PROCESS(ProcessRequest requestBody){
        Process process = emptyCheck(repository.findById(requestBody.id));
        process.title = requestBody.title;
        process.directions = requestBody.directions;
        repository.save(process);
    }
    public void DELETE_PROCESS(Long id){
        repository.deleteById(id);
    }
}
