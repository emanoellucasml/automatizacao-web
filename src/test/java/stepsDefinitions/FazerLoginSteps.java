package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;

import helpers.Helper;

public class FazerLoginSteps {
	@Quando("eu informar o usuario {string}")
	public void euInformarOUsuario(String usuario) {
	    Helper.Na(LoginPage.class).insereUsuario(usuario);
	}

	@Quando("informar a senha {string}")
	public void informarASenha(String senha) {
	   Helper.Na(LoginPage.class).insereSenha(senha);
	}

	@Quando("clicar no botao login")
	public void clicarNoBotaoLogin() {
	   Helper.Na(LoginPage.class).clicaNoBotaoLogin();
	}

	@Entao("o sistema exibe a mensagem de erro")
	public void oSistemaExibeAMensagemDeErro() {
	    String msgErroLogin = Helper.driver.findElement(By.xpath("//H3[@data-test='error']")).getText();
	    assertEquals("Epic sadface: Username and password do not match any user in this service", msgErroLogin);
	}

	@Entao("o sistema exibe a pagina inicial")
	public void oSistemaExibeAPaginaInicial() {
		String msgProducts = Helper.driver.findElement(By.xpath("//SPAN[@class='title'][text()='Products']")).getText();
		assertEquals("PRODUCTS", msgProducts);
	}

}
