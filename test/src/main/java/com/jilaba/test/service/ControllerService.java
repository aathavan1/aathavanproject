package com.jilaba.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.List;
import java.util.Map;

@Component
public class ControllerService {

    @Autowired
    private DataSource master;

    public void loadOperator() {
        List<Map<String, Object>> map = new JdbcTemplate(master).queryForList("select * from product");
        System.out.println(map.get(0).get("proname"));
    }
}
