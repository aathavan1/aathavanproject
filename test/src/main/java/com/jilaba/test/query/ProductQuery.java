package com.jilaba.test.query;

import org.springframework.stereotype.Component;

@Component
public class ProductQuery {
    public String getProduct() {
        StringBuilder sb = new StringBuilder();
        sb.append("select pr.productgroupcode, productgroupname, productcode, productname, pr.shortname, \n");
        sb.append("pr.qualitycode, qualityname, pr.stylecode, stylename, pr.sizecode, sizename, pieceperpack, \n");
        sb.append("orderlevel, barcode, allowdiscount, purrate, mrprate, sellingrate, barcode, hsncode, \n");
        sb.append("taxable, taxcalc,brandcode, narration, pr.active , sizegroupcode \n");
        sb.append("from product as pr \n");
        sb.append("left join productgroup as pg on pg.productgroupcode = pr.productgroupcode \n");
        sb.append("left join qualitymaster as qm on qm.qualitycode = pr.qualitycode \n");
        sb.append("left join stylemaster as sm on sm.stylecode = pr.stylecode \n");
        sb.append("left join size as sz on sz.sizecode = pr.sizecode \n");
        sb.append("where pr.updatedby = 1212 order by productcode \n");
        return sb.toString();
    }

    public String getMaxNumber() {
        StringBuilder sb = new StringBuilder();
        sb.append("select max(sno) as maxnumber from product");
        return sb.toString();
    }


    public String deleteProduct(String productCode) {
        StringBuilder sb = new StringBuilder();
        sb.append("delete from product where productcode = '").append(productCode).append("' ");
        System.out.println(sb.toString());
        return sb.toString();
    }


    public String updateProduct() {
        StringBuilder sb = new StringBuilder();
        sb.append("update product set productname = :productname ,shortname = :shortname, \n");
        sb.append("orderlevel = :orderlevel,purrate = :purrate,sellingrate = :sellingrate,mrprate = :mrprate, \n");
        sb.append("productgroupcode = :productgroupcode, qualitycode = :qualitycode, stylecode = :stylecode, \n");
        sb.append(" sizecode = :sizecode, pieceperpack = :pieceperpack,barcode = :barcode,allowdiscount = :allowdiscount ,\n");
        sb.append("brandcode = :brandcode, taxable = :taxable, hsncode = :hsncode \n");
        sb.append(" where productcode = :productcode");
        return sb.toString();
    }
}
