const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function runTest() {
  const options = new chrome.Options();
  options.addArguments("--no-sandbox");
  options.addArguments("--disable-dev-shm-usage");
  options.addArguments("--headless");
  options.addArguments("--disable-gpu");
  options.addArguments("--window-size=1920,1080");
  
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    // The port configured in docker
    await driver.get("http://localhost:8000/");

    // Wait for the page to be fully loaded
    await driver.wait(until.elementLocated(By.css("body")), 10000);

    // Find and wait for the button element with increased timeout
    const button = await driver.wait(
      until.elementLocated(By.css("button")),
      10000,
      "Button not found after 10 seconds"
    );

    // Wait for the button to be clickable
    await driver.wait(
      until.elementIsEnabled(button),
      10000,
      "Button not clickable after 10 seconds"
    );

    // Click the button
    await button.click();

    // Wait for the button text to update
    await driver.wait(
      async () => {
        const buttonText = await button.getText();
        return buttonText.includes("1");
      },
      10000,
      "Button count did not update to 1 after 10 seconds"
    );

    console.log("Button clicked successfully!");
    console.log("Count is working well!");
  } catch (error) {
    console.error("Test failed:", error);
    throw error;
  } finally {
    await driver.quit();
  }
}

(async () => {
  try {
    await runTest();
  } catch (error) {
    process.exit(1);
  }
})();
