package org.saleban.contactlist.repository;

import org.saleban.contactlist.domain.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {

    Contact findContactById(Long id);
}
