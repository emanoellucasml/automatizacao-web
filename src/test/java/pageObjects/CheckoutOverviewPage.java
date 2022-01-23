package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import net.bytebuddy.agent.builder.AgentBuilder.RedefinitionStrategy.ResubmissionScheduler.Cancelable;

public class CheckoutOverviewPage{
	
	@FindBy(name = "finish")
	protected WebElement btnFinish;
	
	public void clicaEmTerminar() {
		this.btnFinish.click();
	}

}
