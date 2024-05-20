const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function runTest() {
  const options = new chrome.Options();
  // options.addArguments("--no-sandbox");
  options.setChromeBinaryPath("/usr/bin/chromium-browser");
  // options.addArguments("--disable-dev-shm-usage");
  options.addArguments("--headless");
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    // The port configured in docker
    await driver.get("http://localhost:8000/");

    await driver.sleep(800);
    // I will perform 2 test, first is if button clickable, then I will check the content (count) of button,
    // if not clickable -> display error immediately
    // Find the button element
    const button = await driver.wait(
      until.elementLocated(By.css("button")),
      5000,
    );

    // Check if the button is clickable
    if (await button.isEnabled()) {
      await driver.sleep(800);
      // Click the button
      await button.click();

      await driver.sleep(800);
      // Get the button text
      const buttonText = await button.getText();

      // Check if the count is working well
      if (buttonText.includes("1")) {
        console.log("Button clicked successfully!");
        console.log("Count is working well!");
      } else {
        throw new Error("Count is not working well!");
      }
    } else {
      // Output a message if the button is not clickable
      throw new Error("Button is not clickable!");
    }
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
