package net.yorksolutions.processbackend.Stage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/stages")
public class StageController {
    StageService service;
    @Autowired
    public StageController(StageService service){
        this.service = service;
    }
    @DeleteMapping("/{id}/{processId}")
    public void deleteStage(@PathVariable Long id, @PathVariable Long processId){
        service.DELETE_STAGE(id, processId);
    }
}
