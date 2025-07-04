package com.jilaba.test.controller;

import com.jilaba.security.JilabaStoresAesED;
import com.jilaba.test.model.Operator;
import com.jilaba.test.service.ControllerService;
import com.jilaba.test.service.OperatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class LoginController {

    @Autowired
    private ControllerService service;

    @Autowired
    private OperatorService operatorService;


    @GetMapping("/getoper")
    public List<Operator> getOperator() throws Exception {
        try {
            List<Operator>  lst=operatorService.loadOperator("");
            for (Operator operator: lst)
                operator.setPassword(JilabaStoresAesED.decrypt(operator.getPassword()));
            return lst;
        }
        catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/getuser/{id}")
    private String checkUser(@PathVariable String id)throws Exception {
        try{
            return operatorService.getuser(id);
        }   catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }


}
