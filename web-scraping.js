const {Builder,By} = require('selenium-webdriver');

async function start() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://calendar.fullerton.edu/');
    await driver.manage().setTimeouts( { implicit: 10000 } );

    // const title = driver.findElement(By.xpath("//*[@id='divA_Ajax_shell_0']"))
    // const child = title.findElement(By.id('title_divA_Ajax_0'))
    let eventlist = driver.findElements(By.xpath('//ul[@class="EventContainer_UL"]//div[@class="EventCard_Shell Events_CalendarListDetails "]'))


    for (let event of await eventlist) {
        let detail = await event.findElement(By.css('a')).click()
        let page = await driver.findElement(By.className('blackout_on'))
        console.log(await page.findElement(By.className('EventFull_extraoptions')).getText())
        let close = await page.findElement(By.css('input')).click()
        
        // console.log(await event.findElement(By.css('input')).getAttribute('value'))
        console.log(await event.findElement(By.className('EventTitle')).getText())
        console.log(await event.findElement(By.className('EventTime')).getText())
        console.log('\n')
    }
}

start()