package net.yorksolutions.processbackend.Process;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/processes")
public class ProcessController {
    ProcessService service;
    @Autowired
    public ProcessController(ProcessService service){
        this.service = service;
    }
    @GetMapping
    public Iterable<Process> getAllProcesses(){
        return service.GET_ALL_PROCESSES();
    }
    @PostMapping
    public void createProcess(@RequestBody ProcessRequest requestBody){
        service.CREATE_PROCESS(requestBody);
    }
    @PutMapping
    public void editProcess(@RequestBody ProcessRequest requestBody){
        service.EDIT_PROCESS(requestBody);
    }
    @DeleteMapping("/{id}")
    public void deleteProcess(@PathVariable Long id){
        service.DELETE_PROCESS(id);
    }

}
