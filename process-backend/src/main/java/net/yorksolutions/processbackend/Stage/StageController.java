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

//    @GetMapping
//    public Iterable<Stage> getAllStages(){
//        return service.GET_ALL_STAGES();
//    }
//    @PostMapping
//    public void createStage(@RequestBody StageRequest requestBody){
//        service.CREATE_STAGE();
//    }
//    @PutMapping
//    public void editStage(@RequestBody StageRequest requestBody){
//        service.EDIT_STAGE(requestBody);
//    }
    @DeleteMapping("/{id}/{processId}")
    public void deleteStage(@PathVariable Long id, @PathVariable Long processId){
        service.DELETE_STAGE(id, processId);
    }
}
