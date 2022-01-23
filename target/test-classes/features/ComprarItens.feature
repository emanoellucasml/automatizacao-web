#language: pt
#encoding: UTF-8

@comprarItens
Funcionalidade: Comprar itens

Contexto:
	  Quando eu informar o usuario "standard_user"
    E informar a senha "secret_sauce"
    E clicar no botao login
    Entao o sistema exibe a pagina inicial

	@comprarTresItens
  Cenario: compra tres itens
  Quando eu clicar no filtro
  E selecionar o filtro low to high
  E adicionar o item "Sauce Labs Onesie" ao carrinho
  E adicionar o item "Sauce Labs Bike Light" ao carrinho
  E adicionar o item "Sauce Labs Fleece Jacket" ao carrinho
  E clicar no carrinho
  E clicar em checkout
  E informar o primeiro nome "Joao Lucas"
  E informar o ultimo nome "do Nascimento Silva"
  E informar o codigo postal "65485-000"
  E clicar em continuar
  E clicar em finish
  Entao o checkout e completado
   
  
  @comprarQuatroItens
  Cenario: escolhe cinco itens, retira um deles e compra quatro
  Quando adicionar o item "Sauce Labs Backpack" ao carrinho
  E adicionar o item "Sauce Labs Bike Light" ao carrinho
  E adicionar o item "Sauce Labs Fleece Jacket" ao carrinho
  E adicionar o item "Test.allTheThings() T-Shirt (Red)" ao carrinho
  E adicionar o item "Sauce Labs Bolt T-Shirt" ao carrinho 
  E clicar no carrinho
  E remover o item "Sauce Labs Bike Light"
  E clicar em checkout
  E informar o primeiro nome "Ana"
  E informar o ultimo nome "Nascimento Peres"
  E informar o codigo postal "65485-000"
  E clicar em continuar
  E clicar em finish
  Entao o checkout e completado
  
  
  @desistirDaCompraDeTresItensNaPaginaDeCheckoutYourInformation
  Cenario: escolhe tres itens 
  Quando adicionar o item "Sauce Labs Backpack" ao carrinho
  E adicionar o item "Sauce Labs Bike Light" ao carrinho
  E adicionar o item "Sauce Labs Fleece Jacket" ao carrinho
  E adicionar o item "Test.allTheThings() T-Shirt (Red)" ao carrinho
  E adicionar o item "Sauce Labs Bolt T-Shirt" ao carrinho 
  E clicar no carrinho
  E remover o item "Sauce Labs Bike Light"
  E clicar em checkout
  E desistir da compra
  E voltar para a pagina inicial
  Entao o sistema exibe a pagina inicial
  
  
  @desistirDaCompraDeTresItensNaPaginaDeCheckoutOverview
  Cenario: escolhe tres itens 
  Quando adicionar o item "Sauce Labs Backpack" ao carrinho
  E adicionar o item "Sauce Labs Bike Light" ao carrinho
  E adicionar o item "Sauce Labs Fleece Jacket" ao carrinho
  E adicionar o item "Test.allTheThings() T-Shirt (Red)" ao carrinho
  E adicionar o item "Sauce Labs Bolt T-Shirt" ao carrinho 
  E clicar no carrinho
  E remover o item "Sauce Labs Bike Light"
  E clicar em checkout
  E informar o primeiro nome "Ana"
  E informar o ultimo nome "Nascimento Peres"
  E informar o codigo postal "65485-000"
  E desistir da compra
  E voltar para a pagina inicial
  Entao o sistema exibe a pagina inicial
  