package com.jilaba.test.common;

import org.springframework.stereotype.Component;

import java.time.format.DateTimeFormatter;

@Component
public class Constant {
    public static final DateTimeFormatter SAVEDATEFORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    public static final DateTimeFormatter DISPLAYDATEFORMAT = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
    public static final DateTimeFormatter SAVEDATETIMEFORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm:ss");
}
