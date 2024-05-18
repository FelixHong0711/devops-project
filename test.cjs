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
    const button = await driver.wait(until.elementLocated(By.css('button')), 5000);

    // Check if the button is clickable
    if (await button.isEnabled()) {
      await driver.sleep(800);
      // Click the button
      await button.click();
      await driver.wait(async () => {
        const buttonText = await button.getText();
        return buttonText.includes('1');}, 1000);

      await driver.sleep(1000);
      
      // Output success message
      console.log('Button clicked successfully and count is working well!');
      console.log('All the tests have been satisfied!');
    } else {
      // Output a message if the button is not clickable
      throw new Error('Button is not clickable!');
    }
  } catch (error) {
    console.error('Test failed:', error);
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