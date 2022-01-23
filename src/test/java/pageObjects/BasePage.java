package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {
	
	@FindBy(xpath = "//A[@class='shopping_cart_link']")
	protected WebElement btnCarrinho; 
	
	@FindBy(id = "react-burger-menu-btn")
	protected WebElement btnMenu;
	
	@FindBy(id = "react-burger-cross-btn")
	protected WebElement btnFechaMenu;
	
	
	@FindBy(id = "inventory_sidebar_link")
	protected WebElement btnInvetario;
	
	public void clicaNoCarrinho() {
		this.btnCarrinho.click();
	}
	
	public void abreMenu() {
		this.btnMenu.click();
	}
	
	public void fechaMenu() {
		this.btnFechaMenu.click();
	}
	
	public void vaiParaHomePage() {
		this.abreMenu();
		this.btnInvetario.click();
	}
	
}
