package com.jilaba.test.model;

import lombok.Data;

@Data
public class Product {
    private String productname, producttype, size, productgroupcode, productcode, quality, shortname, qualitycode, stylecode,
            allowdiscount, brandcode, hsncode, taxable, taxcalc, narration, active, createddate, createdtime, lastupdated,
            createdopername,allowdisc, updatedopername, stylename, qualityname, brandname, sizename, sizegroupname, sizecode = "",
            barcode;
    private int sizegroupcode, pieceperpack, createdby, updatedby, orderlevel = 0;
    private Double purrate, sellingrate, mrprate;

}