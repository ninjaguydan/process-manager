package net.yorksolutions.processbackend.Option;

import net.yorksolutions.processbackend.Stage.Stage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OptionRepository extends CrudRepository<Option, Long> {
    Iterable<Option> getAllByStage(Stage stage);
}
