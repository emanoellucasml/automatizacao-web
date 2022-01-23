$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ComprarItens.feature");
formatter.feature({
  "name": "Comprar itens",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@comprarItens"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"standard_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "compra tres itens",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@comprarItens"
    },
    {
      "name": "@comprarTresItens"
    }
  ]
});
formatter.step({
  "name": "eu clicar no filtro",
  "keyword": "Quando "
});
formatter.match({
  "location": "ComprarItensSteps.euClicarNoFiltro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o filtro low to high",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.selecionarOFiltroLowToHigh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Onesie\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Bike Light\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Fleece Jacket\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em checkout",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarEmCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o primeiro nome \"Joao Lucas\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOPrimeiroNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o ultimo nome \"do Nascimento Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOUltimoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o codigo postal \"65485-000\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOCodigoPostal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em continuar",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarEmContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em finish",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarEmFinish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o checkout e completado",
  "keyword": "Entao "
});
formatter.match({
  "location": "ComprarItensSteps.oCheckoutECompletado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"standard_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "escolhe cinco itens, retira um deles e compra quatro",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@comprarItens"
    },
    {
      "name": "@comprarQuatroItens"
    }
  ]
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Backpack\" ao carrinho",
  "keyword": "Quando "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Bike Light\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Fleece Jacket\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Test.allTheThings() T-Shirt (Red)\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Bolt T-Shirt\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover o item \"Sauce Labs Bike Light\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.removerOItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em checkout",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarEmCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o primeiro nome \"Ana\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOPrimeiroNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o ultimo nome \"Nascimento Peres\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOUltimoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o codigo postal \"65485-000\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOCodigoPostal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em continuar",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarEmContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em finish",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarEmFinish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o checkout e completado",
  "keyword": "Entao "
});
formatter.match({
  "location": "ComprarItensSteps.oCheckoutECompletado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"standard_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "escolhe tres itens",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@comprarItens"
    },
    {
      "name": "@desistirDaCompraDeTresItensNaPaginaDeCheckoutYourInformation"
    }
  ]
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Backpack\" ao carrinho",
  "keyword": "Quando "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Bike Light\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Fleece Jacket\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Test.allTheThings() T-Shirt (Red)\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Bolt T-Shirt\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover o item \"Sauce Labs Bike Light\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.removerOItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em checkout",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarEmCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "desistir da compra",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.desistirDaCompra()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "voltar para a pagina inicial",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.voltarParaAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"standard_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "escolhe tres itens",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@comprarItens"
    },
    {
      "name": "@desistirDaCompraDeTresItensNaPaginaDeCheckoutOverview"
    }
  ]
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Backpack\" ao carrinho",
  "keyword": "Quando "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Bike Light\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Fleece Jacket\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Test.allTheThings() T-Shirt (Red)\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o item \"Sauce Labs Bolt T-Shirt\" ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.adicionarOItemAoCarrinho(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover o item \"Sauce Labs Bike Light\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.removerOItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em checkout",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.clicarEmCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o primeiro nome \"Ana\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOPrimeiroNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o ultimo nome \"Nascimento Peres\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOUltimoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o codigo postal \"65485-000\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.informarOCodigoPostal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "desistir da compra",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.desistirDaCompra()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "voltar para a pagina inicial",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarItensSteps.voltarParaAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FazerLogin.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "usuario invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginComErro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"locked_out_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"password\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "RealizarLogin",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginBemSucedido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"standard_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
});