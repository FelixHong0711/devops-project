const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
  const options = new chrome.Options();
  // options.addArguments("--no-sandbox");
  options.setChromeBinaryPath('/usr/bin/chromium-browser');
  // options.addArguments("--disable-dev-shm-usage");
  options.addArguments("--headless");
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await driver.get('http://localhost:8000/');
    await driver.sleep(800);
    // Find the button element
    const button = await driver.findElement(By.css('button'));

    // Check if the button is clickable
    if (await button.isEnabled()) {
      await driver.sleep(800);
      // Click the button
      await button.click();
      await driver.wait(async () => {
        const buttonText = await button.getText();
        return buttonText.includes('1');}, 1000);
      // Wait for some time to ensure the click action takes effect (you can adjust this as needed)
      await driver.sleep(1000);
      
      // Output success message
      console.log('Button clicked successfully!');
    } else {
      // Output a message if the button is not clickable
      console.log('Button is not clickable.');
    }
  } catch (error) {
    console.error('Test failed with error:', error);
  } finally {
    await driver.quit();
  }
}

runTest();
