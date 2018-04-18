const {Given,When,And,Then} = require('cucumber');
const url = 'https://www.google.co.uk/';

Given('I am on the google Homepage', function () {
  this.navigateTo(url)
});

When('I enter a search term', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I click on google search button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I expect to see the search results', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
