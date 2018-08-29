const {Given, When, And, Then} = require('cucumber');
const {expect} = require('chai')
const baseUrl = 'http://frontend.abtest.digital.arcadiagroup.co.uk/';
const homePage = `${baseUrl}`
const plp = `${baseUrl}en/tsuk/category/new-in-this-week-2169932/new-in-dresses-4938909`;
const blog = `${baseUrl}blog/style`
const plpSecond = `${baseUrl}en/tsuk/category/clothing-427/swimwear-beachwear-3163078`;


// import { grabCookie } from './grabCookie.js'

const sleep = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

const grabCookie = (cookieObject) => {
    let allCookies = []
    // let montyCookie = []
    // let legacyCookie = []

    cookieObject.map((item) => allCookies.push(item.value))

    // const collectAllCookies = cookieObject.filter((item) => item.name !== 'akacd_monty-ab-test')

    // if (collectAllCookies[0].value === 'legacy') {
    //   legacyCookie.push(collectAllCookies[0].value)
    // } else {
    //   montyCookie.push(collectAllCookies[0].value)
    // }

    console.log('grabCookieValue[0] ::: ', allCookies[1])
    console.log('grabCookieValue[0] ::: ', allCookies[0])

    // console.log('grabCookieValue[1] ::: ', grabCookieValue)
    // return collectAllCookies[0].value, collectAllCookies[1].value

    return {
        akaCookie: allCookies[1],
        valueCookie: allCookies[0]
    }
}

const setMontyCookie = async (akaCookie, cookieValue) => {
    await this.page.setCookie(akaCookie, cookieValue)
};


Given('I am on a monty homepage for evans', async function () {
    // await this.navigateTo(baseUrl);
});

Then('the cookie value is Monty cookie or Legacy', async function () {
    // await this.navigateTo(url);
    let allCookies = []
    let montyCookie = []
    let legacyCookie = []

    await this.navigateTo(homePage);
    const cookieOnHomePage = await this.page.cookies()
    allCookies.push(grabCookie(cookieOnHomePage))

    await this.navigateTo(plp);
    setMontyCookie(cookieOnHomePage.akaCookie, cookieOnHomePage.valueCookie)
    const cookieOnPlp = await this.page.cookies()
    allCookies.push(grabCookie(cookieOnPlp))

    await this.navigateTo(blog);
    const cookieOnBlog = await this.page.cookies()
    allCookies.push(grabCookie(cookieOnBlog))

    await this.navigateTo(plpSecond);
    const cookieOnPlpSecond = await this.page.cookies()
    allCookies.push(grabCookie(cookieOnPlpSecond))
    await this.browser.close()


// const total = numOfMontyCookie / 4 * 100

// for(let x = 0; x < 10; x++) {
//     console.log(x)
//     await this.navigateTo(baseUrl);
//     // clear cookies
//     // refresh
//     const cook = await this.page.cookies()
//     const collectAllCookies = cook.filter((item) => item.name !== 'akacd_monty-ab-test')
//     if (collectAllCookies[0].value === 'legacy') {
//       legacyCookie.push(collectAllCookies[0].value)
//     } else {
//       montyCookie.push(collectAllCookies[0].value)
//     }
//
//     allCookies.push(collectAllCookies[0].value)
//  allCookies.push(await this.page.cookies())
//
// }

// console.log('allCookies ::: ', allCookies)
// console.log('montyCookie ::: ', montyCookie)
// console.log('legacyCookie ::: ', legacyCookie)

// const totalRun = allCookies.length
// const total = totalRun / 100%


// console.log('Number of cookies ::: ', totalRun)
// console.log('Cookies % ::: ', total)


//  const cookie = allCookies.find((cookie) => cookie.name == 'dual-run');
//  expect(cookie).to.not.be.undefined;
//  expect(cookie.value).to.be.oneOf(['legacy', 'monty', 'MDirect']);
});
