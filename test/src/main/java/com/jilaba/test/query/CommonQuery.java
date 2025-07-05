package com.jilaba.test.query;

import org.springframework.stereotype.Component;

@Component
public class CommonQuery {

    public String getProductGroup() {
        StringBuilder sb = new StringBuilder();
        sb.append("select productgroupcode,productgroupname from productgroup");
        return sb.toString();
    }

    public String getQuality() {
        StringBuilder sb = new StringBuilder();
        sb.append("select qualityname ,qualitycode from qualitymaster where active = 'Y' ");
        return sb.toString();
    }

    public String getStyle() {
        StringBuilder sb = new StringBuilder();
        sb.append("select stylecode,stylename from stylemaster where active = 'Y' ");
        return sb.toString();
    }

    public String getSizeGroup() {
        StringBuilder sb = new StringBuilder();
        sb.append("select sizegroupcode,sizegroupname from sizegroup where active = 'Y' ");
        return sb.toString();
    }

    public String getSize() {
        StringBuilder sb = new StringBuilder();
        sb.append("select sizecode,sizename from size where active = 'Y' ");
        return sb.toString();
    }

    public String getProduct() {
        StringBuilder sb = new StringBuilder();
        sb.append("select productcode,productname from product where active = 'Y' ");
        return sb.toString();
    }

    public String getBrand() {
        StringBuilder sb = new StringBuilder();
        sb.append("select brandcode,brandname from brandmaster where active = 'Y' ");
        return sb.toString();
    }

    public String getHsn() {
        StringBuilder sb = new StringBuilder();
        sb.append("select hsncode,hsndescription from hsnmaster where active = 'Y' ");
        return sb.toString();
    }

}
