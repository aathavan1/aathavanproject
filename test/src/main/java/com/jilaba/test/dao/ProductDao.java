package com.jilaba.test.dao;

import com.jilaba.test.model.Product;

import java.util.List;

public interface ProductDao {

    public void saveProduct(Product product) throws Exception;

    public int getMaxNumber() throws Exception;

    public List<Product> getProduct() throws Exception;
}
