package org.saleban.contactlist.service.impl;

import org.saleban.contactlist.domain.Contact;
import org.saleban.contactlist.repository.ContactRepository;
import org.saleban.contactlist.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {
    @Autowired
    private ContactRepository contactRepository;

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public void saveContact(Contact contact) {
        contactRepository.save(contact);
    }

    @Override
    public Contact getSingleContact(Long id) {
        return contactRepository.findContactById(id);
    }

    @Override
    public void removeSingleContact(Long id) {
        contactRepository.deleteById(id);
    }

    @Override
    public void updateContact(Contact contact) {
        contactRepository.save(contact);
    }
}
