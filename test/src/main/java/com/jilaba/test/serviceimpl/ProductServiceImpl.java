package com.jilaba.test.serviceimpl;


import com.jilaba.test.common.Constant;
import com.jilaba.test.dao.CommonDao;
import com.jilaba.test.dao.ProductDao;
import com.jilaba.test.model.CommonModel;
import com.jilaba.test.model.Product;
import com.jilaba.test.service.ProductService;
import com.jilaba.transaction.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class ProductServiceImpl implements ProductService {

    @Autowired
    private CommonDao commonDao;
    @Autowired
    private DataSource rathmaster;

    @Autowired
    private ProductDao productDao;


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

    @Override
    public List<CommonModel> getHsn() throws Exception {
        return commonDao.getHsn();
    }

    @Override
    public void saveProduct(Product product) throws Exception {
        Transaction transaction = null;
        try {
            transaction = new Transaction();
            transaction.begin(new JdbcTemplate(rathmaster));
            product.setTaxcalc("E");
            product.setUpdatedby(1212);
            product.setActive("Y");
            product.setCreateddate(Constant.SAVEDATEFORMAT.format(LocalDate.now()));
            product.setCreatedtime(Constant.SAVEDATETIMEFORMAT.format(LocalDateTime.now()));
            product.setProductcode(String.valueOf(productDao.getMaxNumber()) + "test");
            productDao.saveProduct(product);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null)
                transaction.rollback();
            throw e;
        }
    }

    @Override
    public List<Product> getProductView() throws Exception {
        return productDao.getProduct();
    }
}
