package com.jilaba.test.dao;

import com.jilaba.test.model.Operator;

import java.util.List;

public interface OperatorDao {

    public List<Operator> getOperator(String active) throws Exception;

    public String getUser(String operCode) throws Exception;
}
