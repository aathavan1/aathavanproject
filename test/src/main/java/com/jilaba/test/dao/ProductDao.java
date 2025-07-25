package com.jilaba.test.dao;

import com.jilaba.test.model.Product;

import java.util.List;
import java.util.Map;

public interface ProductDao {

    public void saveProduct(Product product) throws Exception;

    public int getMaxNumber() throws Exception;

    public List<Product> getProduct() throws Exception;

    public void deleteProduct(String productCode) throws Exception;


    public void updateProduct(Map<String, Object> productUpdate) throws Exception;
}
