const {Given,When,And,Then} = require('cucumber');
const {expect} = require('chai')
const url = 'https://www.asos.com';

const sleep = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

Given('I am on the asos Homepage', async function () {
  await this.navigateTo(url);
});

Given('I Navigate to the Australian Store', async function () {
  await this.page.click('button[data-testid=change-button]');
  await sleep(1000)
  await this.page.select('#country', 'AU');
  await this.page.click('button[data-testid=save-country-button]');
 const currentUrl = this.page.url();
  expect(currentUrl).to.include('au');
});

When('I search for purple t shirts', async function () {
  await this.page.focus('#chrome-search');
  await this.page.keyboard.type('purple tshirt');
  await Promise.all([
    this.page.click('button[data-testid=search-button-inline]'),
    this.page.waitForNavigation(),
  ])
});

Then('I should see some purple t shirts', async function () {
  const searchResultsMessage = await this.page.$eval('#search-term-banner', el => el.textContent);
  expect(searchResultsMessage).to.equal('Your search results for:"purple tshirt"');
});


Then('I should see New Zealand Dollars', async function () {
  const productPrices = await this.page
    .$$eval('span[data-auto-id="productTilePrice"]', elements => {
      return elements.map(e => e.textContent)
    });
  expect(productPrices.length).to.be.greaterThan(0)
  productPrices.forEach(price => {
    expect(price).to.match(/^\$\d+\.\d{2}$/);
  })

});
