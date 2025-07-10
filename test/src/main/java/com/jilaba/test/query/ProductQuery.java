package com.jilaba.test.query;

import org.springframework.stereotype.Component;

@Component
public class ProductQuery {
    public String getProduct() {
        StringBuilder sb = new StringBuilder();
        sb.append("select pr.productgroupcode, productgroupname, productcode, productname, pr.shortname, \n");
        sb.append("pr.qualitycode, qualityname, pr.stylecode, stylename, pr.sizecode, sizename, pieceperpack, \n");
        sb.append("orderlevel, barcode, allowdiscount, purrate, mrprate, sellingrate, barcode, hsncode, \n");
        sb.append("taxable, taxcalc, narration, pr.active \n");
        sb.append("from product as pr \n");
        sb.append("left join productgroup as pg on pg.productgroupcode = pr.productgroupcode \n");
        sb.append("left join qualitymaster as qm on qm.qualitycode = pr.qualitycode \n");
        sb.append("left join stylemaster as sm on sm.stylecode = pr.stylecode \n");
        sb.append("left join size as sz on sz.sizecode = pr.sizecode \n");
//        sb.append("where pr.updatedby = 1212 \n");
        return sb.toString();
    }

    public String getMaxNumber() {
        StringBuilder sb = new StringBuilder();
        sb.append("select max(sno) as maxnumber from product");
        return sb.toString();
    }
}
