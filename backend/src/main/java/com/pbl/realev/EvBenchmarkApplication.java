package com.pbl.realev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(
		exclude = { DataSourceAutoConfiguration.class }
)
public class EvBenchmarkApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvBenchmarkApplication.class, args);
	}
}
