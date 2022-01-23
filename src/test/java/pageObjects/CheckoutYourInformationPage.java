package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CheckoutYourInformationPage extends BasePage{
	
	@FindBy(id = "first-name")
	protected WebElement inputFirstName;
	
	@FindBy(id = "last-name")
	protected WebElement inputLastName;
	
	@FindBy(id = "postal-code")
	protected WebElement inputPostalCode;
	
	@FindBy(id = "continue")
	protected WebElement btnContinue;
	
	public void inserePrimeiroNome(String primeiroNome) {
		this.inputFirstName.sendKeys(primeiroNome);
	}
	
	public void insereUltimoNome(String ultimoNome) {
		this.inputLastName.sendKeys(ultimoNome);
	}
	
	public void insereCodigoPostal(String codigoPostal) {
		this.inputPostalCode.sendKeys(codigoPostal);
	}
	
	public void clicaEmContinuar() {
		this.btnContinue.click();
	}
}
