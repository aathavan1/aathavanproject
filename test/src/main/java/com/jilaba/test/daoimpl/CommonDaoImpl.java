package com.jilaba.test.daoimpl;

import com.jilaba.test.dao.CommonDao;
import com.jilaba.test.model.CommonModel;
import com.jilaba.test.query.CommonQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.List;

@Component
public class CommonDaoImpl implements CommonDao {

    @Autowired
    private DataSource rathmaster;

    @Autowired
    private CommonQuery commonQuery;


    @Override
    public List<CommonModel> getProductGroup() throws Exception {
        return new JdbcTemplate(rathmaster).query(commonQuery.getProductGroup(), BeanPropertyRowMapper.newInstance(CommonModel.class));
    }

    @Override
    public List<CommonModel> getQuality() throws Exception {
        return new JdbcTemplate(rathmaster).query(commonQuery.getQuality(), BeanPropertyRowMapper.newInstance(CommonModel.class));
    }

    @Override
    public List<CommonModel> getStyle() throws Exception {
        return new JdbcTemplate(rathmaster).query(commonQuery.getStyle(), BeanPropertyRowMapper.newInstance(CommonModel.class));
    }

    @Override
    public List<CommonModel> getSize() throws Exception {
        return new JdbcTemplate(rathmaster).query(commonQuery.getSize(), BeanPropertyRowMapper.newInstance(CommonModel.class));
    }

    @Override
    public List<CommonModel> getSizeGroup() throws Exception {
        return new JdbcTemplate(rathmaster).query(commonQuery.getSizeGroup(), BeanPropertyRowMapper.newInstance(CommonModel.class));
    }

    @Override
    public List<CommonModel> getProduct() throws Exception {
        return new JdbcTemplate(rathmaster).query(commonQuery.getProduct(), BeanPropertyRowMapper.newInstance(CommonModel.class));
    }

    @Override
    public List<CommonModel> getBrand() throws Exception {
        return new JdbcTemplate(rathmaster).query(commonQuery.getBrand(), BeanPropertyRowMapper.newInstance(CommonModel.class));
    }

    @Override
    public List<CommonModel> getHsn() throws Exception {
        return new JdbcTemplate(rathmaster).query(commonQuery.getHsn(), BeanPropertyRowMapper.newInstance(CommonModel.class));
    }
}
