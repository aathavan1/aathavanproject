package com.jilaba.test.service;

import com.jilaba.test.model.Operator;

import java.util.List;

public interface OperatorService {


    public List<Operator> loadOperator(String active) throws Exception;


    public void saveOperator(Operator operator) throws Exception;

    public String getuser(String operCode,String password) throws Exception;
}
