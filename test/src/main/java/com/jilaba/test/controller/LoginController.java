package com.jilaba.test.controller;

import com.jilaba.security.JilabaStoresAesED;
import com.jilaba.test.model.Operator;
import com.jilaba.test.service.ControllerService;
import com.jilaba.test.service.OperatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
            List<Operator> lst = operatorService.loadOperator("");
            for (Operator operator : lst)
                operator.setPassword(JilabaStoresAesED.decrypt(operator.getPassword()));
            return lst;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/checkuser/{id}")
    private String checkUser(@PathVariable String id) throws Exception {
        try {
            return operatorService.getuser(id, null);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/checkuser")
    private boolean checkLogin(@RequestParam(name = "opercode") String operCode
            , @RequestParam(name = "password") String password) throws Exception {
        try {

            return (operatorService.getuser(operCode, password) != null);
        } catch (Exception e) {
            return false;
        }
    }

}
