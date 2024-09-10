package com.pbl.realev.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

  @GetMapping("/")
  public String forwardReactApp() {
    return "forward:/index.html";
  }
}
