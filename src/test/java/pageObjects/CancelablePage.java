package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CancelablePage {
	
	/*
	 * A fun��o desta classe � simplesmente mapear o bot�o "cancel", que est� presente
	 * tanto na p�gina "Checkout: overview" quanto na p�gina "Checkout your information".
	 * Assim, evita-se duplica��o de c�digo
	 * */
	
	@FindBy(id = "cancel")
	protected WebElement btnCancel;
	
	public void clicaNoBotaoCancelar() {
		btnCancel.click();		
	}
}
