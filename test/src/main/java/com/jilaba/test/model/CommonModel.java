package com.jilaba.test.model;

import lombok.Data;

@Data
public class CommonModel {
    //prodctGroup
    private String productgroupcode, productgroupname;
    //qualityMaster
    private String qualityname, qualitycode;
    //styleMaster
    private String stylecode, stylename;
    //SizeGroup
    private String sizegroupcode, sizegroupname;
    //size
    private String sizecode, sizename;
    //productMaster
    private String productcode, productname;
    //brandMaster
    private String brandcode, brandname;
    //hsnMaster
    private String hsncode, hsndescription;

}
