package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CancelablePage {
	
	/*
	 * A função desta classe é simplesmente mapear o botão "cancel", que está presente
	 * tanto na página "Checkout: overview" quanto na página "Checkout your information".
	 * Assim, evita-se duplicação de código
	 * */
	
	@FindBy(id = "cancel")
	protected WebElement btnCancel;
	
	public void clicaNoBotaoCancelar() {
		btnCancel.click();		
	}
}
