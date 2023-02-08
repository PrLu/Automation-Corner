const demo = require("../pageobjects/demo.page")
describe("My First Suite", ()=>{
    it("First Test Case", async()=>{
        await demo.launchUrl();
        await demo.fillTheForm();
        
    })
    
})

