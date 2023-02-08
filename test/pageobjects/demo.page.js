const testData = require('../resources/testData.json')
class demo{
// fname //*[@placeholder="First Name"]
//lname //*[@placeholder="Last Name"]
//address //*[@ng-model="Adress"]

// get name(){
    //     return $('elemtent or locator or xpath')
    // }
    get fname(){
        return $('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input')
    }
    
    get lname(){
        return $('//*[@placeholder="Last Name"]')
    }
    get address(){
        return $('//*[@ng-model="Adress"]')
    }
    get submit(){
        return $('#submitbtn')
    }
    // get skills(){
    //     return 
    // }
    launchUrl(){
        return browser.url(testData.url);
    }
    async fillTheForm(){
        await this.fname.waitForDisplayed();
        await this.fname.waitForEnabled();
        await this.fname.setValue(testData.firstName);
        await browser.pause(1000);
        await this.lname.setValue(testData.lastName);
        await browser.pause(1000);
        await this.address.setValue(testData.address);
        await browser.pause(1000);
        await this.submit.click();
        await browser.pause(2000);
        await $('#Skills').selectByAttribute("value","Data Analytics");
        await browser.pause(6000);
        await $('#Skills').selectByIndex(3);
        await browser.pause(6000);
        await $('#Skills').selectByVisibleText("C");
        await browser.pause(6000);
    }
}
module.exports = new demo();



