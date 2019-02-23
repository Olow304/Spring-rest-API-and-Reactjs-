package org.saleban.contactlist.controller;

import org.saleban.contactlist.domain.Contact;
import org.saleban.contactlist.repository.ContactRepository;
import org.saleban.contactlist.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/")
    public List<Contact> getAllContacts(){
        return contactService.getAllContacts();
    }

    @PostMapping("/add")
    public void createContact(@Valid @RequestBody Contact contact){
        contactService.saveContact(contact);
    }

    @GetMapping("/get/{id}")
    public Contact getContactById(@PathVariable("id") Long id){
        return contactService.getSingleContact(id);
    }

    @DeleteMapping("/get/{id}")
    public void deleteContactById(@PathVariable("id") Long id){
        contactService.removeSingleContact(id);
    }

    @PutMapping("/update/{id}")
    public void updateContact(@Valid @RequestBody Contact contact, @PathVariable("id") Long id){
        Contact existingContact = contactRepository.findContactById(id);
        existingContact.setFirstName(contact.getFirstName());
        existingContact.setLastName(contact.getLastName());
        existingContact.setEmail(contact.getEmail());
        existingContact.setPhone(contact.getPhone());
        contactService.updateContact(existingContact);
    }
}
