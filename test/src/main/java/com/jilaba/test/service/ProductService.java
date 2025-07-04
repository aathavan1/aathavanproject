package com.jilaba.test.service;

import com.jilaba.test.model.CommonModel;

import java.util.List;

public interface ProductService {

    public List<CommonModel> getProductGroup() throws Exception;

    public List<CommonModel> getQuality() throws Exception;

    public List<CommonModel> getStyle() throws Exception;

    public List<CommonModel> getSize() throws Exception;

    public List<CommonModel> getSizeGroup() throws Exception;

    public List<CommonModel> getProduct() throws Exception;

    public List<CommonModel> getBrand() throws Exception;


}
