package com.jilaba.test.connection;


import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import javax.swing.*;
import java.sql.Connection;

@Configuration
public class ConnectionConfig {

    private DataSource getDataSourceFor(String dbName) {
        HikariDataSource hikariDataSource = null;
        try {
            hikariDataSource = new HikariDataSource();
            hikariDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
            hikariDataSource.setJdbcUrl("jdbc:mysql://192.168.1.126:3306/" + dbName);
            hikariDataSource.setUsername("jilaba");
            hikariDataSource.setPassword("jil@123");
            Connection connection = hikariDataSource.getConnection();
            return hikariDataSource;
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
            return null;
        }
    }

    @Bean(name = "master")
    DataSource getmasterDataSource() {
        return getDataSourceFor("mhosmaster");
}


}
