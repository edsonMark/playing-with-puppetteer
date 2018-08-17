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

Then('the cookie value is Monty', async function () {
 const allCookies = await this.page.cookies();
 console.log(allCookies);
 allCookies.forEach(cookie=>{
   if (cookie.name === 'dual-run') {
     if (cookie.value==='monty'){
       console.log("//////monty")
     } else if (cookie.value === 'legacy') {
       console.log('/////legacy')
     }
   }
     //expect(cookie.value).to.equal('monty')
  // }
   ///else if{}(allCookies.name('legacy'))}
  // {
   //return legacy
 //});
 })
});


// var allCookies = document.cookie;
//
// if ( allCookies.includes("value_A")
// {
// return variant_A } ;
// Else (allCookies.includes("value_B)
// {
// return variant_B
// };
