package com.jilaba.test.serviceimpl;


import com.jilaba.test.dao.CommonDao;
import com.jilaba.test.model.CommonModel;
import com.jilaba.test.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductServiceImpl implements ProductService {

    @Autowired
    private CommonDao commonDao;


    @Override
    public List<CommonModel> getProductGroup() throws Exception {
        return commonDao.getProductGroup();
    }

    @Override
    public List<CommonModel> getQuality() throws Exception {
        return commonDao.getQuality();
    }

    @Override
    public List<CommonModel> getStyle() throws Exception {
        return commonDao.getStyle();
    }

    @Override
    public List<CommonModel> getSize() throws Exception {
        return commonDao.getSize();
    }

    @Override
    public List<CommonModel> getSizeGroup() throws Exception {
        return commonDao.getSizeGroup();
    }

    @Override
    public List<CommonModel> getProduct() throws Exception {
        return commonDao.getProduct();
    }

    @Override
    public List<CommonModel> getBrand() throws Exception {
        return commonDao.getBrand();
    }
}
