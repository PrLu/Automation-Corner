const testData = require('../resources/testData.json')
const objXpath = require('../resources/objectXpath.json')
class demo{
    get fname(){
        return $(objXpath.demoPage.firstName_tBox)
    }
    
    get lname(){
        return $(objXpath.demoPage.lastName_tBox)
    }
    get address(){
        return $(objXpath.demoPage.address_tBox)
        
    }
    get emailaddress(){
        return $(objXpath.demoPage.EmailAdress_tBox)
    }
    
    get phone(){
        return $(objXpath.demoPage.Phone_tBox)
    }
    get gender(){
        return $(objXpath.demoPage.Gender_radiobtn)
    }
    get hobbies(){
        return $(objXpath.demoPage.Hobbies_chkbox)
            }
    get lang(){
        return $(objXpath.demoPage.language_cmBox)
    }
    get DOB(){
        return $(objXpath.demoPage.DOBYear)
    }
    get Dobmonth(){
        return $(objXpath.demoPage.DOBMonth)
            }
    get Dobday(){
        return $(objXpath.demoPage.DOBDay)
    }
    get pwd(){
        return $(objXpath.demoPage.Password)
        }
    get confmpwd(){
        return $(objXpath.demoPage.ConfirmPwd)
    }
        get submit(){
            return $(objXpath.demoPage.submit_btn)
        }
         
        
    launchurl(){
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
        await this.phone.setValue(testData.phone);
        await browser.pause(1000);
        
        await this.gender.setValue(testData.gender);
        await browser.pause(1000);
        await this.hobbies.setValue(testData.hobbies);
        await browser.pause(1000);
        await this.lang.click();
        await $('#msdd').selectByAttribute("value","Arabic");
        await this.submit.click();
        await browser.pause(2000);
        await $('#Skills').selectByAttribute("value","Data Analytics");
        await browser.pause(2000);
        await $('#Skills').selectByIndex(3);
        await browser.pause(2000);
        await $('#Skills').selectByVisibleText("C");
        await browser.pause(2000);
        await $('//*[@id="select2-country-container"]').selectByIndex(2);
        await browser.pause(2000);
        await this.DOB.setValue(testData.DOBYear);
        await browser.pause(1000);
        await this.DOBMonth.setValue(testData.DOBMonth);
        await browser.pause(1000);
        await this.DOBDay.setValue(testData.DOBDay);
        await browser.pause(1000);
        await this.passwrd.setValue(testData.Password);
        await browser.pause(1000);
        await this.Confirmpasswd.setValue(testData.ConfirmPassword);
        await browser.pause(1000);
        await this.submit.click();
        await browser.pause(2000);


    }
}
module.exports = new demo();

