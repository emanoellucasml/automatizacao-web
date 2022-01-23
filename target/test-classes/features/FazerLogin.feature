#language: pt
#encoding: UTF-8

@login
Funcionalidade: Login

	@loginComErro
  Cenario: usuario invalido
    Quando eu informar o usuario "locked_out_user"
    E informar a senha "password"
    E clicar no botao login
    Entao o sistema exibe a mensagem de erro
   
  @loginBemSucedido  
	Cenario: RealizarLogin
    Quando eu informar o usuario "standard_user"
    E informar a senha "secret_sauce"
    E clicar no botao login
    Entao o sistema exibe a pagina inicial
