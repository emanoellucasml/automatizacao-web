package stepsDefinitions;

import static helpers.Helper.*;

import helpers.Helper;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import pageObjects.LoginPage;

public class Hooks {
	
	@Before()
	public void setUp() {
		Helper.abrirSistema();
	}

	@After()
	public void tearDown(Scenario scenario) throws Exception {
		capturarTela(scenario);
		driver.quit();
	}

}
