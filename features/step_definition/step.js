const {Given,When,And,Then} = require('cucumber');
const {expect} = require('chai')
const url = 'https://www.evans.co.uk';

const sleep = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

Given('I am on a monty homepage for evans', async function () {
  await this.navigateTo(url);
});

Then('the cookie value is Monty cookie or Legacy', async function () {
 const allCookies = await this.page.cookies();
 const cookie = allCookies.find((cookie) => cookie.name == 'dual-run');
 expect(cookie).to.not.be.undefined;
 expect(cookie.value).to.be.oneOf(['legacy', 'monty']);
});
