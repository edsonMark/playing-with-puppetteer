const {Given,When,And,Then} = require('cucumber');
const {expect} = require('chai')
const url = 'https://www.asos.com';

Given('I want to order a shirt', async function () {
  await this.navigateTo(url);
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
