package com.jilaba.test.daoimpl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jilaba.test.dao.ProductDao;
import com.jilaba.test.model.Product;
import com.jilaba.test.query.ProductQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ProductDaoImpl implements ProductDao {

    @Autowired
    private DataSource rathmaster;

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private ProductQuery productQuery;

    @Override
    public void saveProduct(Product product) throws Exception {
        Map<String, Object> map = mapper.convertValue(product, HashMap.class);
        SimpleJdbcCall simpleJdbcCall = new SimpleJdbcCall(rathmaster);
        simpleJdbcCall.setCatalogName("rathmaster");
        simpleJdbcCall.setProcedureName("spsaveproduct");
        simpleJdbcCall.execute(map);
    }

    @Override
    public int getMaxNumber() throws Exception {
        return new JdbcTemplate(rathmaster).queryForObject(productQuery.getMaxNumber(), Integer.class);
    }

    @Override
    public List<Product> getProduct() throws Exception {
        return new JdbcTemplate(rathmaster).query(productQuery.getProduct(), BeanPropertyRowMapper.newInstance(Product.class));
    }

    @Override
    public void deleteProduct(String productCode) throws Exception {
        new JdbcTemplate(rathmaster).update(productQuery.deleteProduct(productCode));
    }

    @Override
    public void updateProduct(Map<String, Object> productUpdate) throws Exception {
        try {
            new NamedParameterJdbcTemplate(rathmaster).update(productQuery.updateProduct(), productUpdate);

        } catch (Exception e) {
            throw e;
//            throw new Exception("Cant Able to Update the product");
        }
    }


}
