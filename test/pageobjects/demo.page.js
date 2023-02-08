
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
    launchUrl(){
        return browser.url('https://demo.automationtesting.in/Register.html')
    }
    async fillTheForm(){
        await this.fname.waitForDisplayed();
        await this.fname.waitForEnabled();
        await this.fname.setValue("Prem");
        await this.lname.setValue("Padayachi");
        await this.address.setValue("Address");
        await this.submit.click();
    }
}
module.exports = new demo();



