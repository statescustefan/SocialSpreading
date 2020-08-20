package com.assigment.assigment.controller;

import com.assigment.assigment.models.Speakers;
import com.assigment.assigment.repositories.SpeakerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/speakers")
public class SpeakerController {
    @Autowired
    private SpeakerRepository speakerRepository;

    @GetMapping
    public List<Speakers> list() {
        return speakerRepository.findAll();
    }

    @GetMapping
    @RequestMapping({"id"})
    public Speakers get(@PathVariable Long id) {
        return speakerRepository.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Speakers create(@RequestBody final Speakers speakers) {
        return speakerRepository.saveAndFlush(speakers);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        speakerRepository.deleteById(id);
    }

    public Speakers update(@PathVariable Long id, @RequestBody Speakers speakers) {
        Speakers existingSpeakers = speakerRepository.getOne(id);
        BeanUtils.copyProperties(speakers, existingSpeakers, "speaker_id");
        return speakerRepository.saveAndFlush(existingSpeakers);


    }
}
