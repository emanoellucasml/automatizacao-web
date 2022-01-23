package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {
	
	@FindBy(id = "user-name")
	public WebElement inputUser;
	
	@FindBy(id = "password")
	public WebElement inputPassword;
	
	@FindBy(id = "login-button")
	public WebElement btnLogin;
	
	public void insereUsuario(String usuario) {
		this.inputUser.sendKeys(usuario);
	}
	
	public void insereSenha(String senha) {
		this.inputPassword.sendKeys(senha);
	}
	
	public void clicaNoBotaoLogin() {
		this.btnLogin.click();
	}
		
	public void fazLogin(String usuario, String senha) {
		this.insereUsuario(usuario);
		this.insereSenha(senha);
		this.clicaNoBotaoLogin();
	}
}
