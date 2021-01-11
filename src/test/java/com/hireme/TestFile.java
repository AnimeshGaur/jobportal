package com.hireme;

import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestFile {

	private static WebDriver driver;

	@BeforeClass
	public static void setUp() throws IOException {
		System.setProperty("webdriver.gecko.driver", "C:\\Geckodriver\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.manage().window().maximize();

	}

	@Test
	public void login() throws InterruptedException {
		driver.get("http://localhost:8080/");
		driver.manage().window().maximize();
		new WebDriverWait(driver, 10);
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("sukesh.saurabh@gmail.com");
		driver.findElement(By.xpath(".//*[@id='password']")).sendKeys("qwerty");
		driver.findElement(By.xpath("html/body/div[1]/form/button")).click();
		new WebDriverWait(driver, 10);
		String result = driver.findElement(By.xpath(".//*[@id='Logout']")).getText();
		assertEquals(result, "Logout");
		driver.get("http://localhost:8080/");

	}

	@Test
	public void failedLogin() throws InterruptedException {
		driver.get("http://localhost:8080/");
		driver.manage().window().maximize();
		new WebDriverWait(driver, 10);
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("sukesh.saurabh@gmail.com");
		driver.findElement(By.xpath(".//*[@id='password']")).sendKeys("wrongpassword");
		driver.findElement(By.xpath("html/body/div[1]/form/button")).click();
		new WebDriverWait(driver, 10);
		String result = driver.findElement(By.xpath("html/body/div[1]/form/div/p")).getText();
		assertEquals(result, "Email or Password invalid, please verify");
		driver.get("http://localhost:8080/");

	}

	@Test
	public void alreadySingedUp() throws InterruptedException {
		driver.get("http://localhost:8080/");
		driver.manage().window().maximize();
		new WebDriverWait(driver, 10);
		driver.findElement(By.xpath("html/body/form/button")).click();
		driver.findElement(By.xpath(".//*[@id='email']")).click();
		// Put
		// an
		// existing
		// ID
		// here
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("admin@admin.com");
		driver.findElement(By.xpath(".//*[@id='password']")).sendKeys("anypassword");
		driver.findElement(By.xpath("html/body/div[1]/div/div/form/div[4]/div/button")).click();
		new WebDriverWait(driver, 10);
		String result = driver.findElement(By.xpath("html/body/div[1]/div/div/form/div[1]/div/label")).getText();
		assertEquals(result, "There is already a user registered with the email provided");
		driver.get("http://localhost:8080/");
	}

	@AfterClass
	public static void clousreaActivities() {

		driver.close();
	}

}