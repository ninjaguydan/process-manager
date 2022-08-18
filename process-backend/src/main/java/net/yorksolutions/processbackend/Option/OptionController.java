package net.yorksolutions.processbackend.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/options")
public class OptionController {
    OptionService service;

    @Autowired
    public OptionController(OptionService service) {
        this.service = service;
    }

    @PutMapping
    public void editOption(@RequestBody OptionRequest requestBody) {
        service.EDIT_OPTION(requestBody.id, requestBody.content);
    }

    @DeleteMapping("/{id}")
    public void deleteOption(@PathVariable Long id) {
        service.DELETE_OPTION(id);
    }
}
