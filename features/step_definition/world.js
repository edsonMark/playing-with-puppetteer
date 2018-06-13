const {setWorldConstructor, setDefaultTimeout } =require ('cucumber');
const puppeteer = require('puppeteer');

setDefaultTimeout(60 * 1000);

class GoogleWorld {
  async navigateTo(url) {
    this.browser = await puppeteer.launch({
      slowMo: 100,
      headless: false
    });
    const page = await this.browser.newPage();

    await page.goto(url);
    this.page = page
  }
}

setWorldConstructor(GoogleWorld);
