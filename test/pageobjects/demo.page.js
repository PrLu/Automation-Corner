const testData = require('../resources/testData.json')
const objXpath = require('../resources/objectXpath.json')
class demo{
// fname //*[@placeholder="First Name"]
//lname //*[@placeholder="Last Name"]
//address //*[@ng-model="Adress"]

// get name(){
    //     return $('elemtent or locator or xpath')
    // }
    get fname(){
        return $(objXpath.demoPage.firstName_tBox)
    }
    
    get lname(){
        return $(objXpath.demoPage.lastName_tBox)
    }
    get address(){
        return $(objXpath.demoPage.address_tBox)
    }
    get submit(){
        return $(objXpath.demoPage.submit_btn)
    }
    // get test(){
    //     return $(demoVar);
    // }

    get lang(){
        return $(objXpath.demoPage.language_cmBox)
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
        await this.lang.click();
        await $('#Skills').selectByAttribute("value","Data Analytics");
        await browser.pause(2000);
        await $('#Skills').selectByIndex(3);
        await browser.pause(2000);
        await $('#Skills').selectByVisibleText("C");
        await browser.pause(2000);
    }
}
module.exports = new demo();



