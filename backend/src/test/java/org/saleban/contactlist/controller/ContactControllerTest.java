package org.saleban.contactlist.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
public class ContactControllerTest {

    @Autowired
    private WebApplicationContext context;
    private MockMvc mockMvc;

    @Before
    public void setup(){
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void contactGetRootURLTest() throws Exception{
        this.mockMvc.perform(get("/api/contacts/")).andExpect(status().isOk());
    }

    // Test if the '/api/contacts/add' route is working correctly
    @Test
    public void contactGetContactURLTest() throws Exception{
        this.mockMvc.perform(get("/api/contacts/get/"))
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect((ResultMatcher) jsonPath("$.firstName", is("Saleban")));

    }
}
