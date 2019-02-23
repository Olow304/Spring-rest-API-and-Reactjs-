package org.saleban.contactlist.repository;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.saleban.contactlist.domain.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
public class ContactRepositoryTest {

    @Autowired
    private ContactRepository contactRepository;

    public void setUp(){
        contactRepository.deleteAll();
    }

    @Test
    public void givenWhenThen(){
        Contact contact = new Contact("SalebanTest", "OlowTest", "Olow304@gmailTest.com", "8023636854");
        Contact saveContact = contactRepository.save(contact);

        Assertions.assertThat(saveContact).isEqualTo(contact);
    }

    @Test
    public void givenWhenThenGetAll(){
        contactRepository.findAll();
    }

    @Test
    public void givenWhenThenGetContactId(){
        Long contactID = 1L;
        contactRepository.findContactById(contactID);
    }

    @Test
    public void givenWhenThenRemoveContactById(){
        Contact contactRemove = new Contact("testRemove", "testRemove", "testRemove@gmailTest.com", "8023636854");
        Contact contactRemoveSave = contactRepository.save(contactRemove);
        Long getRemoveId = contactRemoveSave.getId();
        contactRepository.deleteById(getRemoveId);
    }

    @Test
    public void givenWhenThenUpdateContactById(){
        Contact contactUpdate = new Contact("updateContact", "updateContact", "updateContact@gmailTest.com", "8023636854");
        Contact contactUpdateSave = contactRepository.save(contactUpdate);
        Long id = contactUpdateSave.getId();
        Contact existingContact = contactRepository.findContactById(id);
        existingContact.setFirstName("NewUpdateTest");
        existingContact.setLastName("NewUpdateLastNameTest");
        existingContact.setEmail("NewUpdateEmail");
        existingContact.setPhone("1110002222");
        contactRepository.save(existingContact);

    }
}
