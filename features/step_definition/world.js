const {setWorldConstructor} =require ('cucumber');
const puppeteer = require('puppeteer');



class GoogleWorld {
  async navigateTo(url) {
    this.browser = await puppeteer.launch({
      slowMo: 100,
      headless: false
    });
    const page = await this.browser.newPage();
    // this.browser.close();
    await page.goto(url);
    this.page = page
  }
}

setWorldConstructor(GoogleWorld);
