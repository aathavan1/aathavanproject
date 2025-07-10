package com.jilaba.test.query;

import org.springframework.stereotype.Component;

@Component
public class OperatorQuerry {

    public String loadOperator(String active) {
        StringBuilder sb = new StringBuilder();
        sb.append("select opername,opercode,active,password from operator ");
        if (active != null && !active.isEmpty())
            sb.append(" where active = '").append(active.trim()).append("' ");
        return sb.toString();
    }

    public String checkLogin() {
        StringBuilder sb = new StringBuilder();
        sb.append("select opername from operator where opercode = ? and password =? ");
        return sb.toString();
    }

    public String saveOperator() {
        StringBuilder sb = new StringBuilder();
        sb.append("insert into operator (opername,opercode,active,operpass )");
        sb.append(" values (:opername,:opercode,:active,:operpass ) ");

        return sb.toString();
    }

    public String getUser(String password) {
        StringBuilder sb = new StringBuilder();
        sb.append("select opername from operator where opercode = ? \n");
        if(password!=null && !password.isEmpty())
        sb.append(" and password = '").append(password).append("' \n");
        sb.append("limit 1 \n");
        return sb.toString();
    }
}
