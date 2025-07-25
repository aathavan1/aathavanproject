package com.jilaba.test.connection;


import com.jilaba.test.dao.CommonDao;
import com.jilaba.test.daoimpl.CommonDaoImpl;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class ConnectionConfig {


    private DataSource getDataSource(String dbName) {

        HikariDataSource hikariDataSource = null;
        try {
            if (!checkDbExist(dbName)) {
                throw new Exception(dbName + " Database Doesn't Exist");
            }

            hikariDataSource = new HikariDataSource();
            hikariDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
            hikariDataSource.setJdbcUrl("jdbc:mysql://192.168.1.126:3306/" + dbName);
            hikariDataSource.setUsername("jilaba");
            hikariDataSource.setPassword("jil@123");
            hikariDataSource.getConnection();
            return hikariDataSource;
        } catch (Exception e) {
            e.printStackTrace();
            System.exit(0);
            return null;
        }
    }

    private boolean checkDbExist(String dbName) throws Exception {
        try {
            if (dbName == null || dbName.isEmpty())
                return true;
            String query = "show databases like '" + dbName + "'";
            new JdbcTemplate(getDataSource("")).queryForObject(query, String.class);
            return true;
        } catch (EmptyResultDataAccessException e) {
            return false;
        }

    }

    @Bean(name = "master")
    DataSource getmasterDataSource() {
        return getDataSource("mmvsmaster");
    }


    @Bean(name = "rathmaster")
    DataSource getRathMasterDataSource() {
        return getDataSource("rathmaster");
    }


}
