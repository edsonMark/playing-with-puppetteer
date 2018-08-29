const {setWorldConstructor, setDefaultTimeout } =require ('cucumber');
const puppeteer = require('puppeteer');

setDefaultTimeout(60 * 1000);


class GoogleWorld {
  async navigateTo(baseUrl, cookies) {
    this.browser = await puppeteer.launch({
      slowMo: 100,
      headless: false
    });

    const page = await this.browser.newPage();
    if (cookies) await this.setMontyCookie(page, cookies);
    await page.goto(baseUrl);
    this.page = page
  }
  async setMontyCookie(page, cookies) {
      const setCookies = []
      cookies.forEach((cookie) => {
        setCookies.push(page.setCookie(cookie))
      })
      return Promise.all(setCookies)
  }
}

setWorldConstructor(GoogleWorld);
