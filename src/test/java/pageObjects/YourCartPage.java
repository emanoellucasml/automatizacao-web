package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class YourCartPage {
	
	@FindBy(xpath = "//BUTTON[@id='checkout']")
	protected WebElement btnCheckout;
	
	@FindBy(name = "remove-sauce-labs-fleece-jacket")
	protected WebElement btnRemoveSauceLabsFleeceJacket;
	
	@FindBy(name = "remove-sauce-labs-bike-light")
	protected WebElement btnRemoveSauceLabsBikeLight;
	
	@FindBy(name = "remove-sauce-labs-backpack")
	protected WebElement btnRemoveSauceLabsBackpack;
	
	@FindBy(name = "remove-sauce-labs-bolt-t-shirt")
	protected WebElement btnRemoveSauceLabsBoltTShirt;
	
	@FindBy(id = "remove-test.allthethings()-t-shirt-(red)")
	protected WebElement btnRemoveTestAllTheThingsTShirtRed;
	
	@FindBy(name = "remove-sauce-labs-onesie")
	protected WebElement btnRemoveSauceLabsOnesie;
	
	public void clicaNoBotaoCheckout() {
		this.btnCheckout.click();
	}
	
	public void removeItem(String nomeItem) {
		if(nomeItem.equals("Sauce Labs Bike Light")) {
			this.btnRemoveSauceLabsBikeLight.click();
		}else if(nomeItem.equals("Sauce Labs Backpack")) {
			this.btnRemoveSauceLabsBackpack.click();
		}else if(nomeItem.equals("Sauce Labs Bolt T-Shirt")) {
			this.btnRemoveSauceLabsBoltTShirt.click();
		}else if(nomeItem.equals("Sauce Labs Fleece Jacket")) {
			this.btnRemoveSauceLabsFleeceJacket.click();
		}else if(nomeItem.equals("Test.allTheThings() T-Shirt (Red)")) {
			this.btnRemoveTestAllTheThingsTShirtRed.click();
		}else {
			this.btnRemoveSauceLabsOnesie.click();
		}
	}

}
