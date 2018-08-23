const {Given,When,And,Then} = require('cucumber');
const {expect} = require('chai')
const url = 'http://frontend.abtest.digital.arcadiagroup.co.uk/';

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
  // await this.navigateTo(url);
 let allCookies = []
 let montyCookie = []
 let legacyCookie = []
for(let x = 0; x < 5; x++) {
  console.log(x)
  // await this.navigateTo(url);
  clear cookies
  refresh
  const cook = await this.page.cookies()
  const collectAllCookies = cook.filter((item) => item.name !== 'akacd_monty-ab-test')
  if (collectAllCookies[0].value === 'legacy') {
    legacyCookie.push(collectAllCookies[0].value)
  } else {
    montyCookie.push(collectAllCookies[0].value)
  }
  
  // allCookies.push(collectAllCookies[0].value)
//  allCookies.push(await this.page.cookies())

}

// console.log('allCookies ::: ', allCookies)
console.log('montyCookie ::: ', montyCookie)
console.log('legacyCookie ::: ', legacyCookie)

// const totalRun = allCookies.length
// const total = totalRun / 100%


// console.log('Number of cookies ::: ', totalRun)
// console.log('Cookies % ::: ', total)



//  const cookie = allCookies.find((cookie) => cookie.name == 'dual-run');
//  expect(cookie).to.not.be.undefined;
//  expect(cookie.value).to.be.oneOf(['legacy', 'monty', 'MDirect']);
});
