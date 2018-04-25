const {Given,When,And,Then} = require('cucumber');
const {expect} = require('chai')
const url = 'https://www.google.co.uk/';

Given('I am on the google Homepage', async function () {
  await this.navigateTo(url)
  const pageAddress = this.page.url();
  expect(pageAddress).to.equal(url);
});

When('I enter a search term', async function () {
  await this.page.type('#lst-ib', 'javascript');
  await this.page.$eval('#lst-ib', el => el.blur());

});

When('I click on google search button', function () {
  this.page.click('[name=btnK]');
});

Then('I expect to see the search results', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
