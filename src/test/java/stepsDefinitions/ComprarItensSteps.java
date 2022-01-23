package stepsDefinitions;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import helpers.Helper;
import io.cucumber.java.pt.Quando;
import pageObjects.*;

import static org.junit.Assert.assertEquals;

public class ComprarItensSteps {
	@Quando("eu clicar no filtro")
	public void euClicarNoFiltro() {
	   Helper.Na(HomePage.class).clicaNoFiltro();
	}

	@Quando("selecionar o filtro low to high")
	public void selecionarOFiltroLowToHigh() {
	    Helper.Na(HomePage.class).clicaNaOpcaoPrecoCrescente();
	}
	
	@Quando("adicionar o item {string} ao carrinho")
	public void adicionarOItemAoCarrinho(String nomeItem) {
	    Helper.Na(HomePage.class).AdicionaProdutoAoCarrinho(nomeItem);
	}

	@Quando("clicar no carrinho")
	public void clicarNoCarrinho() {
	    Helper.Na(HomePage.class).clicaNoCarrinho();
	}

	@Quando("clicar em checkout")
	public void clicarEmCheckout() {
	    Helper.Na(YourCartPage.class).clicaNoBotaoCheckout();
	}
	
	@E("^informar o primeiro nome \"([^\"]*)\"$")
	public void informarOPrimeiroNome(String  primeiroNome){
		Helper.Na(CheckoutYourInformationPage.class).inserePrimeiroNome(primeiroNome);
	}
	
	@E("^informar o ultimo nome \"([^\"]*)\"$")
	public void informarOUltimoNome(String ultimoNome) {
		Helper.Na(CheckoutYourInformationPage.class).insereUltimoNome(ultimoNome);
	}

	@E("^informar o codigo postal \"([^\"]*)\"$")
	public void informarOCodigoPostal(String codigo){
		Helper.Na(CheckoutYourInformationPage.class).insereCodigoPostal(codigo);
	}

	@Quando("clicar em continuar")
	public void clicarEmContinuar() {
	    Helper.Na(CheckoutYourInformationPage.class).clicaEmContinuar();
	}

	@Quando("clicar em finish")
	public void clicarEmFinish() {
	    Helper.Na(CheckoutOverviewPage.class).clicaEmTerminar();
	}

	@Entao("o checkout e completado")
	public void oCheckoutECompletado() {
		String expected = "THANK YOU FOR YOUR ORDER";
	    String actual = Helper.Na(CheckoutCompletePage.class).getTextFromThankYouCheckout();
	    assertEquals(expected, actual);
	}

	@E("^remover o item \"([^\"]*)\"$")
	public void removerOItem(String item) {
		Helper.Na(YourCartPage.class).removeItem(item);
	}

	@E("^desistir da compra$")
	public void desistirDaCompra() {
		Helper.Na(CancelablePage.class).clicaNoBotaoCancelar();
	}

	@E("^voltar para a pagina inicial$")
	public void voltarParaAPaginaInicial() {
		Helper.Na(BasePage.class).vaiParaHomePage();
	}

}
