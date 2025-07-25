package com.jilaba.test.daoimpl;

import com.jilaba.security.JilabaHosieryAesED;
import com.jilaba.security.JilabaStoresAesED;
import com.jilaba.test.dao.OperatorDao;
import com.jilaba.test.model.Operator;
import com.jilaba.test.query.OperatorQuerry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class OperatorDaoImpl implements OperatorDao {
    @Autowired
    private OperatorQuerry operatorQuerry;

    @Autowired
    private DataSource master;


    @Override
    public List<Operator> getOperator(String active) throws Exception {
        return new JdbcTemplate(master).query(operatorQuerry.loadOperator(active), BeanPropertyRowMapper.newInstance(Operator.class));
    }

    @Override
    public String getUser(String operCode, String password) throws Exception {
        try {
            password = JilabaStoresAesED.encrypt(password);
            return new JdbcTemplate(master).queryForObject(operatorQuerry.getUser(password), new Object[]{operCode}, String.class);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
        catch (IncorrectResultSizeDataAccessException e) {
            return "1";
        }
    }


    public void saveOperator(List<Map<String, Object>> lstObject) throws Exception {
        new NamedParameterJdbcTemplate(master).batchUpdate(operatorQuerry.saveOperator(), lstObject.toArray(new HashMap[0]));
    }


}
