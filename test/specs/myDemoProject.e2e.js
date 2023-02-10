const demo = require("../pageobjects/demo.page")
describe("My First Suite", ()=>{
    beforeEach(async()=>{
        await demo.launchUrl();
    })
    afterEach(async()=>{
        // Destroying the instances or logout the session
    })

    it.skip("First Test Case", async()=>{
        await demo.fillTheForm();
    })

    it.skip("Second Test Case", async()=>{
        await demo.fillTheForm();
    })

    it.skip("Third Test Case", async()=>{
        await demo.fillTheForm();
    })

    it("Fourth Test Case", async()=>{
        await demo.fillTheForm();
    })
    
})

