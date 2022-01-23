package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CheckoutCompletePage {
	@FindBy(xpath = "//H2[@class='complete-header'][text()='THANK YOU FOR YOUR ORDER']")
	protected WebElement thankYouCheckout;
	
	public String getTextFromThankYouCheckout() {
		return this.thankYouCheckout.getText();
	}
}
