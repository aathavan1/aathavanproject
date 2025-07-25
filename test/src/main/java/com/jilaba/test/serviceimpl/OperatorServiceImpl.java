package com.jilaba.test.serviceimpl;

import com.jilaba.test.dao.OperatorDao;
import com.jilaba.test.model.Operator;
import com.jilaba.test.service.OperatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.List;

@Component
public class OperatorServiceImpl implements OperatorService {


    @Autowired
    private OperatorDao operatorDao;
    @Autowired
    private DataSource master;


    @Override
    public List<Operator> loadOperator(String active) throws Exception {
        return operatorDao.getOperator(active);
    }

    @Override
    public void saveOperator(Operator operator) throws Exception {

    }

    @Override
    public String getuser(String operCode,String password) throws Exception {
        return operatorDao.getUser(operCode, password);
    }
}
