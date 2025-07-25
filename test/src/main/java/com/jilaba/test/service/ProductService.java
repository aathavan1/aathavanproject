package com.jilaba.test.service;

import com.jilaba.test.model.CommonModel;
import com.jilaba.test.model.Product;

import java.util.List;

public interface ProductService {

    public List<CommonModel> getProductGroup() throws Exception;

    public List<CommonModel> getQuality() throws Exception;

    public List<CommonModel> getStyle() throws Exception;

    public List<CommonModel> getSize() throws Exception;

    public List<CommonModel> getSizeGroup() throws Exception;

    public List<CommonModel> getProduct() throws Exception;

    public List<CommonModel> getBrand() throws Exception;

    public List<CommonModel> getHsn() throws Exception;

    public void saveProduct(Product product) throws Exception;

    public List<Product> getProductView() throws Exception;

    public void deleteProduct(String productCode) throws Exception;

    public void updateProduct(Product product) throws Exception;
}
