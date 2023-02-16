const demo = require("../pageobjects/demo.page")

describe("My First Suite", () =>{
            beforeEach(async()=>{
            await demo.launchurl();
        })
        afterEach(async()=>{}
        )
    it("First Test Case",async()=>{
        await demo.fillTheForm();
    })
    it("second Test Case",async()=>{
        await demo.fillTheForm();
            })
     it("Third Test Case",async()=>{
        await demo.fillTheForm();
     })
    it("Fourth Test Case",async()=>{
        await demo.fillTheForm();
})
})
