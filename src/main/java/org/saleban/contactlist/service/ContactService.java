package org.saleban.contactlist.service;


import org.saleban.contactlist.domain.Contact;
import java.util.List;

public interface ContactService {

    List<Contact> getAllContacts();

    void saveContact(Contact contact);

    Contact getSingleContact(Long id);

    void removeSingleContact(Long id);

    void updateContact(Contact contact);
}
