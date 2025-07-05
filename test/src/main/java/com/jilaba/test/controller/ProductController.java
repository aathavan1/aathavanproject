package com.jilaba.test.controller;


import com.jilaba.test.model.CommonModel;
import com.jilaba.test.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping(value = "/product/entry")
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/productgroup")
    public List<CommonModel> getProductGroup() throws Exception {
        try {
            return productService.getProductGroup();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/quality")
    public List<CommonModel> getQuality() throws Exception {
        try {
            return productService.getQuality();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/style")
    public List<CommonModel> getStyle() throws Exception {
        try {
            return productService.getStyle();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/size")
    public List<CommonModel> getSize() throws Exception {
        try {
            return productService.getSize();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/sizegroup")
    public List<CommonModel> getSizeGroup() throws Exception {
        try {
            return productService.getSizeGroup();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/product")
    public List<CommonModel> getProduct() throws Exception {
        try {
            return productService.getProduct();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/brand")
    public List<CommonModel> getBrand() throws Exception {
        try {
            return productService.getBrand();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping("/hsn")
    public List<CommonModel> getHsn() throws Exception {
        try {
            return productService.getHsn();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }


}
