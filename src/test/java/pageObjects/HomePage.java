package pageObjects;

import static helpers.Helper.*;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import helpers.Helper;

public class HomePage extends BasePage{

	@FindBy(xpath = "//SELECT[@class='product_sort_container']")
	protected WebElement filtro; 
	
	@FindBy(id = "add-to-cart-sauce-labs-backpack")
	protected WebElement btnAddSauceLabsBackpack;
	
	@FindBy(id = "add-to-cart-sauce-labs-bike-light")
	protected WebElement btnAddSauceLabsBikeLight;
	
	@FindBy(id = "add-to-cart-sauce-labs-bolt-t-shirt")
	protected WebElement btnAddSauceLabsBoltTShirt;
	
	@FindBy(id = "add-to-cart-sauce-labs-fleece-jacket")
	protected WebElement btnAddSauceLabsFleeceJacket;
	
	@FindBy(id = "add-to-cart-sauce-labs-onesie")
	protected WebElement btnAddSauceLabsOnesie;
	
	@FindBy(id = "add-to-cart-test.allthethings()-t-shirt-(red)")
	protected WebElement btnAddTestallTheThingsTShirtRed;
	
	public void clicaNoFiltro() {
		this.filtro.click();
	}
	
	private void moveAteOpcaoPrecoCrescente() {
		/*este método é usado somente internamente, portanto pode ser private*/
		Select filtroOptions = new Select(this.filtro);
		filtroOptions.selectByVisibleText("Price (low to high)");
	}
	
	public void clicaNaOpcaoPrecoCrescente() {
		this.moveAteOpcaoPrecoCrescente();
	}
	
	public void AdicionaProdutoAoCarrinho(String nomeProduto) {
		this.selecionaProduto(nomeProduto).click();
	}

	private WebElement selecionaProduto(String nomeProduto) {
		if(nomeProduto.equals("Sauce Labs Backpack")) {
			return this.btnAddSauceLabsBackpack;
		}else if(nomeProduto.equals("Sauce Labs Bike Light")) {
			return this.btnAddSauceLabsBikeLight;
		}else if(nomeProduto.equals("Sauce Labs Bolt T-Shirt")) {
			return this.btnAddSauceLabsBoltTShirt;
		}else if(nomeProduto.equals("Sauce Labs Fleece Jacket")) {
			return this.btnAddSauceLabsFleeceJacket;
		}else if(nomeProduto.equals("Sauce Labs Onesie")) {
			return this.btnAddSauceLabsOnesie;
		}else {
			return this.btnAddTestallTheThingsTShirtRed;
		}
	}
}

